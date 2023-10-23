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
