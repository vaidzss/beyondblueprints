import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import React from "react";

interface Service {
  name: string;
  imageUrl: string;
  desc: string;
}

const services: Service[] = [
  {
    name: "Interior Design",
    imageUrl: "/interior.jpg",
    desc: "Interior design is the art and science of enhancing the interior of a space to make it more functional, aesthetically pleasing, and reflective of the client's personality or brand. It involves space planning, color selection, furniture placement, lighting design, and material selection. Designers balance creativity with practicality to create comfortable and efficient environments. The goal is to transform ordinary spaces into inspiring and harmonious living or working areas.",
  },
  {
    name: "Architecture Design",
    imageUrl: "/architecture.jpg",
    desc: "Architectural design is the process of planning and creating buildings and structures that are both functional and visually appealing. It involves conceptualizing spaces, considering structural integrity, sustainability, and the needs of the users. Architects focus on the form, layout, and aesthetics while ensuring safety and efficiency. The goal is to design environments that enhance the way people live, work, and interact.",
  },
  {
    name: "Decor Lighting",
    imageUrl: "/decor.jpg",
    desc: "Decor lighting focuses on enhancing the ambiance and aesthetic appeal of a space through the strategic use of light fixtures. It combines functionality with style, using elements like chandeliers, wall sconces, pendant lights, and lamps to highlight key areas and create mood. This type of lighting complements the overall design theme and adds warmth and character to interiors. The goal is to create visually engaging and inviting spaces through light.",
  },
];


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


const textChildVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};


const slideFrom = (direction: "left" | "right"): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
});
;

const Services: React.FC = () => {
  return (
    <div
      className="mt-10 bg-[#fdf4e1] h-full overflow-x-hidden pb-20 smooth-scroll"
     
    >
      <motion.div
       initial="hidden"
      whileInView="visible"
      exit={"exit"}
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariant}
      >
      <div className="w-full  text-center p-10 md:p-20">
        <h2 className="text-[#310e10] font-libre font-bold text-5xl">
          Services
        </h2>
      </div>

      <div className="flex flex-col gap-20">
        {services.map((service, i) => {
          const isEven = i % 2 === 0;
          const textDirection: "left" | "right" = isEven ? "left" : "right";
          const imageDirection: "left" | "right" = isEven ? "right" : "left";

          return (
            <div
              key={service.name}
              className={`flex flex-col my-2 md:my-16 md:flex-row items-center  justify-around px-6 md:px-20 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
            
              <motion.div
              exit={"exit"}
                className="md:w-1/2 space-y-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={slideFrom(textDirection)}
              >
                <motion.h2
                exit={"exit"}
                  variants={textChildVariant}
                  className="text-[#6f4d38] font-playfair font-bold text-2xl"
                >
                  {i + 1}. {service.name}
                </motion.h2>
                <motion.p
                exit={"exit"}
                  variants={textChildVariant}
                  className="text-[#ffffff] font-poppins bg-[#310e10] p-5 md:p-6 md:w-[90%] md:text-sm text-xs"
                >
                  &ldquo;{service.desc}&rdquo;
                </motion.p>
              </motion.div>


              <motion.div
                className=" flex justify-center md:mt-0 mt-10"
                initial="hidden"
                whileInView="visible"
                exit={"exit"}
                viewport={{ once: false, amount: 0.3 }}
                variants={slideFrom(imageDirection)}
              >
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-[90%] md:w-[35vw] lg:w-[25vw] object-cover shadow-lg backdrop-blur-xl"
                />
              </motion.div>
            
            </div>
          );
        })}
      </div>
      </motion.div>
    </div>
  );
};

export default Services;
