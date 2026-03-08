import sharp from "sharp";
import fs from "fs";
import path from "path";

const resizeImage = async (
  filename: string,
  width: number,
  height: number,
): Promise<string> => {
  const inputPath = path.join("assets/full", `${filename}.jpg`);
  const outputPath = path.join(
    "assets/thumb",
    `${filename}_${width}_${height}.jpg`,
  );

  if (fs.existsSync(outputPath)) {
    return outputPath;
  }

  if (!fs.existsSync(inputPath)) {
    throw new Error("Image not found");
  }

  await sharp(inputPath).resize(width, height).toFile(outputPath);

  return outputPath;
};

export default resizeImage;
