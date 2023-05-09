const HttpException = require("./http.exception");

class NotFoundException extends HttpException {
  constructor(errors) {
    super({ errors, statusCode: 404 });
  }
}

module.exports = NotFoundException;
