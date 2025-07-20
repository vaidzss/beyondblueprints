import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaPinterest, FaBehance, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-rose-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-rose-200/20 to-rose-300/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-amber-200/30 to-orange-300/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 pt-16 pb-8 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img src="/logo.jpg" alt="logo" className="w-12 h-12 rounded-full shadow-lg object-cover" />
                <div>
                  <h3 className="text-xl font-bold font-libre text-[#310e10]">Beyond Blueprint</h3>
                  <p className="text-sm text-[#6f4d38] font-plus">Interior Design Studio</p>
                </div>
              </div>
              <p className="text-[#6f4d38] font-plus leading-relaxed mb-6">
                Crafting timeless interiors and architecture with elegance and intention. We transform spaces into inspiring environments that reflect your unique vision.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/beyond.blueprint/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <FaInstagram className="text-lg" />
                </a>
                <a href="https://www.linkedin.com/in/amannjalan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <FaLinkedinIn className="text-lg" />
                </a>
                <a href="https://pin.it/1UhTHdhoD" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <FaPinterest className="text-lg" />
                </a>
                <a href="https://www.behance.net/amanjalan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <FaBehance className="text-lg" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-libre font-semibold text-[#310e10] mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="flex items-center text-[#6f4d38] font-plus hover:text-[#310e10] transition-all duration-300 group">
                    <FaArrowRight className="text-xs mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="flex items-center text-[#6f4d38] font-plus hover:text-[#310e10] transition-all duration-300 group">
                    <FaArrowRight className="text-xs mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="flex items-center text-[#6f4d38] font-plus hover:text-[#310e10] transition-all duration-300 group">
                    <FaArrowRight className="text-xs mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="flex items-center text-[#6f4d38] font-plus hover:text-[#310e10] transition-all duration-300 group">
                    <FaArrowRight className="text-xs mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-libre font-semibold text-[#310e10] mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaPhone className="text-white text-xs" />
                  </div>
                  <div>
                    <p className="text-[#310e10] font-plus font-medium text-sm">Phone</p>
                    <p className="text-[#6f4d38] font-plus text-sm">+91 96484 77743</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaEnvelope className="text-white text-xs" />
                  </div>
                  <div>
                    <p className="text-[#310e10] font-plus font-medium text-sm">Email</p>
                    <p className="text-[#6f4d38] font-plus text-sm">beyondblueprintdesign@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaMapMarkerAlt className="text-white text-xs" />
                  </div>
                  <div>
                    <p className="text-[#310e10] font-plus font-medium text-sm">Address</p>
                    <p className="text-[#6f4d38] font-plus text-sm">Infront of Shiva hospital, Bargaon Police Chowki, Gonda, Uttar Pradesh 271002</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-libre font-semibold text-[#310e10] mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li className="text-[#6f4d38] font-plus text-sm">Interior Design</li>
                <li className="text-[#6f4d38] font-plus text-sm">Architecture Design</li>
                <li className="text-[#6f4d38] font-plus text-sm">Decor Lighting</li>
                <li className="text-[#6f4d38] font-plus text-sm">Space Planning</li>
                <li className="text-[#6f4d38] font-plus text-sm">Project Management</li>
              </ul>
              
              <div className="mt-6">
                <a href="https://wa.me/+919648477743" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-plus font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <FaWhatsapp className="text-lg" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-rose-200/50 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-[#6f4d38] font-plus text-sm">
                © {new Date().getFullYear()} Beyond Blueprint. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-[#6f4d38] font-plus text-sm">
              <span>Developed by</span>
              <a 
                href="https://vaidz.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#310e10] hover:text-rose-600 transition-colors duration-300 font-medium"
              >
                Vaidic Srivastava
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


