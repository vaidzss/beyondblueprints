import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Image {
  url: string;
}

const HeroSlideshow: React.FC = () => {
  const [index, setIndex] = useState(0);

  const heroImages: Image[] = [
    { url: "/hero1.png" },
    { url: "/hero2.png" },
    { url: "/hero3.png" },
    { url: "/hero4.png" },
    { url: "/hero5.png" },
    { url: "/hero6.png" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="hero-slideshow relative w-full h-screen">
      <AnimatePresence>
        <motion.img
          key={heroImages[index].url}
          src={heroImages[index].url}
          alt={`Hero ${index}`}
          className="absolute w-full h-full object-cover"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
};

export default HeroSlideshow;
