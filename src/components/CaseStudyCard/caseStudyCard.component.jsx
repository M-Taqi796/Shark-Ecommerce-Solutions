/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
const CaseStudyCard = () => {
    const navigate = useNavigate();
    return (
        <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1, delay:0}}>
            <section className="bg-secondary p-6 flex justify-center items-center gap-14 mb-20 max-[90rem]:mx-20 mx-40 rounded-3xl hover:scale-105 transition-transform duration-300 max-[60rem]:flex-col max-[60rem]:gap-6 max-sm:mx-6">
                <img className="rounded-2xl w-[40rem]" src="cs_1_1.png" alt="" />
                <article className="text-center">
                    <h2 className="text-md text-fontWhite font-bold mb-3 max-sm:text-smd">Our Results</h2>
                    <p className="text-sm text-fontWhite mb-3 max-sm:text-ssm">Ready for Real-World Proof? Dive Into Our Success Stories and Learn More About Our Process.</p>
                    <button className="text-fontPrimary px-6 max-sm:w-full max-sm:px-1 py-3 bg-background shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px]" onClick={() => navigate("/meeting")}>Schedule a meeting</button>
                </article>
            </section>
        </motion.div>
    )
}
export default CaseStudyCard