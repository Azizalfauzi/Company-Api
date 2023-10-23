import {
  createTestEmployee,
  createTestUser,
  getTestEmployee,
  removeTestEmployee,
  removeTestUser,
} from "../test-utils.js";
import supertest from "supertest";
import { web } from "../../src/app/web.js";

describe("PUT /api/employee/employeeId", () => {
  beforeEach(async () => {
    await createTestUser();
    await createTestEmployee();
  });

  afterEach(async () => {
    await removeTestEmployee();
    await removeTestUser();
  });

  it("should can update employee by id", async () => {
    const getEmployeeId = await getTestEmployee();
    const result = await supertest(web)
      .put("/api/employee/" + getEmployeeId.id)
      .set("Authorization", "test")
      .send({
        first_name: "aziz",
        last_name: "alfa",
        email: "alfa@gmail.com",
        address: "Jl.Alfa",
        position: "HRD",
        phone: "08223",
      });

    expect(result.status).toBe(200);
    expect(result.body.data.id).toBe(getEmployeeId.id);
    expect(result.body.data.first_name).toBe("aziz");
    expect(result.body.data.last_name).toBe("alfa");
    expect(result.body.data.email).toBe("alfa@gmail.com");
    expect(result.body.data.address).toBe("Jl.Alfa");
    expect(result.body.data.position).toBe("HRD");
    expect(result.body.data.phone).toBe("08223");
  });

  it("should can reject request is invalid", async () => {
    const getEmployeeId = await getTestEmployee();
    const result = await supertest(web)
      .put("/api/employee/" + getEmployeeId.id)
      .set("Authorization", "test")
      .send({
        first_name: "",
        last_name: "alfa",
        email: "alfa@gmail.com",
        address: "Jl.Alfa",
        position: "HRD",
        phone: "08223",
      });
    expect(result.status).toBe(400);
  });

  it("should can reject request is employee not found", async () => {
    const getEmployeeId = await getTestEmployee();
    const result = await supertest(web)
      .put("/api/employee/" + getEmployeeId.id + 1)
      .set("Authorization", "test")
      .send({
        first_name: "aziz",
        last_name: "alfa",
        email: "alfa@gmail.com",
        address: "Jl.Alfa",
        position: "HRD",
        phone: "08223",
      });
    expect(result.status).toBe(404);
  });
});
