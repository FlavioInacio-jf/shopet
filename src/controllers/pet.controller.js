const { ResponseSingle } = require("../app/utils");
const {
  SUCCESSFULLY_CREATED_PET,
  SUCCESSFULLY_UPDATED_PET,
  SUCCESSFULLY_DELETED_PET,
  PET_FOUND_SUCCESSFULLY,
  PETS_FOUND_SUCCESSFULLY,
} = require("../messages");

class PetController {
  constructor(petService) {
    this.petService = petService;
  }
  async addPet(req, res) {
    const { body } = req;

    const pet = await this.petService.addPet(body);
    const response = new ResponseSingle(SUCCESSFULLY_CREATED_PET, pet);
    return res.status(200).json(response.getResponseMessage());
  }
  async updatePet(req, res) {
    const { body, params } = req;
    const pet = await this.petService.updatePet(params.id, body);
    const response = new ResponseSingle(SUCCESSFULLY_UPDATED_PET, pet);
    return res.status(201).json(response.getResponseMessage());
  }
  async findPetById(req, res) {
    const { params } = req;
    const pet = await this.petService.findPetById(params.id);
    const response = new ResponseSingle(PET_FOUND_SUCCESSFULLY, pet);
    return res.status(201).json(response.getResponseMessage());
  }
  async getAllPets(req, res) {
    const pets = await this.petService.getAllPets();
    const response = new ResponseSingle(PETS_FOUND_SUCCESSFULLY, pets);
    return res.status(201).json(response.getResponseMessage());
  }
  async getAllTutors(req, res) {
    const { params } = req;
    const pets = await this.petService.getAllTutors(params.id);
    const response = new ResponseSingle(PETS_FOUND_SUCCESSFULLY, pets);
    return res.status(201).json(response.getResponseMessage());
  }
  async deletePet(req, res) {
    const { params } = req;
    const pet = await this.petService.deletePet(params.id);
    const response = new ResponseSingle(SUCCESSFULLY_DELETED_PET, pet);
    return res.status(201).json(response.getResponseMessage());
  }
}

module.exports = PetController;
