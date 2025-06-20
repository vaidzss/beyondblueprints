import { MdMenu } from "react-icons/md"


function Navbar() {
  return (
    <nav className="bg-[#FBF2E1] h-20 display flex justify-between px-2 md:px-10">
      <div className="logo md:size-14 size-10 md:pt-3 pt-5">
             <img src="/logo.jpg" alt="logo" className="rounded-full "/>
          
      </div>
      <div className=" pt-5">
          <h2 className="text-[#6f4d38] font-playfair font-semibold text-2xl md:text-3xl">
               Beyond Blueprint
            </h2>
      </div>
      <div className="menu pt-6">
       <MdMenu size={30} color="#6f4d38"/>
      </div>
    </nav>
  )
}

export default Navbar
