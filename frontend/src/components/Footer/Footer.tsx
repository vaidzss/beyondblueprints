import { Link } from "react-router-dom";


   const Footer = () => {
  return (
    <footer className="bg-[#492c2d] text-[#310e10] pt-12 pb-6 px-4 md:px-20">
      <div className="grid md:grid-cols-4 gap-8 text-sm justify-items-center items-center">
        {/* Brand Section */}
        <div className="justify-items-center text-white">
          <img src="/logo.jpg" alt="logo" className="size-10 rounded-full mb-3 shadow-lg" />
          <h3 className="text-lg font-bold font-plus">Beyond Blueprint</h3>
          <p className="mt-2 font-light leading-relaxed text-center">
            Crafting timeless interiors and architecture with elegance and intention.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-white">
          <h4 className="text-base font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-center text-white">
            <li><Link to="/" className="hover:text-black hover:font-semibold transition">Home</Link></li>
            <li><Link to="/portfolio" className="hover:text-black transition hover:font-semibold">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-black transition hover:font-semibold">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-black transition hover:font-semibold">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center justify-center text-white">
          <h4 className="text-base font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-center">
            <li><span className="font-medium">Phone:</span> +91 9648477743</li>
            <li><span className="font-medium">Email:</span> beyondblueprintdesign@gmail.com</li>
            <li><span className="font-medium">Address:</span> Infront of Shiva hospital, Bargaon, police chowki, Gonda, Uttar Pradesh 271002</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="justify-items-center items-center text-center text-white">
          <h4 className="text-base font-semibold mb-3 ">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <a href="https://www.instagram.com/beyond.blueprint/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/amannjalan/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://pin.it/1UhTHdhoD" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="https://www.behance.net/amanjalan" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <i className="fab fa-behance"></i>
            </a>
            <a href="https://wa.me/+919648477743" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-xs text-[#ffffff]">
        © {new Date().getFullYear()} Beyond Blueprint. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


