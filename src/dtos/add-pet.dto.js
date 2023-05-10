const { body } = require("express-validator");
const { validationMessage } = require("../app/exceptions");
const { Sex } = require("../enums");

const addPetDto = [
  body("user_cpf")
    .exists()
    .withMessage(validationMessage.geral.isRequired)
    .isString()
    .withMessage(validationMessage.geral.isString)
    .notEmpty({ ignore_whitespace: true })
    .withMessage(validationMessage.geral.notEmpty)
    .isLength({
      min: 11,
      max: 11,
    })
    .withMessage({
      min: validationMessage.isString.minLenght(11),
      max: validationMessage.isString.minLenght(11),
    }),
  body("nome")
    .exists()
    .withMessage(validationMessage.geral.isRequired)
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
    .exists()
    .withMessage(validationMessage.geral.isRequired)
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
    .exists()
    .withMessage(validationMessage.geral.isRequired)
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
    .exists()
    .withMessage(validationMessage.geral.isRequired)
    .isString()
    .withMessage(validationMessage.geral.isString)
    .notEmpty({ ignore_whitespace: true })
    .withMessage(validationMessage.geral.notEmpty)
    .isIn(Object.values(Sex))
    .withMessage(validationMessage.geral.isIn(Object.values(Sex))),
  body("data_nascimento")
    .exists()
    .withMessage(validationMessage.geral.isRequired)
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
    .exists()
    .withMessage(validationMessage.geral.isRequired)
    .isFloat({ min: 0 })
    .withMessage({
      min: validationMessage.number.min(0),
    }),

  body("altura")
    .exists()
    .withMessage(validationMessage.geral.isRequired)
    .isFloat({ min: 0 })
    .withMessage({
      min: validationMessage.number.min(0),
    }),
];

module.exports = addPetDto;
