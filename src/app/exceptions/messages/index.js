const validationMessage = require("./validaton.message");
const petMessages = require("./pet.message");
const userMessages = require("./user.message");
const usersPetsMessages = require("./users-pets.message");
module.exports = {
  validationMessage,
  ...petMessages,
  ...userMessages,
  ...usersPetsMessages,
};
