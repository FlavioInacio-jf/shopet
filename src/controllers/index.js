const { petService, userService } = require("../services");

const PetController = require("./pet.controller");
const UserController = require("./user.controller");

const petController = new PetController(petService);
const userController = new UserController(userService);

module.exports = {
  petController,
  userController,
};
