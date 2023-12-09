import {  Logo,Avatar } from "../../constants/constant";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <header className="w-[100%] h-16  flex items-center  sticky bg-black top-0 left-0" style={{zIndex:"99"}}>
      <div className="w-[85%] lg:w-[92%] mx-auto flex justify-between">
        <div className="logo flex gap-10">
          <img src={Logo} alt="" className="w-24"/>
          <div className="hidden text-white md:flex gap-6">
          <span>My List</span>
          <span>Movie </span>
          <span>TV Shows</span>
        </div>
        </div>
        <div className="md:hidden " >
            
            <IoMenu className="text-white h-8 w-7"/>
        </div>
        <div className="text-white font-bold text-2xl">
            <h2>Netflix</h2>
        </div>
        <div className="">
            <IoSearch className="text-white h-8 w-5"/>
        </div>
        <div className="">
            <img src={Avatar} alt="" />
        </div>

      </div>
    </header>
  );
}
export default Navbar;
