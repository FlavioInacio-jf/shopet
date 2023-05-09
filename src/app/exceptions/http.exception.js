class HttpException extends Error {
  constructor({ errors, statusCode }) {
    super();
    this.errors = errors;
    this.statusCode = statusCode;
    this.message = this.errors.length ? this.errors[0] : "";
  }

  getUserMessage() {
    return {
      message: this.message,
      errors: this.errors,
    };
  }

  getStatusCode() {
    return this.statusCode;
  }
}

module.exports = HttpException;
