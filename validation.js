//Import Joi For Validation
const Joi = require("@hapi/joi");

//validations
const userValidation = (data) => {
  const schema = {
    firstname: Joi.string()
      .min(3)
      .required(),
    lastname: Joi.string()
      .min(3)
      .required(),
    email: Joi.string()
      .min(10)
      .required(),
    password: Joi.string()
      .min(8)
      .required()
  };
  return Joi.validate(data, schema);
};

const loginValidation = (data) => {
  const schema = {
    email: Joi.string()
      .min(10)
      .required(),
    password: Joi.string()
      .min(8)
      .required()
  };
  return Joi.validate(data, schema);
};

module.exports.userValidation = userValidation;
module.exports.loginValidation = loginValidation;
