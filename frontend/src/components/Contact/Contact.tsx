import Navbar from "../Home/Navbar";
import Footer from "../Footer/Footer";
import { motion, type Variants } from "framer-motion";

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
      <motion.div className="img bg-[url('/hero5.png')] bg-cover bg-center h-full">
        <div className="pt-32 text-center">
          <h2 className="text-2xl text-[#310e10] font-libre">
            Shape your dream space.
          </h2>
        </div>
        <div className="flex justify-center items-center mt-5 pb-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariant}
            className="lg:w-1/3 md:w-2/3 w-5/6 h-full bg-[#482426] m-5 shadow-lg"
          >
            <div className="p-10 text-white z-50 font-plus">
              <h2 className="text-xl font-libre">Let's Connect.</h2>

              <form
                action="https://formspree.io/f/mrbkvdrp"
                method="POST"
                className="space-y-4"
              >
                {/* ✅ Redirect to Thank You page */}
                <input type="hidden" name="_redirect" value="http://localhost:5173/thankyou" />


                <div>
                  <label className="block text-sm font-medium text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-1 block w-full h-10 bg-[#210a0b] text-white sm:text-sm px-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 block w-full h-10 bg-[#210a0b] text-white sm:text-sm px-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full bg-[#210a0b] text-white sm:text-sm px-2 py-1"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full bg-[#210a0b] py-2 px-4 hover:bg-[#fbf4e1] hover:text-black transition-all duration-500"
                >
                  Submit
                </button>
              </form>

              <div className="text-center">
                <h4 className="text-base font-libre mb-3 pt-8">
                  Also Connect Through:
                </h4>
                <div className="flex justify-center gap-4 text-xl">
                  <a
                    href="https://www.instagram.com/beyond.blueprint/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/amannjalan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://pin.it/1UhTHdhoD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-400"
                  >
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a
                    href="https://www.behance.net/amanjalan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-400"
                  >
                    <i className="fab fa-behance"></i>
                  </a>
                  <a
                    href="https://wa.me/+919648477743"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </section>
  );
}

export default Contact;
