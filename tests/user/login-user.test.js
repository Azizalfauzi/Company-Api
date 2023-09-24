import supertest from "supertest";
import { web } from "../../src/app/web.js";
import { createTestUser, removeTestUser } from "../test-utils.js";
describe("Login POST /api/users/login", () => {
  beforeEach(async () => {
    await createTestUser();
  });

  afterEach(async () => {
    await removeTestUser();
  });

  it("should can login", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      username: "test",
      password: "rahasia",
    });
    expect(result.status).toBe(200);
    expect(result.body.data.token).toBeDefined();
    expect(result.body.data.token).not.toBe("test");
  });

  it("should can reject if request invalid", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      username: "",
      password: "",
    });
    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });

  it("should can reject if password wrong", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      username: "test",
      password: "karepmue",
    });
    expect(result.status).toBe(401);
    expect(result.body.errors).toBeDefined();
  });

  it("should can reject if username wrong", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      username: "karepmue",
      password: "rahasia",
    });
    console.info(result.status);
    console.info(result.body);
    expect(result.status).toBe(401);
    expect(result.body.errors).toBeDefined();
  });
});
