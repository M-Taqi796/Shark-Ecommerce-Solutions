/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const CaseStudyTwo = () => {
  return (
    <section>
      <article className="text-center py-20 px-80 bg-secondary text-fontWhite mb-20 max-xl:px-32 max-md:px-10 max-sm:px-4">
        <h1 className="text-xl mb-6 max-sm:text-sxl">
          Achieving Lifetime Sales Growth with ACoS Reduced Below 20%
        </h1>
        <p className="text-md max-sm:text-smd">
          This case study demonstrates how strategic optimization led to
          continuous lifetime sales growth while successfully maintaining ACoS
          below 20%, ensuring long-term profitability and sustainable
          performance
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
              Achieving consistent sales growth while keeping advertising costs
              under control is one of the biggest challenges for Amazon sellers.
              Through a carefully structured optimization strategy, we were able
              to deliver exceptional results by increasing overall lifetime
              sales while reducing the Advertising Cost of Sales (ACOS) to below
              20%. Our approach focused on smart bidding, data-driven keyword
              selection, and continuous performance monitoring to retain
              profitability while scaling sales.
              <br /> <br />
            </p>
            <p className="text-md max-lg:text-center max-sm:text-smd">
              By enhancing product listings, refining keyword targeting, and
              eliminating non-converting search terms, we significantly improved
              campaign efficiency. The sustained optimization efforts resulted
              in an 80% growth in lifetime sales over six months, a remarkable
              increase in conversion rates by 35%, and a return on ad spend
              (ROAS) of 4x. Additionally, as the campaigns matured, the products
              began ranking organically on the first page, reducing long-term
              advertising dependency. This strategy proved that with the right
              optimization, it is achievable to scale revenue consistently while
              keeping ACOS under control and maximizing long-term profitability.
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
        <img className="w-full border" src="/cs_2_1.png" alt="" />
        <img className="w-full border" src="/cs_2_2.png" alt="" />
        <img className="w-full border" src="/cs_2_4.png" alt="" />
        <img className="w-full border" src="/cs_2_3.png" alt="" />
        <img className="w-full border" src="/cs_2_5.png" alt="" />
      </section>
    </section>
  );
};
export default CaseStudyTwo;
