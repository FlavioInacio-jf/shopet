const {
  SUCCESSFULLY_CREATED_USER,
  SUCCESSFULLY_DELETED_USER,
  SUCCESSFULLY_UPDATED_USER,
} = require("../../messages");

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
                    required: false,
                  },
                  senha: {
                    description: "Senha do usuário",
                    required: false,
                  },
                  cep: {
                    description: "CEP do usuário",
                    required: false,
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
                    required: true,
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
                    required: false,
                  },
                  senha: {
                    description: "Senha do usuário",
                    required: false,
                  },
                  cep: {
                    description: "CEP do usuário",
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
  },
};
