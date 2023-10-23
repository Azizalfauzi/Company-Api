import {
  createTestUser,
  removeTestEmployee,
  removeTestUser,
} from "../test-utils.js";
import supertest from "supertest";
import { web } from "../../src/app/web.js";

describe("POST /api/employee", () => {
  beforeEach(async () => {
    await createTestUser();
  });

  afterEach(async () => {
    await removeTestEmployee();
    await removeTestUser();
  });

  it("should can create new employee", async () => {
    const result = await supertest(web)
      .post("/api/employee")
      .set("Authorization", "test")
      .send({
        first_name: "test",
        last_name: "test",
        email: "test@gmail.com",
        address: "test",
        position: "STAFF",
        phone: "08223",
      });
    expect(result.body.data.first_name).toBe("test");
    expect(result.body.data.last_name).toBe("test");
    expect(result.body.data.email).toBe("test@gmail.com");
    expect(result.body.data.address).toBe("test");
    expect(result.body.data.position).toBe("STAFF");
    expect(result.body.data.phone).toBe("08223");
  });

  it("should reject request not valid", async () => {
    const result = await supertest(web)
      .post("/api/employee")
      .set("Authorization", "test")
      .send({
        first_name: "",
        last_name: "test",
        email: "test@gmail.com",
        address: "test",
        position: "HRD",
        phone: "08223",
      });
    console.info(result.body.errors);
    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });
});
