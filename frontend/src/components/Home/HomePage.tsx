import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import Services from "./Services";

import { useRef } from "react";
import Footer from "../Footer/Footer";
import HeroSlideshow from "./HeroSlideShow";
import Carousel from "./Carousel";
import Testimonials from "./Testimonials";
import After from "./After";


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
    <section id="home" className="overflow-hidden">
      <Navbar />
      <HeroSlideshow/>
      <Carousel/>
      <Services />
      
      <Testimonials/>
      <After/>
      <Footer/>
    </section>
  );
}

export default HomePage;
