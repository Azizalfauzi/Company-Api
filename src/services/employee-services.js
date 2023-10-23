import {
  createEmployeeValidation,
  getEmployeeValidation,
  updateEmployeeValidation,
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

const update = async (user, request) => {
  const employee = validate(updateEmployeeValidation, request);
  const totalCountInDatabase = await prismaClient.employee.count({
    where: {
      username: user.username,
      id: employee.id,
    },
  });

  if (totalCountInDatabase !== 1) {
    throw new ResponseError(404, "Employee not found!");
  }

  return prismaClient.employee.update({
    where: {
      id: employee.id,
    },
    data: {
      first_name: employee.first_name,
      last_name: employee.last_name,
      email: employee.email,
      address: employee.address,
      position: employee.position,
      phone: employee.phone,
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
};
export default {
  create,
  get,
  update,
};
