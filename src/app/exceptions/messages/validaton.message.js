const validationMessage = {
  geral: {
    isString: "o campo de ser do tipo string",
    isFloat: "o campo de ser do tipo float",
    isBoolean: "o campo de ser do tipo boolean",
    isEmail: "o campo de ser do tipo e-mail",
    notNull: "o campo não pode ser nulo",
    notEmpty: "o campo não pode estar vazio",
    isRequired: "o campo é obrigatório",
    isIn: values => `os valores válidos para esse campo são: ${values}`,
  },
  isString: {
    minLenght: lenght =>
      `o campo deve no minimo ${lenght} ${
        lenght > 1 ? "caracteres" : "caracter"
      }`,
    maxLenght: lenght =>
      `o campo deve ter no máximo ${lenght} ${
        lenght > 1 ? "caracteres" : "caracter"
      }`,
  },
  number: {
    min: number => `o valor minimo do campo é de ${number}`,
    max: number => `o valor máximo do campo é de ${number}`,
  },
};

module.exports = validationMessage;
