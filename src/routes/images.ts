import express from "express";
import resizeImage from "../utilities/resizeImage";
import path from "path";
import fs from "fs";

const router = express.Router();

router.get("/", async (req, res) => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  if (!filename) {
    return res.status(400).send("Filename parameter is required");
  }

  if (!width || !height) {
    return res.status(400).send("Width and height parameters are required");
  }

  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    return res
      .status(400)
      .send("Width and height must be valid positive numbers");
  }

  const fullImagePath = path.join("assets/full", `${filename}.jpg`);

  if (!fs.existsSync(fullImagePath)) {
    return res.status(404).send("Image not found");
  }

  try {
    const output = await resizeImage(filename, width, height);
    res.sendFile(path.resolve(output));
  } catch (error) {
    console.error(error);
    res.status(500).send("Image processing failed");
  }
});

export default router;
