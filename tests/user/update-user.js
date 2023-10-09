import supertest from "supertest";
import { web } from "../../src/app/web.js";
import { logger } from "../../src/app/logging.js";
import { createTestUser, getTestUser, removeTestUser } from "../test-utils.js";
import bcrypt from "bcrypt";
describe("PATCH /api/users/current", () => {

  beforeEach(async () => {
    await createTestUser();
  });

  afterEach(async () => {
    await removeTestUser();
  });

  it("should can be update user", async () => {
    const result = await supertest(web)
      .patch("/api/users/current")
      .set("Authorization", "test")
      .send({
        name: "Aziz",
        password: "rahasia123",
      });
    console.info(result.status);
    console.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("test");
    expect(result.body.data.name).toBe("Aziz");

    const user = await getTestUser();
    console.info(user);
    expect(await bcrypt.compare("rahasia123", user.password)).toBe(true);
  });

  it("should can be update name", async () => {
    const result = await supertest(web)
      .patch("/api/users/current")
      .set("Authorization", "test")
      .send({
        name: "Zuha",
      });
    console.info(result.status);
    console.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.messages).toBe("Berhasil update user");
    expect(result.body.data.name).toBe("Zuha");
  });

  it("should can be update password", async () => {
    const result = await supertest(web)
      .patch("/api/users/current")
      .set("Authorization", "test")
      .send({
        password: "hehe123",
      });
    console.info(result.status);
    console.info(result.body);
    const user = await getTestUser();
    expect(await bcrypt.compare("hehe123", user.password)).toBe(true);
  });

  it("should reject if request is not valid", async () => {
    const result = await supertest(web)
      .patch("/api/users/current")
      .set("Authorization", "salah")
      .send({});
    expect(result.status).toBe(401);
  });
});
