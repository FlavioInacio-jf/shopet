const { validationResult } = require("express-validator");
const { ValidationException } = require("../exceptions");

const validation = async (req, res, next) => {
  const errorFormatter = ({ msg, param }) => ({
    title: `O campo ${param} é inválido`,
    description: msg || `O campo ${param} é inválido`,
  });

  const result = validationResult(req).formatWith(errorFormatter);

  if (!result.isEmpty()) {
    throw new ValidationException({
      message: "Existem campos que não foram preenchidos corretamente",
      errors: result.array({ onlyFirstError: true }),
    });
  }

  return next();
};

module.exports = validation;
