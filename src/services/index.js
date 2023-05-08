const PetService = require("./pet.service");
const UserService = require("./user.service");

const petService = new PetService();
const userService = new UserService();
module.exports = {
  petService,
  userService,
};
