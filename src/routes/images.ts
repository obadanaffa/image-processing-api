import express from "express";
import resizeImage from "../utilities/resizeImage";
import path from "path";

const router = express.Router();

router.get("/", async (req, res) => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  if (!filename || !width || !height) {
    return res.status(400).send("Missing parameters");
  }

  if (width <= 0 || height <= 0) {
    return res.status(400).send("Invalid width or height");
  }

  try {
    const imagePath = await resizeImage(filename, width, height);
    res.sendFile(path.resolve(imagePath));
  } catch (error) {
    console.error(error);
    res.status(404).send("Image processing failed");
  }
});

export default router;
