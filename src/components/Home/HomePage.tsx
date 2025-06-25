import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import Services from "./Services";

import { useRef } from "react";
import {  MdArrowForwardIos } from "react-icons/md";
import HorizontalCarousel from "./Carousel";


gsap.registerPlugin(ScrollTrigger, SplitText);
function HomePage() {

  const headingRef = useRef<HTMLHeadingElement>(null);


  useGSAP(() => {
  if (!headingRef.current) return;

  // Wait for fonts to fully load
  document.fonts.ready.then(() => {
    const split = new SplitText(headingRef.current, { type: "chars" });

    gsap.set(split.chars, { opacity: 0, y: 50 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none restart reverse",
        onLeaveBack: () => {
          gsap.set(split.chars, { opacity: 0, y: 50 });
        },
      },
    });

    tl.to(split.chars, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power4.out",
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
     <div className="bg-[url('/hero.jpg')] bg-cover bg-center h-[100vh] opacity-85">
        <div className=" items-center flex justify-center lg:py-44 py-40 z-10 ">
            <h1
             ref={headingRef} 
             className="h-1 text-[#211107] font-poppins font-extrabold text-6xl md:text-7xl lg:text-9xl">
              BEYOND<br/> 
              <span className="text-[#310e10] font-poppins font-extrabold text-6xl md:text-7xl lg:text-9xl"> BLUEPRINT</span>
            </h1>
        </div>
        <div className="btn hover:bg-[#fbf2e1] mx-28 h-10 lg:mt-28 mt:20 bg-cover justify-self-center rounded-full bg-red-950 hover:shadow-2xl transition-transform ease-in-out duration-750">
        <button className=" hover:text-black font-plus font-bold text-center p-2 flex text-white ">
          Know More <MdArrowForwardIos className="text-lg my-1" />
        </button>
        </div>
     </div>

      <Services />
      <HorizontalCarousel/>
    </section>
  );
}

export default HomePage;
