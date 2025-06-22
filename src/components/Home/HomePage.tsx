import heroImage from "/hero.jpg";
import Navbar from "./Navbar";
import Services from "./Services";

import TimelineSection from "./TimelineSection";

function HomePage() {
  return (
    <section id="home">
      <Navbar />
      <div className="bg-[#fbf2e1] h-screen mb-10">  
        <div className="flex p-10 gap-10 justify-between">
          <h2 className="text-[#310e10] font-poppins z-10 pt-10 font-extrabold text-4xl md:text-5xl lg:text-9xl">
              BEYOND<br/>
              <h2 className="text-[#6f4d38] border-l">IMAGINATIONS.</h2>


          </h2>
          {/* <img src={heroImage} alt="hero" className="w-1/2 -translate-x-80 translate-y-40 object-cover justify-right rounded-md"/>
         */}
        </div>
      </div>
      <Services/>
      <TimelineSection/>

    </section>
  );
}

export default HomePage;
