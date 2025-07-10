import express from "express";
import {verifyToken} from "../middleware/authmiddleware.js";
import Review from "../models/Review.js";

const router = express.Router();


router.get("/reviews", async (req, res) => {
    try {
        const reviews = await Review.find().sort({ _id: -1 });
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: "Error fetching reviews", error: err });
    }
});

router.post("/reviews", verifyToken, async (req, res) => {
    try {
        const { customerName, rating,comment} = req.body;
        const newReview = new Review({ customerName, rating, comment});
        await newReview.save();
        res.status(201).json({ message: "Review created successfully", review: newReview });
    } catch (err) {
        res.status(500).json({ message: "Error creating review", error: err });
    }
});

export default router;