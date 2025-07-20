import Navbar from "../Home/Navbar";
import Footer from "../Footer/Footer";
import { motion, type Variants } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaPinterest, FaBehance, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const sectionVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section id="contact">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-rose-200/20 to-rose-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-300/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-rose-100/15 to-pink-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl text-[#310e10] font-libre font-bold mb-6">
                Let's Create Together
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-500 mx-auto mb-8"></div>
              <p className="text-[#6f4d38] font-plus text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Ready to transform your space? Get in touch and let's bring your vision to life with our expert design solutions.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariant}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-200/30"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-libre font-bold text-[#310e10] mb-4">
                    Start Your Project
                  </h2>
                  <p className="text-[#6f4d38] font-plus">
                    Tell us about your vision and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form
                  action="https://formspree.io/f/mrbkvdrp"
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_redirect" value="http://localhost:5173/thankyou" />

                  <div>
                    <label className="block text-sm font-medium text-[#310e10] mb-2 font-plus">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300 text-[#310e10] font-plus"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#310e10] mb-2 font-plus">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300 text-[#310e10] font-plus"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#310e10] mb-2 font-plus">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-white border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300 text-[#310e10] font-plus resize-none"
                      placeholder="Tell us about your project, space requirements, and vision..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#310e10] to-rose-800 text-white py-4 px-6 rounded-xl font-plus font-medium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariant}
                className="space-y-8"
              >
                {/* Contact Details */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-rose-200/30">
                  <h3 className="text-2xl font-libre font-bold text-[#310e10] mb-6">
                    Get In Touch
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-amber-500 rounded-full flex items-center justify-center">
                        <FaEnvelope className="text-white text-lg" />
                      </div>
                      <div>
                        <p className="text-[#310e10] font-plus font-medium">Email</p>
                        <p className="text-[#6f4d38] font-plus">beyondblueprintdesign@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-amber-500 rounded-full flex items-center justify-center">
                        <FaPhone className="text-white text-lg" />
                      </div>
                      <div>
                        <p className="text-[#310e10] font-plus font-medium">Phone</p>
                        <p className="text-[#6f4d38] font-plus">+91 96484 77743</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-amber-500 rounded-full flex items-center justify-center">
                        <FaMapMarkerAlt className="text-white text-lg" />
                      </div>
                      <div>
                        <p className="text-[#310e10] font-plus font-medium">Location</p>
                        <p className="text-[#6f4d38] font-plus">Lucknow, Uttar Pradesh, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-rose-200/30">
                  <h3 className="text-2xl font-libre font-bold text-[#310e10] mb-6">
                    Follow Our Work
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://www.instagram.com/beyond.blueprint/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <FaInstagram className="text-xl" />
                      <span className="font-plus font-medium">Instagram</span>
                    </a>
                    
                    <a
                      href="https://www.linkedin.com/in/amannjalan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <FaLinkedinIn className="text-xl" />
                      <span className="font-plus font-medium">LinkedIn</span>
                    </a>
                    
                    <a
                      href="https://pin.it/1UhTHdhoD"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <FaPinterest className="text-xl" />
                      <span className="font-plus font-medium">Pinterest</span>
                    </a>
                    
                    <a
                      href="https://www.behance.net/amanjalan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <FaBehance className="text-xl" />
                      <span className="font-plus font-medium">Behance</span>
                    </a>
                  </div>

                  <div className="mt-6">
                    <a
                      href="https://wa.me/+919648477743"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full"
                    >
                      <FaWhatsapp className="text-xl" />
                      <span className="font-plus font-medium">Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
