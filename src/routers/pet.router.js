const { Router } = require("express");
const { petController } = require("../controllers");
const { addPetDto, updatePetDto } = require("../dtos");

const petRouters = Router();

petRouters.get("/", petController.getAllPets.bind(petController));
petRouters.get("/:id", petController.findPetById.bind(petController));
petRouters.get("/:id/tutores", petController.getAllTutors.bind(petController));
petRouters.post("/", addPetDto, petController.addPet.bind(petController));
petRouters.patch(
  "/:id",
  updatePetDto,
  petController.updatePet.bind(petController),
);
petRouters.delete("/:id", petController.deletePet.bind(petController));

module.exports = petRouters;
