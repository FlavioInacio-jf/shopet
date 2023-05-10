const bcrypt = require("bcrypt");

const { usersRepository } = require("../repositories");
const { NotFoundException, ForbiddenException } = require("../app/exceptions");
const { USER_NOT_EXISTS, USER_ALREADY_EXISTS } = require("../app/exceptions");

class UserService {
  constructor() {
    this.usersRepository = usersRepository;
  }
  async addUser(user) {
    const userAlreadyExistis = await this.findUserByCPF(user.cpf);

    if (userAlreadyExistis) throw new ForbiddenException(USER_ALREADY_EXISTS);

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
    const userExists = await this.findUserByCPF(cpf);
    if (!userExists) throw new NotFoundException(USER_NOT_EXISTS);

    await this.usersRepository.update(cpf, user);
    return { ...userExists, ...user };
  }
  async findUserByCPF(cpf) {
    const userExists = await this.usersRepository.findOne({ where: { cpf } });

    return userExists;
  }
  async getSingleUser(cpf) {
    const userExists = await this.findUserByCPF(cpf);
    if (!userExists) throw new NotFoundException(USER_NOT_EXISTS);

    return userExists;
  }
  async getAllUsers() {
    const users = await this.usersRepository.find();
    return users;
  }
  async getAllPets(cpf) {
    const userExists = await this.findUserByCPF(cpf);
    if (!userExists) throw new NotFoundException(USER_NOT_EXISTS);

    const pets = await this.usersRepository.find({
      where: { user_cpf: cpf },
      relations: {
        users_pets: true,
      },
    });
    return pets;
  }

  async deleteUser(cpf) {
    const userExists = await this.findUserByCPF(cpf);
    if (!userExists) throw new NotFoundException(USER_NOT_EXISTS);

    await this.usersRepository.remove(userExists);
    return userExists;
  }

  static async generateHashPasswords(password) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHash = bcrypt.hash(password, salt);
    return passwordHash;
  }
}

module.exports = UserService;
