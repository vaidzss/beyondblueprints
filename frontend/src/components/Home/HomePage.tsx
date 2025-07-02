import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import Services from "./Services";

import { useRef } from "react";
import {  MdArrowForwardIos } from "react-icons/md";
import HorizontalCarousel from "./Carousel";
import Footer from "../Footer/Footer";


gsap.registerPlugin(ScrollTrigger, SplitText);
function HomePage() {

  const headingRef = useRef<HTMLHeadingElement>(null);


  useGSAP(() => {
  if (!headingRef.current) return;

  // Wait for fonts to fully load
  document.fonts.ready.then(() => {
    const split = new SplitText(headingRef.current, { type: "chars" });

    gsap.set(split.chars, { opacity: 0, x: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none restart reverse",
        onLeaveBack: () => {
          gsap.set(split.chars, { opacity: 0, x: 1});
        },
      },
    });

    tl.to(split.chars, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power1.inOut",
      stagger: 0.05,
    });

    // Cleanup
    return () => {
      split.revert();
    };
  });
  gsap.fromTo(
    ".btn",
    {
      opacity: 0,
      y: 0,
    },
    {
      opacity: 1,
      y: 50,
      duration: 0.65,
      delay: 1,
      ease: "power4.out",
      
      scrollTrigger: {
        trigger: ".btn",
        start: "top 90%",
        toggleActions: "play none restart reverse",
        onLeaveBack: () => {
          gsap.set(".btn", { opacity: 0, y: 50 });
        },
      },
    }
  )
}, []);


  return (
    <section id="home">
      <Navbar />
     <div className="bg-[url('/hero.png')] bg-cover bg-center opacity-85 h-[100vh] w-full">
        <div ref={headingRef}  className=" items-center gap-3 md:flex text-center justify-center md:pt-64 pt-40 z-10">
            <h1
             
             className="text-[#ffffff] drop-shadow-xl lg:px-8 py-2 rounded-md font-libre text-4xl lg:text-7xl">
              BEYOND<br/> </h1>
              <span ref={headingRef} className="text-[#250404]  font-libre text-4xl lg:text-7xl"> BLUEPRINT</span>
            
        </div>
        <div className="btn hover:bg-[#fbf2e1] h-10 bg-cover justify-self-center rounded-full bg-cyan-950 hover:shadow-2xl transition-transform ease-in-out duration-750">
        <button className=" hover:text-black md:text-base font-plus text-sm text-center p-2 flex text-white ">
          Know More <MdArrowForwardIos className="text-lg my-1" />
        </button>
        </div>
     </div>

      <Services />
      <HorizontalCarousel/>
      <Footer/>
    </section>
  );
}

export default HomePage;
