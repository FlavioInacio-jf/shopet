const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    cpf: {
      primary: true,
      type: "varchar",
      generated: false,
      length: 11,
      require: true,
    },
    nome: {
      type: "varchar",
      length: 255,
      require: true,
    },
    telefone: {
      type: "varchar",
      length: 45,
      require: true,
    },
    email: {
      type: "varchar",
      require: true,
    },
    login: {
      type: "varchar",
      length: 45,
      require: true,
    },
    senha: {
      type: "varchar",
      length: 45,
      require: true,
    },
    cep: {
      type: "varchar",
      length: 45,
      require: true,
    },
    createdAt: {
      type: "timestamp",
      createDate: true,
    },
    updatedAt: {
      type: "timestamp",
      updateDate: true,
    },
  },
});
