import Counter from "../Counter/counter.component"
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
const CaseStudyHeader = () => {
    return (
        <section>
            <article className="text-center py-20 px-80 bg-secondary text-fontWhite mb-20 max-xl:px-32 max-md:px-10 max-sm:px-4">
                <h1 className="text-xl mb-6 max-sm:text-sxl">Case Studies</h1>
                <p className="text-md max-sm:text-smd">Witness how we help businesses transform from struggling to successful on Amazon. Become an Amazon success story with our tailored solutions and proven track record.</p>
            </article>
            <section className="flex justify-between items-center gap-6 mx-40 mb-20 max-xl:mx-14 max-lg:flex-col max-sm:mx-6">
                <motion.div initial={{x:-50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5}}>
                <article className="w-full">
                    <h1 className="text-xl mb-6 max-lg:text-center max-sm:text-sxl">Our Past Projects</h1>
                    <p className="text-md max-lg:text-center max-sm:text-smd">Let us help you stand out in the crowded Amazon marketplace with our proven approach to digital marketing and customer experience. Witness the success stories yourself.</p>
                </article>
                </motion.div>
                <motion.div initial={{x:50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5}}>
                <div className="flex items-center gap-6 p-6 bg-primary rounded-2xl">
                    {/* <Counter targetNumber={100} string="+" color="text-fontprimary" size="text-lg"/> */}
                    <p className="text-lg font-bold">1K+</p>
                    <p className="text-sm max-sm:text-ssmt">Projects<br />Completed</p>
                </div>
                </motion.div>
            </section>
            <section className="flex flex-col items-center gap-8 py-20 bg-primary mb-20">
                <h1 className="text-md text-center font-bold max-sm:text-smd">Want to become another success story?</h1>
                 <button className="text-fontPrimary px-6 py-3 bg-background shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px]">Lets Talk</button>
            </section>
        </section>
    )
}
export default CaseStudyHeader