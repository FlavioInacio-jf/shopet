const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Pet",
  tableName: "pets",
  columns: {
    id_pet: {
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
      length: 9,
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
  },
});
