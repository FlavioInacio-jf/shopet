class ResponseSingle {
  constructor(message, data) {
    this.message = message;
    this.data = data;
  }
  getResponseMessage() {
    return {
      message: this.message,
      data: this.data,
    };
  }
}

module.exports = ResponseSingle;
