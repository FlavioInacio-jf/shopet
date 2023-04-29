require("express-async-errors");
require("reflect-metadata");

const swaggerUi = require("swagger-ui-express");
const express = require("express");
const cors = require("cors");
const { swagger } = require("./app/docs");

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

router.get("/", (_, res) => {
  return res.redirect("/docs");
});
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swagger));

module.exports = { app };
