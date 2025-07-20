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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-white">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-rose-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-[#310e10] hover:text-rose-600 transition-colors duration-300 font-medium"
            >
              <AiOutlineLeft className="text-lg" />
              <span>Back to Portfolio</span>
            </button>
            
            <div className="text-center">
              <h1 className="text-2xl font-libre text-[#310e10] font-semibold">
                {photos[0]?.title}
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                {currentIndex + 1} of {photos.length} images
              </p>
            </div>
            
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Image Display */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="relative aspect-[16/10] bg-gray-50 flex items-center justify-center group">
            {/* Navigation Buttons */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#310e10] hover:bg-white hover:shadow-lg transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
            >
              <AiOutlineLeft className="text-xl" />
            </button>

            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#310e10] hover:bg-white hover:shadow-lg transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
            >
              <AiOutlineRight className="text-xl" />
            </button>

            {/* Main Image */}
            <img
              src={photos[currentIndex].url}
              alt={photos[currentIndex].description}
              className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Image Description */}
          {photos[currentIndex].description && (
            <div className="p-6 bg-gradient-to-r from-rose-50 to-white border-t border-rose-100">
              <p className="text-[#310e10] text-lg leading-relaxed font-light italic text-center">
                &ldquo;{photos[currentIndex].description}&rdquo;
              </p>
            </div>
          )}
        </div>

        {/* Thumbnail Gallery */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-[#310e10] mb-4 font-libre">
            Project Gallery
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-10 gap-3 lg:gap-2">
            {photos.map((photo, index) => (
              <div
                key={photo._id}
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-2 ring-rose-500 ring-offset-1 lg:ring-offset-0 scale-105'
                    : 'hover:scale-105 hover:shadow-md'
                }`}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay for selected image */}
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-rose-500/20 flex items-center justify-center">
                    <div className="w-6 h-6 lg:w-4 lg:h-4 bg-rose-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 lg:w-1.5 lg:h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                )}
                
                {/* Image number */}
                <div className="absolute top-1 right-1 lg:top-0.5 lg:right-0.5 w-5 h-5 lg:w-4 lg:h-4 bg-black/50 text-white text-xs lg:text-[10px] rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
