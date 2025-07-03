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
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src="/logo.jpg" 
            alt="Logo"
            className="preloader-logo"
            initial={{ scale: 0.9 }}
            animate={{
              scale: [0.9, 1.05, 0.9],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
