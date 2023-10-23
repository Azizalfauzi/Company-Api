import { createEmployeeValidation } from "../validation/employee-validation.js";
import { validate } from "../validation/validation.js";
import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";

const create = async (user, request) => {
  const employee = validate(createEmployeeValidation, request);
  employee.username = user.username;
  return prismaClient.employee.create({
    data: employee,
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      address: true,
      position: true,
      phone: true,
    },
  });
};

export default {
  create,
};
