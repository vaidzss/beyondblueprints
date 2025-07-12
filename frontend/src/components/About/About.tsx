import { MdSupervisedUserCircle } from "react-icons/md"
import Navbar from "../Home/Navbar"
import { motion, type Variants } from "framer-motion"
import Footer from "../Footer/Footer";


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
    <section id="about">
      <Navbar/>
      <motion.div 
      initial="hidden"
      whileInView="visible"
      exit={"exit"}
      viewport={{ once: false, amount: 0.2 ,}}
      variants={sectionVariant}
      
      className="h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-50 to-white inline-block md:flex justify-around">
        <div className="md:w-1/2 w-full flex items-center justify-center md:mt-0 mt-36">
        <div className="bg-white rounded-full size-44 md:size-72 shadow-lg">
            <MdSupervisedUserCircle className="rounded-full size-40 md:size-64 justify-self-center mt-3" />
        </div>
        </div>
        <div className="md:w-1/2 w-full content-center px-4 md:px-20">
            <h4 className="text-[#81181d] italic text-center font-libre text-2xl">
              Visionary Statement
            </h4>
            <br/>
            <p className="text-[#310e10] text-center font-libre text-sm md:text-base">
              To be a trusted name in interior design, known for transforming spaces with timeless elegance, functional creativity, and client-centric solutions — elevating everyday environments into inspiring experiences, one design at a time.
            </p>
            <p className="italic font-extralight font-sans mt-2 text-right">
                - Mr. Aman Jalan, Founder
            </p>
        </div>

      </motion.div>
      <motion.div
  initial="hidden"
  whileInView="visible"
  exit="exit"
  viewport={{ once: false, amount: 0.2 }}
  variants={sectionVariant}
  className="mt-12"
>
  <div className="relative lg:h-[73vh] md:h-[65vh] h-screen bg-[#310e10] overflow-hidden">
    {/* Mobile Background Image */}
    <div className="absolute inset-0 block lg:hidden">
      <img
        src="/about.png"
        alt="about"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#310e10] opacity-80"></div>
    </div>

    <div className="relative lg:flex block h-full">
      {/* Left Image on Medium and Large Screens */}
      <div className="hidden lg:block lg:w-1/2 h-full">
        <img
          src="/about.png"
          alt="about"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="lg:w-1/2 w-full flex items-center justify-center text-white px-4 md:px-6 lg:px-10 z-10">
        <div className="text-center">
          <h2 className="pt-8 pb-2 font-libre text-2xl">Brand Story</h2>
          <p className="text-sm text-yellow-50 font-plus py-6">
            At Beyond Blueprint Interior Design, we believe that every space has a story — a narrative that deserves to be thoughtfully told through design. Founded with a passion for creativity and a deep understanding of form, function, and feeling, our journey began with a simple mission: to turn everyday spaces into meaningful experiences.
            <br />
            Rooted in Lucknow and inspired by global design sensibilities, we bring a refined aesthetic and practical expertise to every project — whether it's a warm and welcoming home, a dynamic office, or a vibrant commercial space. With a deep commitment to craftsmanship, attention to detail, and client collaboration, we go beyond trends and blueprints to design interiors that reflect the unique identities of the people who use them.
            <br />
            Our firm thrives on turning challenges into design opportunities — blending tradition with innovation, comfort with elegance, and imagination with execution. We don’t just design spaces; we design stories that last.
          </p>
        </div>
      </div>
    </div>
  </div>
</motion.div>

        <Footer/>
    </section>

  )
}

export default About
