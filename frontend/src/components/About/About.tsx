import { MdSupervisedUserCircle } from "react-icons/md"
import Navbar from "../Home/Navbar"
import { motion, type Variants } from "framer-motion"


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
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariant}
      className="h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100 to-white inline-block md:flex justify-around">
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
        <div className="h-screen">

        </div>
      </motion.div>
    </section>
  )
}

export default About
