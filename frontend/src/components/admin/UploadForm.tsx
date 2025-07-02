import { useState} from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectId, setProjectId] = useState("");
  const [photos, setPhotos] = useState<FileList | null>(null);
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // or sessionStorage.removeItem("token")
    navigate("/"); // redirect to login
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!photos || photos.length === 0) return alert("No photos selected.");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("projectId", projectId);
    for (let i = 0; i < photos.length; i++) {
      formData.append("photos", photos[i]); // field name matches backend
    }

    try {
    const token = localStorage.getItem("token"); // or retrieve from your auth state

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
  return (
    <div className="my-10 justify-items-center items-center ">
        <h2 className="font-plus font-extrabold text-3xl ">
            Projects Upload
        </h2>
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
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
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Logout
    </button>
    </div>
  );
};

export default UploadForm;
