const { petsRepository } = require("../repositories");
const { NotFoundException } = require("../app/exceptions");
const { PET_NOT_EXISTS, USER_NOT_EXISTS } = require("../app/exceptions");

class PetService {
  constructor(userService) {
    this.petsRepository = petsRepository;
    this.userService = userService;
  }
  async addPet(pet) {
    const userExists = await this.userService.findUserByCPF(pet.user_cpf);
    if (!userExists) throw new NotFoundException(USER_NOT_EXISTS);

    const petCreated = this.petsRepository.create(pet);
    await this.petsRepository.save(petCreated);
    return petCreated;
  }
  async updatePet(pet_id, pet) {
    let petExists = this.petsRepository.findPetById(pet_id);
    petExists = { ...petExists, ...pet };

    await this.usersRepository.update(petExists);
    return petExists;
  }
  async findPetById(pet_id) {
    const petExists = await this.petsRepository.findOne(pet_id);

    if (!petExists) throw new NotFoundException(PET_NOT_EXISTS);
    return petExists;
  }
  async getAllPets() {
    const pets = await this.petsRepository.find();
    return pets;
  }
  async getAllTutors() {
    const pets = await this.petsRepository.find();
    return pets;
  }
  async deletePet(pet_id) {
    const pet = await this.findPetById(pet_id);
    await this.petsRepository.delete(pet_id);
    return pet;
  }
}

module.exports = PetService;
