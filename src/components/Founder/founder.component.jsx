/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"

const Founder = () => {
    return (
        <div className="flex mx-72 mb-20 justify-around items-center">
            <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1, delay:0.5}}>
                <img className="w-xl rounded-l-[6.25rem] rounded-r-3xl hover:scale-105 transition-transform duration-300" src="MrSomeone.jpeg" alt="" />
            </motion.div>

            <motion.div initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:1}}>
            <div>
                <h3 className="text-lg">Meet our Founder</h3>
                <h2 className="text-xl">Mr. Someone</h2>
                <ul className="list-disc list-inside">
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