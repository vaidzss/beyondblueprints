import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Preloader from  "./components/Preloader/Preloader"
import { motion } from "framer-motion";

const Layout: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader on route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200); // Adjust duration
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Preloader loading={loading} />
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Outlet />
        </motion.div>
      )}
    </>
  );
};

export default Layout;
