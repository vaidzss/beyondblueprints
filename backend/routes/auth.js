// routes/auth.js
import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Dummy login credentials
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin12345";

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return res.status(200).json({ token });
  }

  res.status(401).json({ error: "Invalid credentials" });
});

export default router;
