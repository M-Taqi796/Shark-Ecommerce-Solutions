/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
const ContactCard = () => {
    const navigate = useNavigate();
    return (
        <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1, delay:0}}>
            <section className="bg-primary p-6 flex justify-center items-center gap-14 mb-20 mx-40 max-[90rem]:mx-20 rounded-3xl hover:scale-105 transition-transform duration-300 max-[60rem]:flex-col max-[60rem]:gap-6 max-sm:mx-6">
                <img className="rounded-2xl" src="get_together.webp" alt="" />
                <article className="text-center">
                    <h2 className="text-md text-fontWhite font-bold mb-3 max-sm:text-smd">Lets Grow Together</h2>
                    <p className="text-fontWhite text-sm mb-3 max-sm:text-ssm">We are more than happy to discuss and provide solutions to your problems</p>
                    <button className="text-fontPrimary px-6 max-sm:w-full max-sm:px-1 py-3 bg-background shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px]" onClick={() => navigate("/contact")}>Contact Us Now</button>
                </article>
            </section>
        </motion.div>
    )
}
export default ContactCard