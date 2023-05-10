const validationMessage = require("./validaton.message");
const petMessages = require("./pet.message");
const userMessages = require("./user.message");
module.exports = {
  validationMessage,
  ...petMessages,
  ...userMessages,
};
