import {
  createTestEmployee,
  createTestUser,
  getTestEmployee,
  removeTestEmployee,
  removeTestUser,
} from "../test-utils.js";
import supertest from "supertest";
import { web } from "../../src/app/web.js";

describe("GET /api/employee/:employeeId", () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestEmployee();
  });
  afterEach(async () => {
    await removeTestEmployee();
    await removeTestUser();
  });
  
  it("should can get employee", async () => {
    const testEmployee = await getTestEmployee();
    const result = await supertest(web)
      .get("/api/employee/" + testEmployee.id)
      .set("Authorization", "test");
    expect(result.status).toBe(200);
    expect(result.body.message).toBe("Success get data employee");
    expect(result.body.data.first_name).toBe("test");
    expect(result.body.data.last_name).toBe("test");
    expect(result.body.data.email).toBe("test@gmail.com");
    expect(result.body.data.address).toBe("Jl.Test");
    expect(result.body.data.position).toBe("HRD");
    expect(result.body.data.phone).toBe("08223");
  });

  it("should can return 404 if employee id not found!", async () => {
    const testEmployee = await getTestEmployee();
    const result = await supertest(web)
      .get("/api/employee/" + testEmployee.id + 1)
      .set("Authorization", "test");
    expect(result.status).toBe(404);
  });
});
