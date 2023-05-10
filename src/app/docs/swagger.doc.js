const {
  SUCCESSFULLY_CREATED_USER,
  SUCCESSFULLY_DELETED_USER,
  SUCCESSFULLY_UPDATED_USER,
  SUCCESSFULLY_CREATED_PET,
  SUCCESSFULLY_DELETED_PET,
  SUCCESSFULLY_UPDATED_PET,
} = require("../../messages");
const { Sex } = require("../../enums");

module.exports = {
  openapi: "3.0.0",
  info: {
    title: "SHOPET API",
    description: "API REST SHOPET",
    version: "1.0.0",
    contact: {
      email:
        "jflavioinacio22@gmail.com/Danielnatham@gmail.com/adrytvd@gmail.com",
    },
    license: {
      name: "MIT License",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  paths: {
    "/users": {
      get: {
        tags: ["users"],
        summary: "Get all users",
        description: "Get all users registered in the system",
      },
      post: {
        tags: ["users"],
        summary: "Create a new user",
        description: "Create a new user",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  cpf: {
                    description: "CPF do usuário",
                    type: "string",
                    required: true,
                  },
                  nome: {
                    nome: "Nome do usuário",
                    type: "string",
                    required: true,
                  },
                  telefone: {
                    description: "Telefone do usuário",
                    type: "string",
                    required: true,
                  },
                  email: {
                    description: "E-mail do usuário",
                    type: "string",
                    format: "email",
                    required: true,
                  },
                  login: {
                    description: "Login do usuário",
                    type: "string",
                    required: true,
                  },
                  senha: {
                    description: "Senha do usuário",
                    type: "string",
                    required: true,
                  },
                  cep: {
                    description: "CEP do usuário",
                    type: "string",
                    required: true,
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: SUCCESSFULLY_CREATED_USER,
          },
          409: {
            description: "Usuário já cadastrado no sistema",
          },
        },
      },
    },
    "/users/{cpf}/pets": {
      get: {
        tags: ["users"],
        summary: "Get all user's pets",
        description: "Get all user's pets",
      },
    },
    "/users/{cpf}": {
      get: {
        tags: ["users"],
        summary: "Get a single user by CPF",
        description: "Get a single user by CPF",
        parameters: [
          {
            name: "cpf",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          404: {
            description: "Usuário não encontrado",
          },
        },
      },
      delete: {
        tags: ["users"],
        summary: "Delete user by CPF",
        description: "Delete user by CPF",
        responses: {
          201: {
            description: SUCCESSFULLY_DELETED_USER,
          },
          404: {
            description: "Usuário não encontrado",
          },
        },
      },
      patch: {
        tags: ["users"],
        summary: "Update user",
        description: "Update user by CPF",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  nome: {
                    nome: "Nome do usuário",
                    type: "string",
                    required: false,
                  },
                  telefone: {
                    description: "Telefone do usuário",
                    type: "string",
                    required: false,
                  },
                  email: {
                    description: "E-mail do usuário",
                    type: "string",
                    format: "email",
                    required: false,
                  },
                  login: {
                    description: "Login do usuário",
                    type: "string",
                    required: false,
                  },
                  senha: {
                    description: "Senha do usuário",
                    type: "string",
                    required: false,
                  },
                  cep: {
                    description: "CEP do usuário",
                    type: "string",
                    required: false,
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: SUCCESSFULLY_UPDATED_USER,
          },
          404: {
            description: "Usuário não encontrado",
          },
        },
      },
    },
    "/pets": {
      get: {
        tags: ["pets"],
        summary: "Get all pets",
        description: "Get all pets registered in the system",
      },
      post: {
        tags: ["pets"],
        summary: "Add a new pet",
        description: "Add a new pet",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  user_cpf: {
                    description: "CPF do usuário",
                    type: "string",
                    required: true,
                    minLength: 11,
                    maxLength: 11,
                  },
                  nome: {
                    nome: "Nome do animal",
                    type: "string",
                    required: true,
                    minLength: 5,
                    maxLength: 255,
                  },
                  especie: {
                    description: "Especie do animal",
                    type: "string",
                    required: true,
                    minLength: 2,
                    maxLength: 45,
                  },
                  raca: {
                    description: "Raca do animal",
                    type: "string",
                    required: true,
                    minLength: 2,
                    maxLength: 45,
                  },
                  sexo: {
                    description: "Sexo do animal",
                    required: true,
                    type: "string",
                    enum: Object.values(Sex),
                    minLength: 1,
                    maxLength: 1,
                  },
                  data_nascimento: {
                    description: "Data de nascimento do animal",
                    type: "string",
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                  },
                  peso: {
                    description: "Peso do animal em Kg",
                    type: "number",
                    minimum: 0,
                    required: true,
                  },
                  altura: {
                    description: "Altura do animal em cm",
                    type: "number",
                    minimum: 0,
                    required: true,
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: SUCCESSFULLY_CREATED_PET,
          },
        },
      },
    },
    "/pets/{id}/tutores": {
      get: {
        tags: ["pets"],
        summary: "Catch all owners of a pet",
        description: "Catch all owners of a pet",
      },
    },
    "/pets/{id}": {
      get: {
        tags: ["pets"],
        summary: "Get a single pet by id",
        description: "Get a single pet by id",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          404: {
            description: "Pet não encontrado",
          },
        },
      },
      delete: {
        tags: ["pets"],
        summary: "Delete pet by id",
        description: "Delete pet by id",
        responses: {
          201: {
            description: SUCCESSFULLY_DELETED_PET,
          },
          404: {
            description: "Pet não encontrado",
          },
        },
      },
      patch: {
        tags: ["pets"],
        summary: "Update pet by id",
        description: "Update pet by id",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  nome: {
                    nome: "Nome do animal",
                    type: "string",
                    required: false,
                    minLength: 5,
                    maxLength: 255,
                  },
                  especie: {
                    description: "Especie do animal",
                    type: "string",
                    required: false,
                    minLength: 2,
                    maxLength: 45,
                  },
                  raca: {
                    description: "Raca do animal",
                    type: "string",
                    required: false,
                    minLength: 2,
                    maxLength: 45,
                  },
                  sexo: {
                    description: "Sexo do animal",
                    required: false,
                    type: "string",
                    enum: Object.values(Sex),
                    minLength: 1,
                    maxLength: 1,
                  },
                  data_nascimento: {
                    description: "Data de nascimento do animal",
                    type: "string",
                    required: false,
                    minLength: 10,
                    maxLength: 10,
                  },
                  peso: {
                    description: "Peso do animal em Kg",
                    type: "number",
                    minimum: 0,
                    required: false,
                  },
                  altura: {
                    description: "Altura do animal em cm",
                    type: "number",
                    minimum: 0,
                    required: false,
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: SUCCESSFULLY_UPDATED_PET,
          },
          404: {
            description: "Pet não encontrado",
          },
        },
      },
    },
  },
};
