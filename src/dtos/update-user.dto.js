const { body } = require("express-validator");
const { validationMessage } = require("../app/exceptions");

const updateUserDto = [
  body("nome")
    .isString()
    .withMessage(validationMessage.geral.isString)
    .notEmpty({ ignore_whitespace: true })
    .withMessage(validationMessage.geral.notEmpty)
    .isLength({
      min: 11,
      max: 255,
    })
    .withMessage({
      min: validationMessage.isString.minLenght(11),
      max: validationMessage.isString.minLenght(255),
    }),
  body("telefone")
    .isString()
    .withMessage(validationMessage.geral.isString)
    .notEmpty({ ignore_whitespace: true })
    .withMessage(validationMessage.geral.notEmpty)
    .isLength({
      min: 11,
      max: 13,
    })
    .withMessage({
      min: validationMessage.isString.minLenght(11),
      max: validationMessage.isString.minLenght(13),
    }),
  body("email")
    .isEmail()
    .withMessage(validationMessage.geral.isEmail)
    .notEmpty({ ignore_whitespace: true })
    .withMessage(validationMessage.geral.notEmpty),
  body("login")
    .isString()
    .withMessage(validationMessage.geral.isString)
    .notEmpty({ ignore_whitespace: true })
    .withMessage(validationMessage.geral.notEmpty)
    .isLength({
      min: 11,
      max: 45,
    })
    .withMessage({
      min: validationMessage.isString.minLenght(11),
      max: validationMessage.isString.minLenght(45),
    }),
  body("senha")
    .isString()
    .withMessage(validationMessage.geral.isString)
    .notEmpty({ ignore_whitespace: true })
    .withMessage(validationMessage.geral.notEmpty)
    .isLength({
      min: 8,
      max: 45,
    })
    .withMessage({
      min: validationMessage.isString.minLenght(8),
      max: validationMessage.isString.minLenght(45),
    }),
  body("cep")
    .isString()
    .withMessage(validationMessage.geral.isString)
    .notEmpty({ ignore_whitespace: true })
    .withMessage(validationMessage.geral.notEmpty)
    .isLength({
      min: 9,
      max: 9,
    })
    .withMessage({
      min: validationMessage.isString.minLenght(9),
      max: validationMessage.isString.minLenght(9),
    }),
];

module.exports = updateUserDto;
