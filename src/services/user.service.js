const bcrypt = require("bcrypt");

const { usersRepository } = require("../repositories");
const { NotFoundException } = require("../app/exceptions");
const { USER_NOT_EXISTS } = require("../app/exceptions");

class UserService {
  constructor() {
    this.usersRepository = usersRepository;
  }
  async addUser(user) {
    const passwordHash = await UserService.generateHashPasswords(user.senha);
    user.senha = passwordHash;

    const userCreated = this.usersRepository.create(user);
    await this.usersRepository.save(userCreated);
    return userCreated;
  }
  async updateUser(cpf, user) {
    if (user.senha) {
      const passwordHash = await UserService.generateHashPasswords(user.senha);
      user.senha = passwordHash;
    }
    let userExists = this.usersRepository.findUserByCPF(cpf);
    userExists = { ...userExists, ...user };

    await this.usersRepository.update(userExists);
    return userExists;
  }
  async findUserByCPF(cpf) {
    const userExists = await this.usersRepository.findOne(cpf);

    if (!userExists) throw new NotFoundException(USER_NOT_EXISTS);
    return userExists;
  }
  async getAllUsers() {
    const users = await this.usersRepository.find();
    return users;
  }
  async getAllPets() {
    const users = await this.usersRepository.find();
    return users;
  }

  async deleteUser(cpf) {
    const user = await this.findPetById(cpf);
    await this.usersRepository.delete(cpf);
    return user;
  }

  async generateHashPasswords(password) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHash = bcrypt.hash(password, salt);
    return passwordHash;
  }
}

module.exports = UserService;
