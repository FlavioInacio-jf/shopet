const { appDataSource } = require("../app/config");

module.exports = appDataSource.getRepository("Pet");
