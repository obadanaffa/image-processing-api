import resizeImage from "../src/utilities/resizeImage";

describe("Image processing function", () => {
  it("resizes image successfully", async () => {
    const result = await resizeImage("cse", 200, 200);
    expect(result).toContain("cse");
  });
});
