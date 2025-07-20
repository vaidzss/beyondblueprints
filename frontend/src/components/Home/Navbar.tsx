import { useEffect, useRef, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { motion } from "framer-motion";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleClick = () => {
    if (!isOpen) {
      setShowMenu(true);
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  // Show/hide nav on scroll with background change
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add background when scrolled
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY <= 10) {
        setShowNavbar(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          setShowNavbar(false);
        }, 3000);
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, [lastScrollY]);

  // Animate mobile menu with GSAP
  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => setShowMenu(false),
      });
    }
  }, [isOpen]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  // Get portal root with fallback
  const getPortalRoot = () => {
    const portalRoot = document.getElementById("portal-root");
    if (!portalRoot) {
      // Create portal root if it doesn't exist
      const newPortalRoot = document.createElement("div");
      newPortalRoot.id = "portal-root";
      document.body.appendChild(newPortalRoot);
      return newPortalRoot;
    }
    return portalRoot;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } fixed w-full top-0 z-50 transition-all duration-500 ease-out ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-rose-100/50" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/logo.jpg" 
                alt="logo" 
                className="rounded-full w-12 h-12 md:w-14 md:h-14 object-cover shadow-md" 
              />
              <div>
                <h4 className="font-libre text-lg md:text-xl text-[#310e10] font-semibold">
                  Beyond Blueprint
                </h4>
                <p className="text-xs text-[#6f4d38] font-plus">Interior Design</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-6 py-3 rounded-full font-libre text-[#310e10] font-medium transition-all duration-300 hover:bg-rose-50 hover:text-rose-800 ${
                    location.pathname === item.path 
                      ? "bg-rose-100 text-rose-800" 
                      : ""
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-rose-100 rounded-full -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button 
              onClick={handleClick} 
              className="md:hidden p-2 rounded-full hover:bg-rose-50 transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
            >
              <MdMenu size={28} className="text-[#310e10]" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {showMenu &&
        createPortal(
          <div
            ref={menuRef}
            className="fixed inset-0 z-[9999] bg-gradient-to-br from-rose-50 via-white to-amber-50 overflow-y-auto"
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 z-[10000] p-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 shadow-lg"
              onClick={handleClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MdClose size={28} className="text-[#310e10]" />
            </motion.button>

            {/* Mobile Menu Content */}
            <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
              {/* Logo Section */}
              <motion.div 
                className="flex flex-col items-center justify-center text-center mb-16 w-full"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex flex-col items-center justify-center">
                  <img 
                    src="/logo.jpg" 
                    alt="logo" 
                    className="rounded-full w-24 h-24 object-cover shadow-xl mb-4 mx-auto" 
                  />
                  <h3 className="font-libre text-2xl text-[#310e10] font-semibold mb-2 text-center">
                    Beyond Blueprint
                  </h3>
                  <p className="text-[#6f4d38] font-plus text-center">Interior Design Studio</p>
                </div>
              </motion.div>

              {/* Navigation Links */}
              <div className="space-y-6 w-full max-w-sm">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex justify-center"
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-8 py-4 rounded-2xl font-libre text-xl text-[#310e10] font-medium transition-all duration-300 text-center w-full ${
                        location.pathname === item.path
                          ? "bg-gradient-to-r from-rose-100 to-amber-100 text-rose-800 shadow-lg"
                          : "hover:bg-white/80 hover:shadow-md hover:scale-105"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <motion.div 
                className="mt-16 text-center w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-[#6f4d38] font-plus text-sm mb-2">
                  Ready to transform your space?
                </p>
                <p className="text-[#310e10] font-libre font-medium">
                  Let's create something beautiful together
                </p>
              </motion.div>
            </div>
          </div>,
          getPortalRoot()
        )}
    </>
  );
}

export default Navbar;
