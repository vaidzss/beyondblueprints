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
    desc: "From custom furniture placement to curated color palettes, our interior design transforms empty rooms into soulful, lived-in spaces.",
  },
  {
    name: "Architecture Design",
    imageUrl: "/architecture.jpg",
    desc: "Our architectural designs harmonize space, light, and material to create structures that are both sustainable and striking.",
  },
  {
    name: "Decor Lighting",
    imageUrl: "/decor.jpg",
    desc: "From statement chandeliers to warm ambient glows, our decor lighting designs are curated to enhance every space’s personality.",
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


const textParentVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
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
    <motion.div
      className="mt-10 h-full overflow-x-hidden mb-20 smooth-scroll"
      initial="hidden"
      whileInView="visible"
      exit={"exit"}
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariant}
    >
      <div className="w-full text-center p-10 md:p-20">
        <h2 className="text-[#310e10] font-poppins font-bold text-4xl md:text-5xl lg:text-7xl">
          What we do?
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
              className={`flex flex-col md:flex-row items-center justify-between px-6 md:px-20 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
            
              <motion.div
              exit={"exit"}
                className="md:w-1/2 space-y-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={slideFrom(textDirection)}
              >
                <motion.h2
                exit={"exit"}
                  variants={textChildVariant}
                  className="text-[#6f4d38] font-playfair font-bold text-3xl md:text-4xl lg:text-5xl"
                >
                  {i + 1}. {service.name}
                </motion.h2>
                <motion.p
                exit={"exit"}
                  variants={textChildVariant}
                  className="text-[#310e10] font-poppins text-base leading-relaxed"
                >
                  {service.desc}
                </motion.p>
              </motion.div>

            
              <motion.div
                className="md:w-1/2 flex justify-center mt-10 md:mt-0"
                initial="hidden"
                whileInView="visible"
                exit={"exit"}
                viewport={{ once: false, amount: 0.3 }}
                variants={slideFrom(imageDirection)}
              >
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-[80%] md:w-[35vw] rounded-lg object-cover shadow-lg"
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Services;
