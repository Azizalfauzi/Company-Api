import {
  createEmployeeValidation,
  getEmployeeValidation,
} from "../validation/employee-validation.js";
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

const get = async (user, request) => {
  const employeeId = validate(getEmployeeValidation, request);
  const employee = await prismaClient.employee.findFirst({
    where: {
      username: user.username,
      id: employeeId,
    },
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

  if (!employee) {
    throw new ResponseError(404, "Employee not found!");
  }
  return employee;
};
export default {
  create,
  get,
};
