import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "../SideBar/sideBar.component";
import { HamburgerMenu } from "iconsax-reactjs";
import { useState } from "react";
const NavBar = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center px-20 mt-6 mb-10">
      <img className="h-16" src="/Logo.avif" alt="" />
      <div className="flex gap-8 max-md:hidden">
        <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/">Home</NavLink>
        <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/services">Services</NavLink>
        <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/case-study">Case Study</NavLink>
        <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/about">About us</NavLink>
        <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/audit">Free Audit</NavLink>
        <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/contact">Contact us</NavLink>
      </div>
      <button className="text-fontWhite px-6 py-3 bg-secondary shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px] max-md:hidden" onClick={() => navigate("/meeting")}>Schedule a meeting</button>
      <button className="text-fontWhite px-6 py-3 bg-secondary shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px] md:hidden" onClick={() => setSidebarOpen(true)}>
        <HamburgerMenu size={24} />
      </button>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </nav>
  );
};
export default NavBar;