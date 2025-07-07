import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userName: String,
    rating: Number,
    comment: String,
});

export default mongoose.model("Review", reviewSchema);