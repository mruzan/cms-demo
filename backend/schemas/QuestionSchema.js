const baseJoi = require('joi');
const extension = require('joi-date-extensions');

const Joi = baseJoi.extend(extension);

const createValidateSchema = Joi.object().keys({
  question: Joi.string().required(),
});

module.exports = {
  createValidateSchema,
};
