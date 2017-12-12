const Joi = require('joi');

const schemas = {
  '/signin': Joi.object().keys({
    login: Joi.string(),
    password: Joi.string().min(10),
    email : Jpi.string().email().optional(),
    invitedBy : Joi.string().optional(),
    birth : Joi.date(),
    sex : Joi.string(),
    agreedWithTerms : Joi.boolean(true)
  }),
  '/drinks': Joi.object().keys({
    name : Joi.string().min(3).max(50),
    strength : Joi.number(),
    code : [Joi.string(), Joi.number()],
    alcoholic : Joi.boolean()
  }),
  '/recipes': Joi.object().keys({
    name: Joi.string(),
    ingredients,

  })
};

exports.check = function (schema, body) {
  if (!schemas[schema])  return {};

  return Joi.validate(body, schemas[schema], { presence: 'required' });
};