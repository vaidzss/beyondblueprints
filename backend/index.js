// index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import photosRoutes from "./routes/photos.js";
import authRoutes from "./routes/auth.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api", authRoutes); 
app.use("/api", photosRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
