/* eslint-disable no-unused-vars */
const {
  usersPetsRepository,
  usersRepository,
  petsRepository,
} = require("../repositories");
const { NotFoundException, ForbiddenException } = require("../app/exceptions");
const {
  USER_NOT_EXISTS,
  PET_NOT_EXISTS,
  RELATED_ALREADY_EXISTS,
} = require("../app/exceptions");

class UsersPets {
  constructor() {
    this.usersPetsRepository = usersPetsRepository;
    this.petsRepository = petsRepository;
    this.usersRepository = usersRepository;
  }
  async addPet(pet_id, user_cpf) {
    await this.findUserByCPF(user_cpf);

    await this.findPetById(pet_id);

    const relationAlreadyExists = this.usersPetsRepository.findOne({
      where: { user_cpf, pet_id },
    });

    if (!relationAlreadyExists)
      throw new ForbiddenException(RELATED_ALREADY_EXISTS);

    const relationCreated = this.usersPetsRepository.create({
      pet_id,
      user_cpf,
    });
    await this.usersPetsRepository.save(relationCreated);
  }
  async findAllTutors(pet_id) {
    const tutors = await this.usersPetsRepository.find({
      relations: ["users"],
      where: { pet_id },
    });
    return tutors.map(({ users: { senha, login, ...rest } }) => rest);
  }
  async findAllPets(cpf) {
    const pets = await this.usersPetsRepository.find({
      relations: ["pets"],
      where: { user_cpf: cpf },
    });

    return pets.map(({ pets }) => pets);
  }
  async findUserByCPF(cpf) {
    const userExists = await this.usersRepository.findOne({ where: { cpf } });
    if (!userExists) throw new NotFoundException(USER_NOT_EXISTS);

    return userExists;
  }
  async findPetById(pet_id) {
    const petExists = await this.petsRepository.findOne({ where: { pet_id } });
    if (!petExists) throw new NotFoundException(PET_NOT_EXISTS);
    return petExists;
  }
}

module.exports = UsersPets;
