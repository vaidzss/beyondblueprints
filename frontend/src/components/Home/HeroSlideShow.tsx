import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Image {
  url: string;
  title?: string;
}

const HeroSlideshow: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const heroImages: Image[] = [
    { url: "/hero1.png", title: "Elegant Living Spaces" },
    { url: "/hero2.png", title: "Modern Interior Design" },
    { url: "/hero3.png", title: "Luxury Home Interiors" },
    { url: "/hero4.png", title: "Contemporary Architecture" },
    { url: "/hero5.png", title: "Sophisticated Design" },
    { url: "/hero6.png", title: "Timeless Elegance" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const goToSlide = (newIndex: number) => {
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <div className="hero-slideshow relative w-full h-screen overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10"></div>
      
      {/* Slideshow images */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          className="absolute inset-0"
          custom={direction}
          initial={{ 
            opacity: 0,
            scale: 1.1,
            x: direction > 0 ? 300 : -300 
          }}
          animate={{ 
            opacity: 1,
            scale: 1,
            x: 0 
          }}
          exit={{ 
            opacity: 0,
            scale: 0.9,
            x: direction > 0 ? -300 : 300 
          }}
          transition={{ 
            duration: 1.2,
            ease: [0.4, 0.0, 0.2, 1]
          }}
        >
          <img
            src={heroImages[index].url}
            alt={heroImages[index].title || `Hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
      >
        <FaChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

    

      {/* Hero content overlay */}
      <div className="absolute inset-0 z-15 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-libre font-bold mb-6"
          >
            {heroImages[index].title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl font-plus text-white/90 max-w-2xl mx-auto"
          >
            Transform your space into an inspiring environment with our expert design solutions
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlideshow;
