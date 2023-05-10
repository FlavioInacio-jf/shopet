const { body } = require("express-validator");
const { validationMessage } = require("../app/exceptions");
const { Sex } = require("../enums");

const updatePetDto = [
  body("nome")
    .isString()
    .withMessage(validationMessage.geral.isString)
    .notEmpty({ ignore_whitespace: true })
    .withMessage(validationMessage.geral.notEmpty)
    .isLength({
      min: 5,
      max: 255,
    })
    .withMessage({
      min: validationMessage.isString.minLenght(5),
      max: validationMessage.isString.maxLenght(255),
    }),
  body("especie")
    .isString()
    .withMessage(validationMessage.geral.isString)
    .notEmpty({ ignore_whitespace: true })
    .withMessage(validationMessage.geral.notEmpty)
    .isLength({
      min: 2,
      max: 45,
    })
    .withMessage({
      min: validationMessage.isString.minLenght(2),
      max: validationMessage.isString.maxLenght(45),
    }),
  body("raca")
    .isString()
    .withMessage(validationMessage.geral.isString)
    .notEmpty({ ignore_whitespace: true })
    .withMessage(validationMessage.geral.notEmpty)
    .isLength({
      min: 2,
      max: 45,
    })
    .withMessage({
      min: validationMessage.isString.minLenght(2),
      max: validationMessage.isString.maxLenght(45),
    }),
  body("sexo")
    .isString()
    .withMessage(validationMessage.geral.isString)
    .notEmpty({ ignore_whitespace: true })
    .withMessage(validationMessage.geral.notEmpty)
    .isIn(Object.values(Sex))
    .withMessage(validationMessage.geral.isIn(Object.values(Sex))),
  body("data_nascimento")
    .isString()
    .withMessage(validationMessage.geral.isString)
    .notEmpty({ ignore_whitespace: true })
    .withMessage(validationMessage.geral.notEmpty)
    .isLength({
      min: 10,
      max: 10,
    })
    .withMessage({
      min: validationMessage.isString.minLenght(10),
      max: validationMessage.isString.maxLenght(10),
    }),
  body("peso")
    .isFloat({ min: 0 })
    .withMessage({
      min: validationMessage.number.min(0),
    }),

  body("altura")
    .isFloat({ min: 0 })
    .withMessage({
      min: validationMessage.number.min(0),
    }),
];

module.exports = updatePetDto;
