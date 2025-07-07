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
      const res = await axios.get("http://192.168.31.191:5000/api/photos");
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
      className="w-full py-12 px-4 relative bg-white overflow-hidden"
    >
      <h2 className="text-[#310e10] text-center font-libre font-bold text-5xl">
        Portfolio
      </h2>
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-orange-950 bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60"
      >
        <FaChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-orange-950 bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60"
      >
        <FaChevronRight size={22} />
      </button>

      {/* Large Wide Image */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center mt-10 relative h-[70vh]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            src={photos[current].url}
            alt={photos[current].title}
            key={photos[current]._id}
            className="absolute w-full h-full object-cover rounded-xl shadow-xl"
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* View More Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/portfolio")}
          className="px-6 py-2 bg-[#310e10] text-white font-plus hover:bg-[#fbf2e1] hover:text-black transition-colors duration-300"
        >
          View More
        </button>
      </div>
    </motion.div>
  );
};

export default Carousel;
