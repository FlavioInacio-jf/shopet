const PetService = require("./pet.service");
const UserService = require("./user.service");

const userService = new UserService();
const petService = new PetService(userService);

module.exports = {
  petService,
  userService,
};
