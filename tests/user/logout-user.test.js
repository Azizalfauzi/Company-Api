import supertest from "supertest";
import { web } from "../../src/app/web.js";
import { logger } from "../../src/app/logging.js";
import { createTestUser, getTestUser, removeTestUser } from "../test-utils.js";
import bcrypt from "bcrypt";

describe("DELETE /api/users/logout", () => {
  beforeEach(async () => {
    await createTestUser();
  });

  afterEach(async () => {
    await removeTestUser();
  });

  it("should can be logout", async () => {
    const result = await supertest(web)
      .delete("/api/users/logout")
      .set("Authorization", "test");
    console.info(result.body);
    console.info(result.status);

    expect(result.status).toBe(200);
    expect(result.body.data).toBe("Berhasil logout");
  });

  it("should reject logut if token is invalid", async () => {
    const result = await supertest(web)
      .delete("/api/users/logout")
      .set("Authorization", "hehe");

    console.info(result.status);
    console.info(result.body);

    expect(result.status).toBe(401);
  });
});
