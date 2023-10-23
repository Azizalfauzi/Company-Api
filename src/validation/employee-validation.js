import Joi from "joi";

const createEmployeeValidation = Joi.object({
  first_name: Joi.string().max(100).required(),
  last_name: Joi.string().max(100).optional(),
  email: Joi.string().max(200).email(),
  address: Joi.string().max(200).optional(),
  position: Joi.string().required(),
  phone: Joi.string().max(20),
});

const getEmployeeValidation = Joi.number().positive().required();

export { createEmployeeValidation, getEmployeeValidation };
