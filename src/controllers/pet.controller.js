class PetController {
  constructor(petService) {
    this.petService = petService;
  }
  async addPet(req, res) {}
  async updatePet(req, res) {}
  async findPetById(req, res) {}
  async getAllPets(req, res) {}
  async getAllTutors(req, res) {}
  async deletePet(req, res) {}
}

module.exports = PetController;
