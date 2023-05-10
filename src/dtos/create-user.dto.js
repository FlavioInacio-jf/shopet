const { body } = require("express-validator");
const { validationMessage } = require("../app/exceptions");
const createUserDto = [
  body("cpf")
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
      min: 11,
      max: 255,
    })
    .withMessage({
      min: validationMessage.isString.minLenght(11),
      max: validationMessage.isString.minLenght(255),
    }),
  body("telefone")
    .exists()
    .withMessage(validationMessage.geral.isRequired)
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
    .exists()
    .withMessage(validationMessage.geral.isRequired)
    .isEmail()
    .withMessage(validationMessage.geral.isEmail)
    .notEmpty({ ignore_whitespace: true })
    .withMessage(validationMessage.geral.notEmpty),
  body("login")
    .exists()
    .withMessage(validationMessage.geral.isRequired)
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
    .exists()
    .withMessage(validationMessage.geral.isRequired)
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
    .exists()
    .withMessage(validationMessage.geral.isRequired)
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

module.exports = createUserDto;
