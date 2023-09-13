import express from "express";
import cors from "cors";
import multer from "multer";
import extractFrames from "ffmpeg-extract-frames";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "media/videos");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/uploads", upload.single("video"), async(req, res) => {
  console.log('extracting frames...')
  await extractFrames({
    input: `media/videos/${req.file.filename}`,
    output: "media/images/%d.png",
  });
  res.json({ message: "Image uploaded successfully" });
});

app.listen(PORT, () => console.log(`server is up and running on port ${PORT}`));
