const { Router } = require("express");
const { petController } = require("../controllers");

const petRouters = Router();

petRouters.get("/", (req, res) => res.json("Em construção..."));
petRouters.get("/:id", (req, res) => res.json("Em construção..."));
petRouters.post("/", (req, res) => res.json("Em construção..."));
petRouters.put("/:id", (req, res) => res.json("Em construção..."));
petRouters.delete(":id", (req, res) => res.json("Em construção..."));

module.exports = petRouters;
