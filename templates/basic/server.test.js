import request from "supertest";
import app from "./server";

describe("API Endpoints", () => {
  it("should return Hello World on GET /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("Hello World!");
  });
});
