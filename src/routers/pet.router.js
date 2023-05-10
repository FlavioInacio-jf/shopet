const { Router } = require("express");
const { petController } = require("../controllers");

const petRouters = Router();

petRouters.get("/", petController.getAllPets);
petRouters.get("/:id", petController.findPetById);
petRouters.get("/:id/tutores", petController.getAllTutors);
petRouters.post("/", petController.addPet);
petRouters.patch("/:id", petController.updatePet);
petRouters.delete(":id", petController.deletePet);

module.exports = petRouters;
