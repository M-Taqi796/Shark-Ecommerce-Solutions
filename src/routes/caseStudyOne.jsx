/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import MeetingCard from "../components/MeetingCard/meetingCard.component";

const CaseStudyOne = () => {
  return (
    <section>
      <article className="text-center py-20 px-80 bg-secondary text-fontWhite mb-20 max-xl:px-32 max-md:px-10 max-sm:px-4">
        <h1 className="text-xl mb-6 max-sm:text-sxl">
          Amazon PPC Optimization - Driving 60% Increase in Sales with 40% Lower
          ACOS
        </h1>
        <p className="text-md max-sm:text-smd">
          Through advanced Amazon PPC optimization strategies, we helped
          increase product visibility, improve click-through rates, and achieve
          a 60% boost in sales while reducing Advertising Cost of Sales ACOS by
          40%.
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
              Amazon PPC Optimization is a performance-focused strategy designed
              to maximize profitability and product visibility. By implementing
              data-driven keyword targeting, bid adjustments, and negative
              keyword filtering, we successfully eliminated wasted ad spend and
              focused only on high-converting traffic.
              <br /> <br />
            </p>
            <h1 className="text-md mb-6 max-lg:text-center max-sm:text-smd">
              Our optimization approach included:
            </h1>
            <p className="text-md max-lg:text-center max-sm:text-smd">
              Keyword refinement identified high-performing keywords resulting
              in a 70% increase in click-through rate (CTR), Smart Bidding
              Strategy: Reduced unnecessary ad spends, leading to a 40% drop in
              ACOS, Negative keyword implementation prevented irrelevant clicks
              and improved targeting accuracy by 50%. Listing optimization
              enhanced product content and visuals, resulting in a 30% increase
              in conversion rate.
              <br /> <br />
            </p>
            <p className="text-md max-lg:text-center max-sm:text-smd">
              This optimization not only improved organic ranking but also
              helped achieve sustained long-term growth with a 300% return on ad
              spend (ROAS), making it a cost-effective and scalable solution for
              Amazon sellers.
              <br /> <br />
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
        <img className="w-full border" src="/cs_1_1.png" alt="" />
        <img className="w-full border" src="/cs_1_2.png" alt="" />
        <img className="w-full border" src="/cs_1_4.png" alt="" />
        <img className="w-full border" src="/cs_1_3.png" alt="" />
        <img className="w-full border" src="/cs_1_5.png" alt="" />
      </section>
      <MeetingCard />
    </section>
  );
};
export default CaseStudyOne;
