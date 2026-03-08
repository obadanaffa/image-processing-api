import supertest from "supertest";
import app from "../src/index";

const request = supertest(app);

describe("Test endpoint responses", () => {
  it("gets the api endpoint", async () => {
    const response = await request.get(
      "/api/images?filename=cse&width=200&height=200",
    );
    expect(response.status).toBe(200);
  });
});
