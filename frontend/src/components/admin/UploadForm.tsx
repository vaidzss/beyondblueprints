import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectId, setProjectId] = useState("");
  const [photos, setPhotos] = useState<FileList | null>(null);

  const [customerName, setCustomerName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState<number | "">("");

  const [idCheckMessage, setIdCheckMessage] = useState<string | null>(null);
  const [idCheckColor, setIdCheckColor] = useState<string>("");
  const [isIdValid, setIsIdValid] = useState<boolean | null>(null);
  const [checkingId, setCheckingId] = useState(false);

  const [uploadMessage, setUploadMessage] = useState<string | null>(null);
  const [uploadColor, setUploadColor] = useState<string>("");

  const [reviewMessage, setReviewMessage] = useState<string | null>(null);
  const [reviewColor, setReviewColor] = useState<string>("");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const checkId = async () => {
    if (!projectId) return;

    setCheckingId(true);
    try {
      const res = await axios.get("http://localhost:5000/api/photos");
      const allPhotos = res.data;
      const exists = allPhotos.some((photo: any) => photo.projectId === projectId);

      if (exists) {
        setIdCheckMessage("❌ Project ID already exists!");
        setIdCheckColor("text-red-600");
        setIsIdValid(false);
      } else {
        setIdCheckMessage("✅ Project ID is available.");
        setIdCheckColor("text-green-600");
        setIsIdValid(true);
      }
    } catch (err) {
      console.error("Failed to fetch project IDs", err);
      setIdCheckMessage("⚠️ Error checking Project ID.");
      setIdCheckColor("text-yellow-500");
      setIsIdValid(false);
    } finally {
      setCheckingId(false);
    }
  };

  const handlePhotoUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isIdValid === false) {
      setUploadMessage("❌ Upload blocked: Project ID already exists.");
      setUploadColor("text-red-600");
      return;
    }

    if (isIdValid === null) {
      setUploadMessage("⚠️ Please check if Project ID is available.");
      setUploadColor("text-yellow-500");
      return;
    }

    if (!photos || photos.length === 0) {
      setUploadMessage("❌ No photos selected.");
      setUploadColor("text-red-600");
      return;
    }

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
      setUploadMessage("✅ Photos uploaded successfully!");
      setUploadColor("text-green-600");

      // Reset
      setTitle("");
      setDescription("");
      setProjectId("");
      setPhotos(null);
      setIsIdValid(null);
    } catch (err) {
      console.error(err);
      setUploadMessage("❌ Upload failed.");
      setUploadColor("text-red-600");
    }
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName || !comment || rating === "") {
      setReviewMessage("❌ Please fill out all review fields.");
      setReviewColor("text-red-600");
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
      setReviewMessage("✅ Review submitted successfully!");
      setReviewColor("text-green-600");
      setCustomerName("");
      setComment("");
      setRating("");
    } catch (error) {
      console.error(error);
      setReviewMessage("❌ Failed to submit review.");
      setReviewColor("text-red-600");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIdCheckMessage(null);
      setUploadMessage(null);
      setReviewMessage(null);
    }, 4000);
    return () => clearTimeout(timer);
  }, [idCheckMessage, uploadMessage, reviewMessage]);

  return (
    <div className="relative px-4 max-w-2xl mx-auto mt-20 space-y-12 mb-10">
      {/* Logout */}
      <button
        onClick={handleLogout}
        className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>

      {/* Photo Upload */}
      <div>
        <h2 className="font-plus font-extrabold text-3xl mb-4">Projects Upload</h2>
        <form onSubmit={handlePhotoUpload} className="space-y-4 p-4 border rounded-lg shadow bg-white">
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
          <div className="flex items-center gap-2">
            <input
              type="text"
              name="projectId"
              placeholder="Enter Project ID"
              className="border p-2 w-full"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              onBlur={checkId}
              required
            />
            
          </div>
          <button
              type="button"
              onClick={checkId}
              className="bg-green-600 text-white px-4 py-2 rounded mx-4"
            >
              {checkingId ? (
                <AiOutlineLoading3Quarters className="animate-spin text-white" />
              ) : (
                "Check ID"
              )}
            </button>
         
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Upload Photos
          </button>
           {idCheckMessage && (
            <p className={`text-sm font-semibold mt-1 ${idCheckColor}`}>
              {idCheckMessage}
            </p>
          )}
          {uploadMessage && (
            <p className={`text-sm font-semibold mt-1 ${uploadColor}`}>
              {uploadMessage}
            </p>
          )}
        </form>
      </div>

      {/* Review Upload */}
      <div>
        <h2 className="font-plus font-extrabold text-3xl mb-4">Submit Review</h2>
        <form onSubmit={handleReviewSubmit} className="space-y-4 p-4 border rounded-lg shadow bg-white">
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
          {reviewMessage && (
            <p className={`text-sm font-semibold mt-1 ${reviewColor}`}>
              {reviewMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
