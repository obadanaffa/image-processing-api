import request from "supertest";
import app from "../src/index";

describe("API Endpoint Tests", () => {
  it("returns resized image", async () => {
    const response = await request(app).get(
      "/api/images?filename=cse&width=200&height=200",
    );

    expect(response.status).toBe(200);
  });
});
