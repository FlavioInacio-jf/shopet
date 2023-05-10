const { Router } = require("express");
const { userController } = require("../controllers");

const userRouter = Router();

userRouter.get("/", userController.getAllUsers);
userRouter.get("/:cpf", userController.findUserByCPF);
userRouter.get("/:cpf/pets", userController.getAllPets);
userRouter.post("/", userController.getAllUsers);
userRouter.patch("/:id", userController.updateUser);
userRouter.delete(":id", userController.deleteUser);

module.exports = userRouter;
