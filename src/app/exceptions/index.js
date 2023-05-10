const NotFoundException = require("./not-found.exception");
const ForbiddenException = require("./forbidden.exception");
const messages = require("./messages");

module.exports = {
  NotFoundException,
  ForbiddenException,
  ...messages,
};
