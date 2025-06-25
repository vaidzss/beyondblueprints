import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HorizontalCarousel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemCount = 4; // Set manually or dynamically if needed

  const points = [
    {title:"Personalized Design Solutions",desc:"From custom furniture placement to curated color palettes, our interior design transforms empty rooms into soulful, lived-in spaces.",img:"/pt1.png" },
    {title:"Seamless Architecture & Interiors",desc:"Our architectural designs harmonize space, light, and material to create structures that are both sustainable and striking.",img:"/pt2.png" },
    {title:"Detail-Driven Execution",desc:"From materials to lighting, we obsess over the small things that make a big impact,ensuring every element has purpose and polish.",img:"/pt3.png" },
    {title:"Transparent, Collaborative Process",desc:"We keep you involved every step of the way, combining your vision with our creativity to deliver results you truly love.",img:"/pt4.png" },
  ]

useLayoutEffect(() => {
  const section = sectionRef.current;
  const container = containerRef.current;

  if (!section || !container) return;

  container.style.width = `${itemCount * 100}vw`;
  const totalScroll = container.scrollWidth - window.innerWidth;

  const ctx = gsap.context(() => {
    const horizontalTween = gsap.to(container, {
      x: -totalScroll,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${totalScroll}`,
      pin: true,
      scrub: 1,
      snap: 1 / (itemCount - 1),
      animation: horizontalTween, // ✅ Correct way to associate
    });
  }, section);

  return () => ctx.revert();
}, []);


useGSAP(() => {
  const items = gsap.utils.toArray(".carousel-item") as HTMLElement[];

  items.forEach((item) => {
    gsap.fromTo(
      item,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          containerAnimation: ScrollTrigger.getAll().find(t => t.animation)?.animation, // ✅ use actual tween
          start: "left center",
          end: "right center",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
});



  return (
    <section
      ref={sectionRef}
      className="relative  h-screen overflow-hidden"
    >
       <div
    ref={containerRef}
    className="flex h-full"
      >
        {points.map((point,i) => (
          <div
            key={i}
            className="carousel-item md:w-screen w-full h-full bg-[#310e10] text-white"
          >
            
            <h2 className="p-10 text-5xl md:text-7xl font-poppins font-extrabold text-center text-[#daa356]">
              Why Choose Us?
            </h2>

            <h4 className="text-2xl font-plus font-bold text-center py-4">
            {i+1}.{point.title}
            </h4>
            <div className="justify-items-center items-center">
              <img src={point.img} className="rounded-md size-72"/>
            </div>
            <div className="mt-5 px-4 lg:size-96 lg:justify-self-center">
            <p className="font-poppins text-md text-center text-[#fbf2e1]">
              {point.desc}
            </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalCarousel;
