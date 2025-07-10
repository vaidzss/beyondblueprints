import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectId, setProjectId] = useState("");
  const [photos, setPhotos] = useState<FileList | null>(null);

  // Review form state
  const [customerName, setCustomerName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState<number | "">("");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handlePhotoUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!photos || photos.length === 0) return alert("No photos selected.");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("projectId", projectId);
    for (let i = 0; i < photos.length; i++) {
      formData.append("photos", photos[i]);
    }

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5000/api/admin/upload-multiple",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);
      alert("Photos uploaded successfully");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName || !comment || rating === "") {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const token = localStorage.getItem("token");

const res = await axios.post(
  "http://localhost:5000/api/reviews",
  {
    customerName,
    comment,
    rating,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      console.log(res.data);
      alert("Review submitted successfully!");

      // Clear the review form
      setCustomerName("");
      setComment("");
      setRating("");
    } catch (error) {
      console.error(error);
      alert("Failed to submit review.");
    }
  };

  return (
    <div className="my-10 justify-items-center items-center space-y-10">
      <div>
        <h2 className="font-plus font-extrabold text-3xl mb-4">
          Projects Upload
        </h2>
        <form onSubmit={handlePhotoUpload} className="space-y-4 p-4">
          <input
            type="text"
            placeholder="Title"
            className="border p-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            className="border p-2 w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="file"
            multiple
            accept="image/*"
            className="block"
            onChange={(e) => setPhotos(e.target.files)}
          />
          <input
            type="text"
            name="projectId"
            placeholder="Enter Project ID or Name"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Upload Photos
          </button>
        </form>
      </div>

      {/* Reviews Upload Form */}
      <div>
        <h2 className="font-plus font-extrabold text-3xl mb-4">Submit Review</h2>
        <form onSubmit={handleReviewSubmit} className="space-y-4 p-4">
          <input
            type="text"
            placeholder="Customer Name"
            className="border p-2 w-full"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
          <textarea
            placeholder="Review"
            className="border p-2 w-full"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Rating (1-5)"
            className="border p-2 w-full"
            value={rating}
            onChange={(e) =>
              setRating(e.target.value === "" ? "" : Number(e.target.value))
            }
            min="1"
            max="5"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Submit Review
          </button>
        </form>
      

      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
      </div>
    </div>
  );
};

export default UploadForm;
