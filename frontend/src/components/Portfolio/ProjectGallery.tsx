import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

type Photo = {
  _id: string;
  title: string;
  description: string;
  url: string;
  projectId: string;
};

const ProjectGallery = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/api/photos").then((res) => {
      const filtered = res.data.filter((p: Photo) => p.projectId === projectId);
      setPhotos(filtered);
    });
  }, [projectId]);

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  if (photos.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        No photos found for this project.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 pt-10 pb-20">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start text-white bg-[#310e10] py-2 px-6 mb-6 rounded hover:bg-[#502b2d] transition-all duration-300"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-libre text-[#310e10] mb-10 text-center w-full">
        {photos[0]?.title}
      </h1>

      {/* Image + Description Section */}
      <div className="w-full flex flex-col lg:flex-row border rounded-md shadow-md overflow-hidden max-w-7xl">
        {/* Carousel */}
        <div className="relative flex-1 flex items-center justify-center bg-white p-4 overflow-hidden group">
          <button
            onClick={goPrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-4xl text-gray-700 hover:text-black z-10"
          >
            <AiOutlineLeft />
          </button>

          <img
            src={photos[currentIndex].url}
            alt={photos[currentIndex].description}
            className="object-contain max-h-[80vh] w-auto mx-10 rounded transition-transform duration-500 group-hover:scale-105"
          />

          <button
            onClick={goNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-4xl text-gray-700 hover:text-black z-10"
          >
            <AiOutlineRight />
          </button>
        </div>

        {/* Description */}
        <div className="p-6 bg-[#fdf8f3] flex items-center justify-center text-center text-[#6f4d38] font-poppins lg:w-[40%] border-t lg:border-t-0 lg:border-l">
          <p className="text-sm leading-relaxed italic">
            &ldquo;{photos[currentIndex].description}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
