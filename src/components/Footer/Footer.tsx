


   const Footer = () => {
  return (
    <footer className="bg-[#e6ddc8] text-[#310e10] pt-12 pb-6 px-4 md:px-20">
      <div className="grid md:grid-cols-4 gap-8 text-sm justify-items-center items-center">
        {/* Brand Section */}
        <div className="justify-items-center">
          <img src="/logo.jpg" alt="logo" className="size-10 rounded-full mb-3 shadow-lg" />
          <h3 className="text-lg font-bold font-plus">Beyond Blueprint</h3>
          <p className="mt-2 font-light leading-relaxed text-center">
            Crafting timeless interiors and architecture with elegance and intention.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-base font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-center">
            <li><a href="#" className="hover:text-black hover:font-semibold transition">Home</a></li>
            <li><a href="#" className="hover:text-black transition hover:font-semibold">Portfolio</a></li>
            <li><a href="#" className="hover:text-black transition hover:font-semibold">About Us</a></li>
            <li><a href="#" className="hover:text-black transition hover:font-semibold">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center justify-center">
          <h4 className="text-base font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-center">
            <li><span className="font-medium">Phone:</span> phoneNo.</li>
            <li><span className="font-medium">Email:</span> mail</li>
            <li><span className="font-medium">Address:</span> Address</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="justify-items-center items-center text-center">
          <h4 className="text-base font-semibold mb-3 ">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <i className="fab fa-behance"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-xs text-[#000000]">
        © {new Date().getFullYear()} Beyond Blueprint. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


