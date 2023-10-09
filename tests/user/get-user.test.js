import supertest from "supertest";
import { web } from "../../src/app/web.js";
import { createTestUser, removeTestUser } from "../test-utils.js";

describe("Get /api/users/current", () => {
  beforeEach(async () => {
    await createTestUser();
  });

  afterEach(async () => {
    await removeTestUser();
  });

  it("should can get current user", async () => {
    const result = await supertest(web)
      .get("/api/users/current")
      .set("Authorization", "test");
    console.info(result.status);
    console.info(result.body.data);
    console.info(result.body.messages);

    expect(result.status).toBe(200);
    expect(result.body.messages).toBe("Berhasil get user");
    expect(result.body.data.username).toBe("test");
    expect(result.body.data.name).toBe("test");
  });

  it("should can if token is invalid", async () => {
    const result = await supertest(web)
      .get("/api/users/current")
      .set("Authorization", "hello");
    expect(result.status).toBe(401);
    expect(result.body.errors).toBeDefined();
  });
});
