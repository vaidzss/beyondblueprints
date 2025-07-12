import { motion, AnimatePresence } from "framer-motion";
import "./Preloader.css";

interface PreloaderProps {
  loading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ loading }) => {
  return (
    <AnimatePresence>
  {loading && (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 1.4 }}
    >
      <motion.div
        className="logo-wrapper"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <motion.img
          src="/logo.jpg"
          alt="Logo"
          className="preloader-logo shadow-lg"
          initial={{ y: 0 }}
          animate={{ y: -50 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.h1
        className="preloader-title md:text-xl text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        Beyond Blueprint
      </motion.h1>
    </motion.div>
  )}
</AnimatePresence>

  );
};

export default Preloader;
