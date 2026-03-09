import resizeImage from "../src/utilities/resizeImage";

describe("Image Processing Function", () => {
  it("resizes image successfully", async () => {
    const result = await resizeImage("cse", 200, 200);
    expect(result).toBeTruthy();
  });

  it("throws error if image does not exist", async () => {
    await expectAsync(resizeImage("wrong", 200, 200)).toBeRejected();
  });

  it("throws error for invalid width or height", async () => {
    await expectAsync(resizeImage("cse", -100, 200)).toBeRejected();
  });
});
