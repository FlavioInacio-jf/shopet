const { Router } = require("express");
const userRouter = Router();

userRouter.get("/", (req, res) => res.json("Em construção..."));
userRouter.get("/:id", (req, res) => res.json("Em construção..."));
userRouter.post("/", (req, res) => res.json("Em construção..."));
userRouter.put("/:id", (req, res) => res.json("Em construção..."));
userRouter.delete(":id", (req, res) => res.json("Em construção..."));

module.exports = userRouter;
