/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const CaseStudyFour = () => {
  return (
    <section>
      <article className="text-center py-20 px-80 bg-secondary text-fontWhite mb-20 max-xl:px-32 max-md:px-10 max-sm:px-4">
        <h1 className="text-xl mb-6 max-sm:text-sxl">
          Enhancing Brand Visibility with Advanced Amazon Graphic Design
          Solutions
        </h1>
        <p className="text-md max-sm:text-smd">
          This case study showcases how high-quality listing images, A+ content,
          and storefront graphics significantly increased customer engagement,
          improved conversion rates, and boosted overall sales performance.
        </p>
      </article>
      <section className="flex justify-between items-center gap-6 mx-40 mb-20 max-xl:mx-14 max-lg:flex-col max-sm:mx-6">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <article className="w-full">
            <h1 className="text-xl mb-6 max-lg:text-center max-sm:text-sxl">
              Case Study Description:
            </h1>
            <p className="text-md max-lg:text-center max-sm:text-smd">
              Visual presentation is one of the most powerful factors
              influencing buyer decisions on Amazon. Through our professional
              graphic design services, we helped brands transform their product
              listings into high-converting visual experiences. Our services
              include creating premium listing images, infographic designs, A+
              Content modules, storefront banners, lifestyle images, and brand
              story visuals that effectively highlight product features and
              benefits.
              <br /> <br />
            </p>
            <p className="text-md max-lg:text-center max-sm:text-smd">
              By using visually compelling images aligned with Amazon’s
              guidelines, we successfully improved customer engagement and
              trust. The redesigned listing saw a substantial increase in
              click-through rate and a 45% rise in conversions within the first
              30 days. The A+ Content further enhanced brand authority, reducing
              bounce rates and increasing session duration, while the storefront
              graphics helped build a cohesive brand identity that encouraged
              repeat purchases.
              <br /> <br />
            </p>
            <p className="text-md max-lg:text-center max-sm:text-smd">
              This case study demonstrates that professional graphic design is
              not just about aesthetics—it's a strategic approach to
              storytelling and brand positioning. With optimized visuals,
              sellers can significantly improve organic rankings, drive more
              traffic, and convert visitors into loyal customers without relying
              solely on paid advertising.
            </p>
          </article>
        </motion.div>
      </section>
      <section className="flex flex-col items-center gap-8 py-20 bg-primary mb-20">
        <h1 className="text-md text-center font-bold max-sm:text-smd">
          Want to become another success story?
        </h1>
        <button className="text-fontPrimary px-6 py-3 bg-background shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px]">
          Lets Talk
        </button>
      </section>
      <section className="grid grid-cols-2 gap-10 mx-20 justify-center items-center mb-20 max-lg:mx-6 max-lg:gap-4 max-md:grid-cols-1 max-sm:mx-2 max-sm:gap-2">
        <img className="w-full border" src="/cs_4_1.png" alt="" />
        <img className="w-full border" src="/cs_4_2.png" alt="" />
        <img className="w-full border" src="/cs_4_4.png" alt="" />
        <img className="w-full border" src="/cs_4_3.png" alt="" />
        <img className="w-full border" src="/cs_4_5.png" alt="" />
        <img className="w-full border" src="/cs_4_6.png" alt="" />
      </section>
    </section>
  );
};
export default CaseStudyFour;
