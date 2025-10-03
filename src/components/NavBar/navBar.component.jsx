import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-20 mt-6 mb-10">
      <img className="h-16" src="/Logo.avif" alt="" />
      <div className="flex gap-8">
        <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/">Home</NavLink>
        <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/services">Services</NavLink>
        <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/case-study">Case Study</NavLink>
        <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/about">About us</NavLink>
        <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/audit">Free Audit</NavLink>
        <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/contact">Contact us</NavLink>
      </div>
      <button className="text-fontWhite px-6 py-3 bg-secondary shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px]">Schedule a meeting</button>
    </nav>
  );
};
export default NavBar;