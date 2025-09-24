import { Link } from "react-router-dom";
import SecondryBTN from "../Button/secondryButton.component";
const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-20 mt-6 mb-10">
      <img className="h-16" src="/Logo.avif" alt="" />
      <div className="flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/case-study">Case Study</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact us</Link>
      </div>
      <button className="text-fontWhite px-6 py-3 bg-secondary shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px]">Schedule a meeting</button>
    </nav>
  );
};
export default NavBar;
