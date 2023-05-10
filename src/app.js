require("express-async-errors");
require("reflect-metadata");

const swaggerUi = require("swagger-ui-express");
const express = require("express");
const cors = require("cors");

const { swagger } = require("./app/docs");
const { HttpException } = require("./app/exceptions");
const { userRouters, petRouters } = require("./routers");

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

router.get("/", (_, res) => {
  return res.redirect("/docs");
});
router.use("/users", userRouters);
router.use("/pets", petRouters);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swagger));

app.use(router);
app.use((err, req, res, next) => {
  if (err instanceof HttpException) {
    return res.status(err.getStatusCode()).json(err.getUserMessage());
  }
  return res.status(500).json({
    message: "Internal Server Error",
    errros: [
      {
        detail: err.message,
      },
    ],
  });
});

module.exports = { app };
