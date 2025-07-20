import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./Preloader.css";

interface PreloaderProps {
  loading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ loading }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (loading) {
      setShouldRender(true);
    } else {
      // Delay hiding to ensure smooth transition
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  // Don't render if not needed
  if (!shouldRender) return null;

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1.4 }}
        >
          {/* Background decorative elements */}
          <div className="preloader-background">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
            <div className="floating-shape shape-4"></div>
          </div>

          {/* Main content */}
          <div className="preloader-content">
            <motion.div
              className="logo-wrapper"
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                rotate: 0,
                transition: { 
                  duration: 0.8, 
                  ease: "easeOut", 
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }
              }}
            >
              <motion.div
                className="logo-container"
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(239, 68, 68, 0.4)",
                    "0 0 0 20px rgba(239, 68, 68, 0)",
                    "0 0 0 0 rgba(239, 68, 68, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1
                }}
              >
                <motion.img
                  src="/logo.jpg"
                  alt="Beyond Blueprint Logo"
                  className="preloader-logo"
                  initial={{ y: 0 }}
                  animate={{ 
                    y: [-10, 0, -10],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  onError={(e) => {
                    // Fallback if logo fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="text-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 1.2,
                  duration: 0.6,
                  ease: "easeOut"
                }
              }}
            >
              <motion.h1
                className="preloader-title"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    delay: 1.4,
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }}
              >
                Beyond Blueprint
              </motion.h1>
              
              <motion.p
                className="preloader-subtitle"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: {
                    delay: 1.6,
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }}
              >
                Interior Design Studio
              </motion.p>
            </motion.div>

            {/* Removed loading bar and loading text for a modern look */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
