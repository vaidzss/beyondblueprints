import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingContext } from "./context/LoadingContext";

const Layout: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Handle initial load
  useEffect(() => {
    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setLoading(false);
        setIsInitialLoad(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad]);

  // Handle route changes - show full preloader
  useEffect(() => {
    if (!isInitialLoad) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3500); // Full preloader duration for route changes
      return () => clearTimeout(timer);
    }
  }, [location.pathname, isInitialLoad]);

  // Prevent body scroll when loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <LoadingContext.Provider value={{ loading }}>
      <Preloader loading={loading} />
      
      {/* Always render content when not loading */}
      {!loading && (
        <div className="min-h-screen">
          <Outlet />
        </div>
      )}
    </LoadingContext.Provider>
  );
};

export default Layout;
