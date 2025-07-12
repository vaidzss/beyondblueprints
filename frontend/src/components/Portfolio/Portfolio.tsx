import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "../Home/Navbar";
import Projects from "./Projects";
import Footer from "../Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
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
          gsap.to(text1Ref.current, {
            autoAlpha: 1 - progress,
            duration: 0.2,
          });
          gsap.to(text2Ref.current, {
            autoAlpha: progress,
            duration: 0.2,
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  return (
    <section id="portfolio">
      <Navbar />
      <div
        ref={containerRef}
        className="relative z-0 w-full bg-fixed h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-50 to-white bg-cover overflow-hidden flex items-center justify-center text-center"
      >
        {/* Images */}
        <img
          src="/port2.png"
          alt="Top Left"
          className="absolute top-0 rounded-md left-0 w-1/3 max-w-[300px] md:-translate-x-10 md:-translate-y-20 shadow-lg"
        />
        <img
          src="/port1.png"
          alt="Bottom Right"
          className="absolute rounded-md bottom-0 right-0 w-1/3 max-w-[300px] md:translate-x-20 md:translate-y-20 -translate-y-0 shadow-lg"
        />

        {/* Text Overlay */}
        <div className="w-full h-full text-[#310e10]">
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
