import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function TimelineSection() {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-item").forEach((item: any) => {
      const line = item.querySelector(".timeline-line");
      const content = item.querySelector(".content");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate line grow and content
      tl.to(line, {
        height: "100%",
        duration: 0.8,
        ease: "power3.out",
      }).to(
        content,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );
    });
  }, []);

  return (
    <div className="timeline bg-[#310e10] py-20 px-5">
      <h2 className="text-white text-5xl md:text-7xl text-center font-poppins font-extrabold mb-16">
        Why Choose Us?
      </h2>

      <div className="max-w-4xl mx-auto">
        {["Concept", "Design", "Development", "Launch"].map((stage, index) => (
          <div key={index} className="timeline-item flex gap-6 relative mb-20">
            {/* Left Line & Dot */}
            <div className="line-container relative w-1">
              <div className="timeline-line bg-[#6f4d38] absolute left-0 top-0 w-1 h-0 origin-top" />
              <div className="dot w-4 h-4 bg-[#6f4d38] rounded-full absolute -left-1 top-0 z-10" />
            </div>

            {/* Right Content */}
            <div className="content opacity-0 translate-y-10">
              <h3 className="text-xl font-bold text-white">{stage}</h3>
              <p className="text-[#6f4d38] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimelineSection;
