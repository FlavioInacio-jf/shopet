const HttpException = require('./http.exception');

class ForbiddenException extends HttpException {
  constructor(errors) {
    super({ statusCode: 403, errors });
  }
}

module.exports = ForbiddenException;
