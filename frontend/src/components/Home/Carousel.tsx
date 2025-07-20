import axios from "axios";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Photo = {
  _id: string;
  title: string;
  description: string;
  url: string;
  projectId: string;
};

const Carousel = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await axios.get("http://localhost:5000/api/photos");
      const allPhotos: Photo[] = res.data;

      const projectMap = new Map<string, Photo>();
      let count = 0;

      for (const photo of allPhotos) {
        if (projectMap.has(photo.projectId)) continue;

        // ✅ Use 16:9 ratio or wider
        const isLandscape = await isAspectRatioValid(photo.url, 1.5);
        if (isLandscape) {
          projectMap.set(photo.projectId, photo);
          count++;
        }

        if (count >= 9) break;
      }

      setPhotos(Array.from(projectMap.values()));
    };

    fetchPhotos();
  }, []);

  // ✅ Checks if image is wide enough (>= 16:9)
  const isAspectRatioValid = (url: string, minRatio: number): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const actualRatio = img.naturalWidth / img.naturalHeight;
        resolve(actualRatio >= minRatio);
      };
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1)
    setCurrent((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  if (photos.length === 0) return null;

  const sectionVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit={"exit"}
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariant}
      className="w-full py-16 px-4 relative bg-gradient-to-br from-rose-50 to-white overflow-hidden mt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-rose-200/20 to-rose-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-300/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-rose-100/15 to-pink-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#310e10] font-libre font-bold text-5xl md:text-6xl mb-4">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-500 mx-auto mb-6"></div>
          <p className="text-[#6f4d38] font-plus text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our latest projects and see how we transform spaces into inspiring environments
          </p>
        </div>
        {/* Carousel Container */}
        <div className="relative">
          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm text-[#310e10] p-4 rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 border border-rose-200/50"
          >
            <FaChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm text-[#310e10] p-4 rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 border border-rose-200/50"
          >
            <FaChevronRight size={24} />
          </button>

          {/* Large Wide Image */}
          <div className="w-full flex flex-col items-center relative h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={photos[current]._id}
                className="absolute inset-0"
                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img
                  src={photos[current].url}
                  alt={photos[current].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Removed image counter */}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/portfolio")}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#310e10] to-rose-800 text-white font-plus font-medium rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-amber-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Carousel;
