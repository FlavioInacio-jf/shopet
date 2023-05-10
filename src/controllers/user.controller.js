const { ResponseSingle } = require("../app/utils");
const { SUCCESSFULLY_CREATED_USER } = require("../messages");

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
  async updateUser(req, res) {}
  async findUserByCPF(req, res) {}
  async getAllUsers(req, res) {}
  async getAllPets(req, res) {}
  async deleteUser(req, res) {}
}

module.exports = UserController;
