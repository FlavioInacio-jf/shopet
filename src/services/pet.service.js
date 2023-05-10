const { petsRepository } = require("../repositories");
const { NotFoundException } = require("../app/exceptions");
const { PET_NOT_EXISTS } = require("../app/exceptions");

class PetService {
  constructor(usersPetsService) {
    this.petsRepository = petsRepository;
    this.usersPetsService = usersPetsService;
  }
  async addPet(pet) {
    const petCreated = this.petsRepository.create(pet);
    await this.petsRepository.save(petCreated);
    await this.usersPetsService.addPet(petCreated.pet_id, pet.user_cpf);

    return petCreated;
  }
  async updatePet(pet_id, pet) {
    const petExists = this.findPetById(pet_id);

    await this.petsRepository.update(pet_id, pet);
    return { ...petExists, ...pet };
  }
  async findPetById(pet_id) {
    const petExists = await this.petsRepository.findOne({ where: { pet_id } });

    if (!petExists) throw new NotFoundException(PET_NOT_EXISTS);
    return petExists;
  }
  async getAllPets() {
    const pets = await this.petsRepository.find();
    return pets;
  }
  async getAllTutors(pet_id) {
    const petExists = await this.petsRepository.findOne({ where: { pet_id } });
    if (!petExists) throw new NotFoundException(PET_NOT_EXISTS);

    const tutors = await this.usersPetsService.findAllTutors(pet_id);
    return tutors;
  }
  async deletePet(pet_id) {
    const pet = await this.findPetById(pet_id);

    await this.petsRepository.delete(pet_id);
    return pet;
  }
}

module.exports = PetService;
