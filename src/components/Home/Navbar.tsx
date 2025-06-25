import { useEffect, useRef, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import gsap from "gsap";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [hideTimer, setHideTimer] = useState(null)
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (!isOpen) {
      setShowMenu(true); 
      setIsOpen(true);
    } else {
      setIsOpen(false); 
    }
  };

  
useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Always show navbar at the very top
    if (currentScrollY <= 10) {
      setShowNavbar(true);
      return;
    }

    // Scrolling up
    if (currentScrollY < lastScrollY) {
      setShowNavbar(true);

      // Clear previous timer
      if (hideTimer) clearTimeout(hideTimer);

      // Hide again after 2s idle
      const timer = setTimeout(() => {
        setShowNavbar(false);
      }, 2000);
      setHideTimer(timer);
    } else {
      // Scrolling down
      setShowNavbar(false);
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    if (hideTimer) clearTimeout(hideTimer);
  };
}, [lastScrollY, hideTimer]);
;

  
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



  return (
    <>
      <nav
        className={`${
          showNavbar ? "-translate-y-0" : "-translate-y-full"
        } backdrop-blur-lg bg-[#fbf2e1] sticky top-0 z-50 h-20 flex justify-around px-2 transition-transform duration-750 md:px-10`}
      >
        <div className="logo md:size-14 size-10 md:pt-3 pt-5">
          <img src="/logo.jpg" alt="logo" className="rounded-full" />
        </div>

        <div className="pt-6 hidden md:block">
          <ul className="flex gap-5 font-plus font-semibold">
            <li className="text-[#6f4d38] hover:text-[#310e10] cursor-pointer">Home</li>
            <li className="text-[#6f4d38] hover:text-[#310e10] cursor-pointer">Portfolio</li>
            <li className="text-[#6f4d38] hover:text-[#310e10] cursor-pointer">About Us</li>
            <li className="text-[#6f4d38] hover:text-[#310e10] cursor-pointer">Contact</li>
          </ul>
        </div>

        <button onClick={handleClick} className="md:hidden block">
          <MdMenu size={30} color="#6f4d38" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {showMenu && (
        <div
          ref={menuRef}
          className="mob-nav bg-[#fbf2e1] fixed top-0 right-0 w-full h-screen z-[50] overflow-y-auto"
        >
          <button className="absolute top-4 right-4" onClick={handleClick}>
            <MdClose size={30} />
          </button>

          <ul className="flex flex-col gap-6 mt-24 text-center font-plus font-semibold text-[#6f4d38] text-xl">
            <li className="hover:text-[#310e10]">Home</li>
            <li className="hover:text-[#310e10]">Portfolio</li>
            <li className="hover:text-[#310e10]">About Us</li>
            <li className="hover:text-[#310e10]">Contact</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
