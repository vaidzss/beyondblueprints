import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "../Home/Navbar";
import Projects from "./Projects";
import Footer from "../Footer/Footer";


gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(text2Ref.current, { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Text transitions
          gsap.to(text1Ref.current, {
            autoAlpha: 1 - progress,
            duration: 0.2,
          });
          gsap.to(text2Ref.current, {
            autoAlpha: progress,
            duration: 0.2,
          });
          
          // Parallax effects for floating elements
          gsap.to(".floating-element", {
            y: progress * -100,
            rotation: progress * 360,
            scale: 1 + progress * 0.2,
            duration: 0.1,
          });
          
          // Different parallax speeds for different elements
          gsap.to(".parallax-slow", {
            y: progress * -50,
            rotation: progress * 180,
            duration: 0.1,
          });
          
          gsap.to(".parallax-medium", {
            y: progress * -75,
            rotation: progress * 270,
            duration: 0.1,
          });
          
          gsap.to(".parallax-fast", {
            y: progress * -120,
            rotation: progress * 450,
            duration: 0.1,
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio">
      <Navbar />
      <div
        ref={containerRef}
        className="relative z-0 w-full bg-fixed h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-50 to-white bg-cover overflow-hidden flex items-center justify-center text-center"
      >
        {/* Floating Background Elements with Parallax */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating circles */}
          <div className="floating-element parallax-slow absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-rose-200/50 to-rose-300/40 shadow-lg"></div>
          <div className="floating-element parallax-medium absolute top-1/3 left-1/6 w-16 h-16 rounded-full bg-gradient-to-br from-red-200/60 to-red-300/50 shadow-md"></div>
          <div className="floating-element parallax-fast absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-rose-100/50 to-rose-200/40 shadow-lg"></div>
          
          {/* Floating squares */}
          <div className="floating-element parallax-slow absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-br from-red-300/60 to-red-400/50 transform rotate-45 shadow-md"></div>
          <div className="floating-element parallax-medium absolute top-2/3 right-1/3 w-6 h-6 bg-gradient-to-br from-rose-300/60 to-rose-400/50 transform rotate-45 shadow-sm"></div>
          <div className="floating-element parallax-fast absolute bottom-1/4 left-1/3 w-10 h-10 bg-gradient-to-br from-red-200/60 to-red-300/50 transform rotate-45 shadow-md"></div>
          
          {/* Floating dots */}
          <div className="floating-element parallax-medium absolute top-1/6 left-1/5 w-3 h-3 bg-gradient-to-br from-red-400/70 to-red-500/60 rounded-full shadow-sm"></div>
          <div className="floating-element parallax-slow absolute top-3/4 right-1/5 w-2 h-2 bg-gradient-to-br from-rose-400/70 to-rose-500/60 rounded-full shadow-sm"></div>
          <div className="floating-element parallax-fast absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-gradient-to-br from-red-300/70 to-red-400/60 rounded-full shadow-sm"></div>
          
          {/* Floating lines */}
          <div className="floating-element parallax-medium absolute top-1/4 left-1/6 w-20 h-1 bg-gradient-to-r from-transparent via-red-400/50 to-transparent transform rotate-45 shadow-sm"></div>
          <div className="floating-element parallax-slow absolute bottom-1/4 right-1/6 w-16 h-1 bg-gradient-to-r from-transparent via-rose-400/50 to-transparent transform -rotate-45 shadow-sm"></div>
          
          {/* Floating triangles */}
          <div className="floating-element parallax-fast absolute top-1/2 right-1/6 w-0 h-0 border-l-[8px] border-l-transparent border-b-[12px] border-b-red-400/60 border-r-[8px] border-r-transparent shadow-sm"></div>
          <div className="floating-element parallax-medium absolute bottom-1/3 right-1/5 w-0 h-0 border-l-[6px] border-l-transparent border-b-[10px] border-b-rose-400/60 border-r-[6px] border-r-transparent shadow-sm"></div>
          
          {/* Additional parallax elements for more depth */}
          <div className="floating-element parallax-slow absolute top-1/5 left-1/3 w-12 h-12 rounded-full bg-gradient-to-br from-red-200/50 to-red-300/40 shadow-md"></div>
          <div className="floating-element parallax-fast absolute bottom-1/5 right-1/3 w-8 h-8 bg-gradient-to-br from-rose-300/60 to-rose-400/50 transform rotate-45 shadow-md"></div>
          <div className="floating-element parallax-medium absolute top-1/2 right-1/4 w-4 h-4 bg-gradient-to-br from-red-400/70 to-red-500/60 rounded-full shadow-sm"></div>
          
          {/* More theme-consistent elements */}
          <div className="floating-element parallax-fast absolute top-1/4 left-1/2 w-6 h-6 bg-gradient-to-br from-rose-200/60 to-rose-300/50 rounded-full shadow-sm"></div>
          <div className="floating-element parallax-slow absolute bottom-1/6 left-1/6 w-10 h-10 bg-gradient-to-br from-red-300/60 to-red-400/50 transform rotate-45 shadow-md"></div>
          <div className="floating-element parallax-medium absolute top-1/6 right-1/2 w-5 h-5 bg-gradient-to-br from-rose-400/70 to-rose-500/60 rounded-full shadow-sm"></div>
        </div>

        {/* Images */}
        <img
          src="/port2.png"
          alt="Top Left"
          className="absolute top-0 rounded-md left-0 w-1/3 max-w-[300px] md:-translate-x-10 md:-translate-y-20 shadow-lg z-10"
        />
        <img
          src="/port1.png"
          alt="Bottom Right"
          className="absolute rounded-md bottom-0 right-0 w-1/3 max-w-[300px] md:translate-x-20 md:translate-y-20 -translate-y-0 shadow-lg z-10"
        />
 
 
        {/* Text Overlay */}
        <div className="w-full h-full text-[#310e10] relative z-20">
          <h1
            ref={text1Ref}
            className="md:text-3xl font-libre italic absolute inset-0 flex justify-center items-center"
          >
            &ldquo;Design that speaks, spaces that feel.&rdquo;
          </h1>
          <h1
            ref={text2Ref}
            className="md:text-3xl italic font-libre absolute inset-0 flex justify-center items-center"
          >
            &ldquo;Where form meets function, beautifully.&rdquo;
          </h1>
        </div>
      </div>

      <Projects />
      <Footer />
    </section>
  );
};

export default Portfolio;
