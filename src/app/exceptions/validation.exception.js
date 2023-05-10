const HttpException = require("./http.exception");

class ValidationException extends HttpException {
  constructor({
    message = "Existem campos que não foram preenchidos corretamente",
    errors,
  }) {
    super({ statusCode: 400, errors });
    this.message = message;
  }
}

module.exports = ValidationException;
