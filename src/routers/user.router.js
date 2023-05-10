const { Router } = require("express");
const { userController } = require("../controllers");
const { createUserDto, updateUserDto } = require("../dtos");

const userRouter = Router();

userRouter.get("/", userController.getAllUsers.bind(userController));
userRouter.get("/:cpf", userController.findUserByCPF.bind(userController));
userRouter.get("/:cpf/pets", userController.getAllPets.bind(userController));
userRouter.post(
  "/",
  createUserDto,
  userController.getAllUsers.bind(userController),
);
userRouter.patch(
  "/:id",
  updateUserDto,
  userController.updateUser.bind(userController),
);
userRouter.delete(":id", userController.deleteUser.bind(userController));

module.exports = userRouter;
