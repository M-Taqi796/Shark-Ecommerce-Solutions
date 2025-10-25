import { NavLink } from "react-router-dom";
import { ArrowRight2 } from "iconsax-reactjs";
export default function Sidebar({ open, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-20 transition-transform duration-300 border-l border-gray-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ willChange: "transform" }}
    >
      <button
        className="absolute top-4 right-4 text-gray-600"
        onClick={onClose}
      >
        {/* Close */}
        <ArrowRight2 size="32" color="#628B48" variant="Outline"/>
      </button>
      <div className="p-8">
        {/* I removed the unnecessary flex classes from here */}
        {/* <h2 className="text-lg font-bold mb-4">Shark Ecommerce Solutions</h2> */}

        {/* Add a <nav> wrapper here with the flex classes */}
        <nav className="flex flex-col gap-4">
          <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/">Home</NavLink>
          <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/services">Services</NavLink>
          <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/case-study">Case Study</NavLink>
          <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/about">About us</NavLink>
          <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/audit">Free Audit</NavLink>
          <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/contact">Contact us</NavLink>
          <NavLink className={({isActive})=> isActive? "font-bold" : ""} to="/meeting">Meeting</NavLink>
        </nav>
      </div>
    </div>
  );
}