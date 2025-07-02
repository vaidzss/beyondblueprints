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
      className="relative overflow-hidden"
    >
       <div
    ref={containerRef}
    className="flex"
      >
        {points.map((point,i) => (
          <div
            key={i}
            className="carousel-item md:w-screen w-full h-screen bg-[#fff9ee] text-white"
          >
            
            <h2 className="p-10 text-5xl md:text-7xl font-libre font-extrabold text-center text-[#2f0303]">
              Why Choose Us?
            </h2>
            <div className="flex flex-col md:flex-row items-center py-10 justify-between gap-20 px-6 md:px-28">
              <div className="md:w-1/2">
            <h4 className="text-2xl font-playfair font-semibold mb-3 text-[#6f4d38]">
            {i+1}.{point.title}
            </h4>
                <p className="font-poppins md:text-base text-sm text-[#310e10]">
              {point.desc}
            </p>
            </div>
            <div className="md:w-1/2">
              <img src={point.img} className="rounded-md size-[80%] md:size-[25vw] justify-self-center"/>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalCarousel;
