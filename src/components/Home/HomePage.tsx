import heroImage from "/hero.jpg";
import Navbar from "./Navbar";

function HomePage() {
  return (
    <section id="home">
      <Navbar />
      <div className="w-full h-screen relative pt-5">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover lg:object-contain transition-all duration-500 opacity-[.85]"
        />
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-extrabold text-[#310e10] ">
          &ldquo;Beautiful. Balanced. Yours.&rdquo;
          </h1>
          <p className="text-sm font-poppins md:text-lg text-[#310e10] mt-5">
            Smart design for modern living.
          </p>
        </div>
      </div>

      <div className=" mt-10 h-full bg-[#FBF2E1]">
        <div className="w-full text-center p-20">
          <h2 className="text-[#310e10]  font-poppins font-bold text-4xl md:text-5xl lg:text-7xl">
            What we do?
          </h2>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
