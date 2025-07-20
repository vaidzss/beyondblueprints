import { useState, useRef, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

const After = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    const handleGlobalTouchEnd = () => {
      setIsDragging(false);
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('touchend', handleGlobalTouchEnd);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, []);

  const sectionVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariant}
      className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 relative overflow-hidden py-12 md:py-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 md:w-40 md:h-40 bg-gradient-to-br from-rose-200/20 to-rose-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 md:w-32 md:h-32 bg-gradient-to-br from-amber-200/30 to-orange-300/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-60 md:h-60 bg-gradient-to-br from-rose-100/15 to-pink-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-[#310e10] font-libre font-bold mb-4 md:mb-6">
            Before & After
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-500 mx-auto mb-4 md:mb-8"></div>
          <p className="text-[#6f4d38] font-plus text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            See the incredible transformations we've achieved. Drag the slider to explore the before and after of our projects.
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden mx-2 md:mx-0">
            {/* Image Container */}
            <div
              ref={containerRef}
              className="relative aspect-[4/3] md:aspect-[16/10] cursor-col-resize select-none"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Before Image (Full) */}
              <img
                src="/hero1.png"
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* After Image (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="/hero2.png"
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                {/* Handle Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-xl border-2 md:border-4 border-rose-400 flex items-center justify-center">
                  <div className="w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-rose-400 to-amber-500 rounded-full"></div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-3 md:top-6 left-3 md:left-6 bg-black/60 backdrop-blur-sm text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium">
                Before
              </div>
              <div className="absolute top-3 md:top-6 right-3 md:right-6 bg-black/60 backdrop-blur-sm text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium">
                After
              </div>

              {/* Instructions */}
              <div className="absolute bottom-3 md:bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-[#310e10] px-3 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium shadow-lg max-w-[90%] text-center">
                ← Drag to reveal transformation →
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-rose-200/50">
              <h3 className="text-[#310e10] font-libre font-semibold text-lg md:text-xl mb-3 md:mb-4">
                Before
              </h3>
              <p className="text-[#6f4d38] font-plus leading-relaxed text-sm md:text-base">
                The original space showing the initial condition and layout before our design intervention.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-rose-200/50">
              <h3 className="text-[#310e10] font-libre font-semibold text-lg md:text-xl mb-3 md:mb-4">
                After
              </h3>
              <p className="text-[#6f4d38] font-plus leading-relaxed text-sm md:text-base">
                The transformed space showcasing our design expertise and attention to detail.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 md:mt-12 text-center">
            <div className="bg-gradient-to-r from-rose-100 to-amber-100 rounded-xl md:rounded-2xl p-6 md:p-8 border border-rose-200/50">
              <h3 className="text-[#310e10] font-libre font-semibold text-lg md:text-xl mb-3">
                Ready for Your Transformation?
              </h3>
              <p className="text-[#6f4d38] font-plus mb-4 md:mb-6 text-sm md:text-base">
                Let us transform your space with the same attention to detail and creativity
              </p>
              <button 
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-r from-[#310e10] to-rose-800 text-white px-6 md:px-8 py-3 rounded-full font-plus font-medium hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default After;
