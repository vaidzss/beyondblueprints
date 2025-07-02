import express from "express";
import multer from "multer";
import fs from "fs";
import cloudinary from "../cloudinary.js";
import Photo from "../models/Photo.js";
import { verifyToken } from "../middleware/authmiddleware.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/admin/upload-multiple", verifyToken, upload.array("photos", 15), async (req, res) => {
  try {
    const { title, description, projectId } = req.body;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    const uploadedPhotos = [];

    for (const file of req.files) {
      const buffer = fs.readFileSync(file.path);

      const uploadPromise = new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { resource_type: "image" },
          async (error, result) => {
            if (error) return reject(error);

            const newPhoto = new Photo({
              title,
              description,
              url: result.secure_url,
              public_id: result.public_id,
              projectId,
            });

            await newPhoto.save();
            fs.unlinkSync(file.path); // remove file from disk
            resolve(newPhoto);
          }
        );

        stream.end(buffer);
      });

      const photoData = await uploadPromise;
      uploadedPhotos.push(photoData);
    }

    res.status(201).json({ message: "Photos uploaded", photos: uploadedPhotos });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});


// GET /api/photos - fetch all
router.get("/photos", async (req, res) => {
  try {
    const photos = await Photo.find().sort({ _id: -1 });
    res.json(photos);
  } catch (err) {
    res.status(500).json({ message: "Error fetching photos", error: err });
  }
});
router.get("/photos/project/:projectId", async (req, res) => {
  try {
    const photos = await Photo.find({ projectId: req.params.projectId });
    res.json(photos);
  } catch (err) {
    res.status(500).json({ message: "Error fetching project photos", error: err });
  }
});

export default router;
