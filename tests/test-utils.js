import { prismaClient } from "../src/app/database";
import bcrypt from "bcrypt";

// USER UTIL TEST
export const removeTestUser = async () => {
  await prismaClient.user.deleteMany({
    where: {
      username: "test",
    },
  });
};

export const createTestUser = async () => {
  await prismaClient.user.create({
    data: {
      username: "test",
      password: await bcrypt.hash("rahasia", 10),
      name: "test",
      role: "ADMIN",
      token: "test",
    },
  });
};

export const getTestUser = async () => {
  return prismaClient.user.findUnique({
    where: { username: "test" },
  });
};

//EMPLOYEE UTIL TEST
export const removeTestEmployee = async () => {
  await prismaClient.employee.deleteMany({
    where: {
      username: "test",
    },
  });
};

export const createTestEmployee = async () => {
  await prismaClient.employee.create({
    data: {
      username: "test",
      first_name: "test",
      last_name: "test",
      email: "test@gmail.com",
      address: "Jl.Test",
      position: "HRD",
      phone: "08223",
    },
  });
};

export const getTestEmployee = async () => {
  return await prismaClient.employee.findFirst({
    where: {
      username: "test",
    },
  });
};
