const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Pet",
  tableName: "pets",
  columns: {
    pet_id: {
      primary: true,
      type: "int",
      generated: true,
      require: true,
    },
    nome: {
      type: "varchar",
      length: 255,
      require: true,
    },
    especie: {
      type: "varchar",
      length: 45,
      require: true,
    },
    raca: {
      type: "varchar",
      length: 45,
      require: true,
    },
    sexo: {
      type: "char",
      length: 1,
      require: true,
    },
    data_nascimento: {
      type: "varchar",
      length: 10,
      require: true,
    },
    peso: {
      type: "float",
      require: true,
    },
    altura: {
      type: "float",
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
  relations: {
    users: {
      type: "many-to-many",
      inverseSide: "pets",
      target: "User",
    },
  },
});
