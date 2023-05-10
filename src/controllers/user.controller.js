class UserController {
  constructor(userService) {
    this.userService = userService;
  }
  async addUser(req, res) {}
  async updateUser(req, res) {}
  async findUserByCPF(req, res) {}
  async getAllUsers(req, res) {}
  async getAllPets(req, res) {}
  async deleteUser(req, res) {}
}

module.exports = UserController;
