const USER_NOT_EXISTS = {
  title: "O usuário não existe",
  detail: "O usuário não foi encontrado na base de dados",
};

const USER_ALREADY_EXISTS = {
  title: "O usuário ja foi cadastrado no sistema",
  detail: "Já existe um usuário com esse CPF cadastrado no sistema",
};

module.exports = {
  USER_NOT_EXISTS,
  USER_ALREADY_EXISTS,
};
