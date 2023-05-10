const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "UsersPets",
  tableName: "users_pets",
  columns: {
    user_cpf: {
      primary: true,
      require: true,
      generated: false,
    },
    pet_id: {
      primary: true,
      require: true,
      generated: false,
    },
  },
  uniques: [
    {
      columns: ["user_cpf", "pet_id"],
    },
  ],
  relations: {
    pets: {
      type: "many-to-one",
      target: "Pet",
      joinColumn: {
        name: "pet_id",
        referencedColumnName: "pet_id",
      },
      inverseSide: "pets",
      onDelete: "CASCADE",
    },
    users: {
      type: "many-to-one",
      target: "User",
      joinColumn: {
        name: "user_cpf",
        referencedColumnName: "cpf",
      },
      inverseSide: "pets",
      cascade: true,
    },
  },
});
