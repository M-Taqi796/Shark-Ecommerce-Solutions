/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const HeaderSecondry = () => {
  const navigate = useNavigate();
  return (
    <header className="mx-20 mb-20 flex gap-6 justify-center items-center mt-20 max-xl:flex-col max-md:mx-6">
      <article className="flex flex-col gap-4 w-full items-center">
        <motion.div initial={{y:50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5}}>
        <h1 className="text-xl max-sm:text-sxl max-xl:text-center">
          Turning Amazon Clicks Into <br />
          <span className="text-secondary">Consistent</span>{" "}
          <span className="text-primary">Sales</span>
        </h1>
        </motion.div>
        <motion.div initial={{y:50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5, delay:0.5}}>
        <p className="text-md max-sm:text-sm max-xl:text-center">Proven PPC & listing optimisation that actually delivers.</p>
        </motion.div>
        <motion.div initial={{y:50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5, delay:1}}>
        <div className="flex gap-4 max-md:flex-col">
        <button className="text-fontWhite px-2 w-72 py-3 bg-secondary shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px] max-md:w-full" onClick={()=>navigate('/meeting')}>
          Schedule a meeting
        </button>
        <button className="text-fontPrimary px-2 w-72 py-3 bg-primary shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px] max-md:w-full" onClick={()=>navigate('/audit')}>
          Get a <span className="font-bold">Free</span> Audit Report
        </button>
        </div>
        </motion.div>
      </article>
      <img className="w-full rounded-tr-[6.25rem] rounded-bl-[6.25rem] rounded-tl-3xl rounded-br-3xl max-sm:rounded-tr-[4rem] max-sm:rounded-bl-[4rem]" src="meeting.png" alt="" />
    </header>
  );
};
export default HeaderSecondry;
