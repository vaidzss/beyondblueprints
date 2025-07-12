import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import { motion } from "framer-motion";
import { LoadingContext } from "./context/LoadingContext"; // 👈 import

const Layout: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2100); // Match preloader timing
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <LoadingContext.Provider value={{ loading }}>
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
    </LoadingContext.Provider>
  );
};

export default Layout;
