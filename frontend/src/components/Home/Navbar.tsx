import { useEffect, useRef, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import gsap from "gsap";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Show/hide nav on scroll
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

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
        }, 2000);
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

  return (
    <>
      <nav
        className={`${
          showNavbar ? "-translate-y-0" : "-translate-y-full"
        } fixed w-full top-0 z-50 h-20 flex justify-around px-2 transition-transform duration-750 md:px-10`}
      >
        <div className="logo md:size-14 size-10 md:pt-3 pt-5">
          <img src="/logo.jpg" alt="logo" className="rounded-full" />
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-5 font-libre items-center text-[#310e10]">
            <Link to="/" className="hover:text-black">Home</Link>
            <Link to="/portfolio" className="hover:text-black">Portfolio</Link>
            <Link to="/about" className="hover:text-black">About Us</Link>
            <Link to="/contact" className="hover:text-black">Contact</Link>
          </ul>
        </div>

        <button onClick={handleClick} className="md:hidden block">
          <MdMenu size={30} color="#6f4d38" />
        </button>
      </nav>

      {/* ✅ Portal Mobile Menu (outside of pinned content) */}
      {showMenu &&
        createPortal(
          <div
            ref={menuRef}
            className="fixed inset-0 z-[9999] backdrop-blur-sm overflow-y-auto"
          >
            <button
              className="absolute top-4 right-4 z-[10000]"
              onClick={handleClick}
            >
              <MdClose size={30} />
            </button>

            <ul className="flex flex-col gap-6 mt-24 text-center font-libre text-[#310e10] text-xl">
              <Link to="/" className="hover:text-black">Home</Link>
              <Link to="/portfolio" className="hover:text-black">Portfolio</Link>
              <Link to="/about" className="hover:text-black">About Us</Link>
              <Link to="/contact" className="hover:text-black">Contact</Link>
            </ul>
          </div>,
          document.getElementById("portal-root") as HTMLElement
        )}
    </>
  );
}

export default Navbar;
