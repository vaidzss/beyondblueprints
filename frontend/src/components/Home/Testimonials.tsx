import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import {motion, type Variants } from "framer-motion";

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
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="min-h-[90vh] bg-[#310e10] flex items-center justify-center px-4 py-10">
      <div className="text-center max-w-2xl w-full">
        <motion.h2
          className="text-3xl md:text-5xl text-white font-libre mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Testimonials.
        </motion.h2>

        {reviews.length === 0 ? (
          <p className="text-white text-lg">No testimonials yet.</p>
        ) : (
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="text-white px-6"
                variants={fadeInVariants}
                initial="initial"
                animate="animate"
              >
                <p className="text-xl italic mb-4">
                  “{review.comment || "No review text provided."}”
                </p>
                <p className="font-bold text-lg">– {review.customerName}</p>
                <div className="text-yellow-400 mt-1 text-xl">
                  {"⭐".repeat(review.rating)}
                </div>
              </motion.div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default Testimonials;
