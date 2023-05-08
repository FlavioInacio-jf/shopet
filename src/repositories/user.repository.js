const { appDataSource } = require("../app/config");

module.exports = appDataSource.getRepository("User");
