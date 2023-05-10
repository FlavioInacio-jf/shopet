const { ResponseSingle } = require("../app/utils");
const {
  SUCCESSFULLY_CREATED_USER,
  SUCCESSFULLY_UPDATED_USER,
  USER_FOUND_SUCCESSFULLY,
  SUCCESSFULLY_DELETED_USER,
  USERS_FOUND_SUCCESSFULLY,
} = require("../messages");

class UserController {
  constructor(userService) {
    this.userService = userService;
  }
  async addUser(req, res) {
    const { body } = req;

    const user = await this.userService.addUser(body);
    const response = new ResponseSingle(SUCCESSFULLY_CREATED_USER, user);
    return res.status(200).json(response.getResponseMessage());
  }
  async updateUser(req, res) {
    const { body, params } = req;
    const user = await this.userService.updateUser(params.cpf, body);
    const response = new ResponseSingle(SUCCESSFULLY_UPDATED_USER, user);
    return res.status(201).json(response.getResponseMessage());
  }
  async findUserByCPF(req, res) {
    const { params } = req;
    const user = await this.userService.getSingleUser(params.cpf);
    const response = new ResponseSingle(USER_FOUND_SUCCESSFULLY, user);
    return res.status(201).json(response.getResponseMessage());
  }
  async getAllUsers(req, res) {
    const users = await this.userService.getAllUsers();
    const response = new ResponseSingle(USERS_FOUND_SUCCESSFULLY, users);
    return res.status(201).json(response.getResponseMessage());
  }
  async getAllPets(req, res) {
    const { params } = req;

    const users = await this.userService.getAllPets(params.cpf);
    const response = new ResponseSingle(USERS_FOUND_SUCCESSFULLY, users);
    return res.status(201).json(response.getResponseMessage());
  }
  async deleteUser(req, res) {
    const { params } = req;
    const user = await this.userService.deleteUser(params.cpf);
    const response = new ResponseSingle(SUCCESSFULLY_DELETED_USER, user);
    return res.status(201).json(response.getResponseMessage());
  }
}

module.exports = UserController;
