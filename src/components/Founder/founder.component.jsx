/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"

const Founder = () => {
    return (
        <div className="flex mx-72 mb-20 justify-around items-center max-[94rem]:mx-28 max-[75rem]:mx-4 max-md:flex-col">
            <motion.div initial={{x:-50, opacity:1}} whileInView={{x:0, opacity:1}} transition={{duration:1}}>
                <img className="w-xl rounded-l-[6.25rem] rounded-r-3xl hover:scale-105 transition-transform duration-300 max-[58.75rem]:w-md max-md:rounded-r-[6.25rem] max-md:mb-6 max-sm:w-sm" src="founder.jpeg" alt="" />
            </motion.div>

            <motion.div initial={{x:50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1}}>
            <div>
                <h3 className="text-lg max-sm:text-smd">Meet our Founder</h3>
                <h2 className="text-xl max-sm:text-sxl">Mr. Someone</h2>
                <ul className="list-disc list-inside text-sm max-sm:text-ssm">
                    <li>WriteSomeSentenceHere</li>
                    <li>WriteSomeSentenceHere</li>
                    <li>WriteSomeSentenceHere</li>
                    <li>WriteSomeSentenceHere</li>
                </ul>
            </div>
            </motion.div>
        </div>
    )
}
export default Founder