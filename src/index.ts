import express from "express";
import images from "./routes/images";

const app = express();
const port = 3000;

app.use("/api/images", images);

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
