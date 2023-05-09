const { petRepository } = require("../repositories");
const { NotFoundException } = require("../app/exceptions");

class PetService {
  constructor() {
    this.petRepository = petRepository;
  }
  async findPetById(pet_id) {
    const petExists = await this.petRepository.findOne(pet_id);

    if (petExists)
      throw new NotFoundException(["Pet não existe na base de dados"]);
    return petExists;
  }
  async getAllPets() {
    const pets = await this.petRepository.find();
    return pets;
  }
  async addPet(pet) {
    const petCreated = this.petRepository.create(pet);
    await this.petRepository.save(petCreated);
    return petCreated;
  }
  async deletePet(pet_id) {
    const pet = await this.findPetById(pet_id);
    await this.petRepository.delete(pet_id);
    return pet;
  }
}

module.exports = PetService;
