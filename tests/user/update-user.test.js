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
});
