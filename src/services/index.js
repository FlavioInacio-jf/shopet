const PetService = require("./pet.service");
const UserService = require("./user.service");
const UsersPetsService = require("./users-pets.service");

const usersPetsService = new UsersPetsService();
const userService = new UserService(usersPetsService);
const petService = new PetService(usersPetsService);

module.exports = {
  petService,
  userService,
  usersPetsService,
};
