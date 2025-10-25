import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "../SideBar/sideBar.component";
import { HamburgerMenu } from "iconsax-reactjs";
import { useState } from "react";
const NavBar = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center px-20 mt-6 mb-10 max-[67.5rem]:px-6 max-[57.75rem]:px-1 max-sm:px-2">
      <NavLink to="/">
        <img className="h-32 max-md:h-32 max-sm:h-20 max-[50rem]:h-16 max-[56.25rem]:h-24 max-[51.75rem]:h-20" src="/Landscape_Logo_Jpg.svg" alt="" />
      </NavLink>
      <div className="flex gap-8 max-md:hidden max-[72rem]:gap-4 max-[60rem]:gap-4 ">
        <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/">Home</NavLink>
        <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/services">Services</NavLink>
        <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/case-study">Case Study</NavLink>
        <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/about">About us</NavLink>
        <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/audit">Free Audit</NavLink>
        <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/contact">Contact us</NavLink>
      </div>
      <button className="text-fontWhite px-6 py-3 bg-secondary shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px] max-md:hidden max-[60rem]:px-2 max-[49rem]:px-1.5" onClick={() => navigate("/meeting")}>Schedule a meeting</button>
      <button className="text-fontWhite px-6 py-3 bg-secondary shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px] md:hidden" onClick={() => setSidebarOpen(true)}>
        <HamburgerMenu size={24} />
      </button>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </nav>
  );
};
export default NavBar;