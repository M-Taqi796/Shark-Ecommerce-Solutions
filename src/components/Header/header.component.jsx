import Stats from "./core/stats.component";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center mb-20">
      <div className="text-center">
        <motion.div initial={{y:50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5}}>
        <div className="flex items-center justify-center mb-5 gap-5">
            <div className="flex items-center">
            <img className="rounded-full size-14" src="Ellipse1.png" alt="" />
            <img className="rounded-full size-14 ml-[-1.25rem]" src="Ellipse2.png" alt="" />
            <img className="rounded-full size-14 ml-[-1.25rem]" src="Ellipse3.png" alt="" />
            </div>
            <p className="text-md"><span className="font-bold">500+</span> Happy Customers</p>
        </div>
        </motion.div>
        <motion.div initial={{y:50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5, delay:0.5}}>
        <h1 className="text-xl">Don't Just Sell on Amazon</h1>
        </motion.div>
        <motion.div initial={{y:50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5, delay:1}}>
        <h1 className="text-xl text-secondary">Dominate It!</h1>
        </motion.div>
      </div>
      <img className="w-4xl" src="/sharkbusinessmen.webp" alt="" />
      <div className="w-full px-20">
        <div className="bg-backgroundSecondary rounded-4xl py-16 w-full">
          <div className="grid grid-cols-4 gap-6 px-40">
            <Stats heading={"250"} subHeading={"7 Fig Accounts Managed"} string={"+"}/>
            <Stats heading={"1500"} subHeading={"Daily Sales Generated"} string={"K+"}/>
            <Stats heading={"200"} subHeading={"Consistant Monthly Profit Generated"} string={"K+"}/>
            <Stats heading={"25"} subHeading={"CRV elevate in just 3 months"} string={"%"}/>
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <button className="text-fontWhite w-96 py-3 bg-secondary shadow-[4px_4px_0px_0px] shadow-background hover:shadow-[0px_0px_0px_0px]" onClick={() => navigate("/meeting")}>Schedule a meeting</button>
            <button className="text-fontPrimary w-96 py-3 bg-primary shadow-[4px_4px_0px_0px] shadow-background hover:shadow-[0px_0px_0px_0px]" onClick={() => navigate("/audit")}>Get a <span className="font-bold">Free</span> Audit Report</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
