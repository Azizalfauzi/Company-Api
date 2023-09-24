import supertest from "supertest";
import { createTestUser, removeTestUser } from "../test-utils.js";
import { web } from "../../src/app/web.js";
import { logger } from "../../src/app/logging.js";

describe("Register POST /api/users", () => {
  afterEach(async () => {
    await removeTestUser();
  });

  it("should can be register new user", async () => {
    const result = await supertest(web).post("/api/users").send({
      username: "test",
      password: "rahasia",
      name: "test",
      role: "ADMIN",
    });
    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("test");
    expect(result.body.data.name).toBe("test");
    expect(result.body.data.role).toBe("ADMIN");
    expect(result.body.data.password).toBeUndefined();
    console.info(result.body);
  });

  // it("should error register new user ", async () => {
  //   const result = await supertest(web).post("/api/users").send({
  //     username: "",
  //     password: "",
  //     name: "",
  //     role: "",
  //   });

  //   expect(result.status).toBe(400);
  // });

  // it("should reject if username is already registered", async () => {
  //   let result = await supertest(web).post("/api/users").send({
  //     username: "test",
  //     password: "rahasia",
  //     name: "test",
  //     role: "ADMIN",
  //   });
  //   expect(result.status).toBe(200);
  //   expect(result.body.data.username).toBe("test");
  //   expect(result.body.data.name).toBe("test");
  //   expect(result.body.data.role).toBe("ADMIN");
  //   expect(result.body.data.password).toBeUndefined();
  //   result = await supertest(web).post("/api/users").send({
  //     username: "test",
  //     password: "rahasia",
  //     name: "test",
  //     role: "ADMIN",
  //   });
  //   console.info(result.status);
  //   console.info(result.body);
  //   expect(result.status).toBe(400);
  //   expect(result.body.errors).toBeDefined();
  // });
});
