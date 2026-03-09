import supertest from "supertest";
import app from "../src/index";
const request = supertest(app);

describe("API Endpoint Tests", () => {
  it("returns resized image for valid request", async () => {
    const response = await request.get(
      "/api/images?filename=cse&width=200&height=200",
    );
    expect(response.status).toBe(200);
  });

  it("returns 400 if parameters are missing", async () => {
    const response = await request.get("/api/images");
    expect(response.status).toBe(400);
  });

  it("returns 404 if image does not exist", async () => {
    const response = await request.get(
      "/api/images?filename=wrong&width=200&height=200",
    );
    expect(response.status).toBe(404);
  });

  it("returns 400 for invalid width or height", async () => {
    const response = await request.get(
      "/api/images?filename=cse&width=-100&height=200",
    );
    expect(response.status).toBe(400);
  });
});
