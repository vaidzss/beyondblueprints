import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    customerName: String,
    rating: Number,
    comment: String,
});

export default mongoose.model("Review", reviewSchema);