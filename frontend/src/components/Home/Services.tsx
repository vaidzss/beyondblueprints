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
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const textChildVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideFrom = (direction: "left" | "right"): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -120 : 120,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
});

const Services: React.FC = () => {
  return (
    <div
      className="mt-10 bg-gradient-to-br from-rose-50 via-[#fdf4e1] to-amber-50 h-full overflow-x-hidden pb-20 smooth-scroll relative"
    >
      {/* Background Texture Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-rose-200/30 to-rose-300/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-200/40 to-orange-300/30 rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-rose-100/50 to-pink-200/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-amber-100/60 to-yellow-200/40 rounded-full blur-lg"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #310e10 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariant}
      >
        <div className="w-full text-center p-10 md:p-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#310e10] font-libre font-bold text-5xl md:text-6xl mb-6">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-500 mx-auto mb-8"></div>
            <p className="text-[#6f4d38] font-plus text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive design solutions that transform your vision into reality, 
              creating spaces that inspire and endure.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-16 md:gap-24 relative z-10">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            const textDirection: "left" | "right" = isEven ? "left" : "right";
            const imageDirection: "left" | "right" = isEven ? "right" : "left";

            return (
              <div
                key={service.name}
                className={`flex flex-col my-4 md:my-20 md:flex-row items-center justify-around px-6 md:px-20 ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <motion.div
                  className="md:w-1/2 space-y-6 relative z-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={slideFrom(textDirection)}
                  transition={{ delay: 0.3 + i * 0.3 }}
                >
                  <div className="relative">
                    <motion.div
                      variants={textChildVariant}
                      className="inline-flex items-center space-x-3 mb-4"
                      transition={{ delay: 0.5 + i * 0.3 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {i + 1}
                      </div>
                      <h2 className="text-[#310e10] font-libre font-bold text-3xl md:text-4xl">
                        {service.name}
                      </h2>
                    </motion.div>
                  </div>
                  <motion.div
                    variants={textChildVariant}
                    className="relative group"
                    transition={{ delay: 0.7 + i * 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-amber-50 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm border border-rose-200/50 rounded-2xl p-6 md:p-8 shadow-xl">
                      <p className="text-[#6f4d38] font-plus text-sm md:text-base leading-relaxed">
                        &ldquo;{service.desc}&rdquo;
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="flex justify-center md:mt-0 mt-8 relative z-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={slideFrom(imageDirection)}
                  transition={{ delay: 0.3 + i * 0.3 }}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-amber-500/20 rounded-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="relative w-[90%] md:w-[35vw] lg:w-[28vw] object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
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
