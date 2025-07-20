import { MdSupervisedUserCircle } from "react-icons/md"
import Navbar from "../Home/Navbar"
import { motion, type Variants } from "framer-motion"
import Footer from "../Footer/Footer";

const cardStagger = {
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  const sectionVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="about" className="relative overflow-x-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-rose-200/30 to-rose-300/20 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-amber-200/40 to-orange-300/30 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-rose-100/20 to-pink-200/10 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>
      <Navbar/>
      {/* Hero / Vision Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        exit={"exit"}
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariant}
        className="min-h-[60vh] flex flex-col md:flex-row items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-50 to-white px-4 md:px-12 pt-24 md:pt-32 pb-12 gap-10"
      >
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-100 via-amber-100 to-white blur-2xl animate-pulse-slow scale-110"></div>
            <div className="relative bg-white rounded-full w-40 h-40 md:w-64 md:h-64 shadow-xl flex items-center justify-center">
              <MdSupervisedUserCircle className="text-rose-400 w-28 h-28 md:w-52 md:h-52" />
            </div>
          </div>
          <h4 className="text-[#81181d] italic text-center font-libre text-2xl md:text-3xl mb-2">
            Visionary Statement
          </h4>
          <p className="text-[#310e10] text-center font-libre text-base md:text-lg max-w-lg">
            To be a trusted name in interior design, known for transforming spaces with timeless elegance, functional creativity, and client-centric solutions — elevating everyday environments into inspiring experiences, one design at a time.
          </p>
          <p className="italic font-extralight font-sans mt-2 text-right w-full md:w-auto">
            - Mr. Aman Jalan, Founder
          </p>
        </div>
      </motion.div>
      {/* Brand Story Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariant}
        className="mt-0 md:mt-12"
      >
        <div className="relative lg:h-auto md:h-auto min-h-screen bg-[#310e10] overflow-hidden py-12 flex flex-col justify-center">
          {/* Mobile Background Image */}
          <div className="absolute inset-0 block lg:hidden">
            <img
              src="/about.png"
              alt="about"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#310e10] opacity-80"></div>
          </div>

          <div className="relative lg:flex block min-h-screen">
            {/* Left Image on Medium and Large Screens */}
            <div className="hidden lg:block lg:w-1/2 min-h-screen">
              <img
                src="/about.png"
                alt="about"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content Section */}
            <div className="lg:w-1/2 w-full flex items-center justify-center text-white px-6 md:px-8 lg:px-12 z-10">
              <div className="max-w-2xl">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-libre font-semibold mb-4">Our Brand Story</h2>
                  <div className="w-16 h-0.5 bg-rose-300 mx-auto mb-6"></div>
                </div>
                <motion.div
                  className="space-y-6 text-left"
                  variants={cardStagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20" variants={cardVariant}>
                    <h3 className="text-xl font-libre font-semibold mb-3 text-rose-200">Our Mission</h3>
                    <p className="text-sm md:text-base leading-relaxed text-gray-100 font-plus">
                      At Beyond Blueprint Interior Design, we believe that every space has a story — a narrative that deserves to be thoughtfully told through design. Founded with a passion for creativity and a deep understanding of form, function, and feeling, our journey began with a simple mission: to turn everyday spaces into meaningful experiences.
                    </p>
                  </motion.div>
                  <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20" variants={cardVariant}>
                    <h3 className="text-xl font-libre font-semibold mb-3 text-rose-200">Our Approach</h3>
                    <p className="text-sm md:text-base leading-relaxed text-gray-100 font-plus">
                      Rooted in Lucknow and inspired by global design sensibilities, we bring a refined aesthetic and practical expertise to every project — whether it's a warm and welcoming home, a dynamic office, or a vibrant commercial space. With a deep commitment to craftsmanship, attention to detail, and client collaboration, we go beyond trends and blueprints to design interiors that reflect the unique identities of the people who use them.
                    </p>
                  </motion.div>
                  <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20" variants={cardVariant}>
                    <h3 className="text-xl font-libre font-semibold mb-3 text-rose-200">Our Promise</h3>
                    <p className="text-sm md:text-base leading-relaxed text-gray-100 font-plus">
                      Our firm thrives on turning challenges into design opportunities — blending tradition with innovation, comfort with elegance, and imagination with execution. We don't just design spaces; we design stories that last.
                    </p>
                  </motion.div>
                </motion.div>
                <div className="text-center mt-8">
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                    <div className="w-2 h-2 bg-rose-300 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-100">Crafting Spaces, Creating Stories</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Meet the Founder Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        className="py-16 bg-gradient-to-br from-rose-50 via-white to-amber-50"
      >
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6 md:px-0">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl border-4 border-rose-200 bg-white flex items-center justify-center">
              {/* Placeholder founder image */}
              <img src="/logo.jpg" alt="Founder" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-libre font-semibold text-[#310e10] mb-2">Meet the Founder</h3>
            <p className="text-[#6f4d38] font-plus text-base md:text-lg mb-2">
              <span className="font-bold text-[#81181d]">Mr. Aman Jalan</span> is the creative force and visionary behind Beyond Blueprint. With a passion for design, a keen eye for detail, and a commitment to client satisfaction, he leads the team in transforming spaces into works of art.
            </p>
            <p className="text-[#6f4d38] font-plus text-sm md:text-base italic">
              "Design is not just about aesthetics; it's about creating experiences that inspire and endure."
            </p>
          </div>
        </div>
      </motion.div>
      <Footer/>
    </section>
  )
}

export default About
