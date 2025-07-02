import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  title: String,
  description: String,
  projectId: String, // ✅ add this field
  url: String,
  public_id: String,
});

export default mongoose.model("Photo", photoSchema);
