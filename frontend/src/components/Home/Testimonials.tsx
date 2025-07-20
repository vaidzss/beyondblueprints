import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { motion, type Variants } from "framer-motion";
import { MdStarRate } from "react-icons/md";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface Review {
  customerName: string;
  comment: string;
  rating: number;
}

const fadeInVariants: Variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/reviews");
        setReviews(res.data);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    };
    fetchReviews();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    customPaging: (i: number) => (
      <div className="w-3 h-3 bg-rose-300/50 rounded-full hover:bg-rose-400 transition-colors duration-300"></div>
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-rose-200/20 to-rose-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-300/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-rose-100/15 to-pink-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl text-[#310e10] font-libre font-bold mb-6">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-500 mx-auto mb-8"></div>
            <p className="text-[#6f4d38] font-plus text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Discover why clients choose us to transform their spaces into beautiful, functional environments
            </p>
          </motion.div>

          {reviews.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-rose-200/50"
            >
              <p className="text-[#6f4d38] text-lg font-plus">No testimonials yet.</p>
            </motion.div>
          ) : (
            <div className="relative">
              <Slider {...settings}>
                {reviews.map((review, index) => (
                  <motion.div
                    key={index}
                    className="px-4"
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-200/30 relative">
                      {/* Quote icons */}
                      <FaQuoteLeft className="absolute top-6 left-6 text-rose-200 text-2xl" />
                      <FaQuoteRight className="absolute bottom-6 right-6 text-rose-200 text-2xl" />
                      
                      {/* Rating stars */}
                      <div className="flex justify-center mb-6">
                        <div className="flex space-x-1">
                          {Array.from({ length: review.rating }, (_, i) => (
                            <MdStarRate key={i} className="text-amber-400 text-2xl" />
                          ))}
                        </div>
                      </div>

                      {/* Review text */}
                      <p className="text-[#310e10] text-lg md:text-xl italic mb-8 leading-relaxed font-plus">
                        "{review.comment || "No review text provided."}"
                      </p>

                      {/* Customer name */}
                      <div className="text-center">
                        <p className="font-libre font-semibold text-[#310e10] text-lg">
                          – {review.customerName}
                        </p>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-rose-400 to-amber-500 mx-auto mt-3"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Slider>
            </div>
          )}

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-rose-100 to-amber-100 rounded-2xl p-8 border border-rose-200/50">
              <h3 className="text-[#310e10] font-libre font-semibold text-xl mb-3">
                Ready to Experience the Difference?
              </h3>
              <p className="text-[#6f4d38] font-plus">
                Join our satisfied clients and let us transform your space into something extraordinary
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
