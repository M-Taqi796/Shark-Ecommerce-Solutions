import Counter from "../Counter/counter.component";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const AboutUsHeader = () => {
  const navigate = useNavigate();
  return (
    <section>
      <article className="text-center py-20 px-80 bg-secondary text-fontWhite mb-20">
        <h1 className="text-xl mb-6">Meet the Shark</h1>
        <p className="text-md">
          Behind every powerful Amazon brand, there's a strategist who knows how
          to turn potential into profit. Since 2017, we.ve been helping brands
          dominate the Amazon marketplace with precision, creativity, and
          data-driven strategies.
        </p>
      </article>
      <section className="flex justify-between items-center mx-40 mb-20">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <article className="w-[60%]">
            <h1 className="text-xl mb-6">Our Success Story</h1>
            <p className="text-md">
              We've successfully managed 250+ seven-figure accounts, scaling
              brands from scratch to generating $1.5M in daily sales and
              delivering consistent $200K+ in monthly profits. With deep
              expertise in PPC advertising, conversion optimization, and brand
              scaling, we've helped brands elevate their CVR from 10% to 25% in
              just 3 to 6 months.
              <br /> <br />
              But it's not just about numbers — it's about people. Just like
              great captains lead strong crews, we've built a top-notch team of
              Amazon experts — strategists, marketers, creatives, and analysts —
              each bringing unique skills, sharp insights, and an unwavering
              commitment to growth. We've also partnered with top U.S. agencies,
              delivering world-class performance marketing and transforming
              brands into category leaders.
              <br /> <br />
              We're not just Amazon experts. We're your trusted partners in scaling your brand to its full potential.
            </p>
          </article>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6 p-6 bg-primary rounded-2xl min-w-[300px]">
              <Counter
                targetNumber={250}
                string="+"
                color="text-fontprimary"
                size="text-lg"
              />
              <p className="text-sm">
                Seven Figure
                <br />
                Accounts
                <br />
                Managed
              </p>
            </div>
            <div className="flex items-center gap-6 p-6 bg-secondary rounded-2xl min-w-[300px] text-white">
              <Counter
                targetNumber={1500}
                string="K+"
                color="text-fontprimary"
                size="text-lg"
              />
              <p className="text-sm">
                Daily Sales
                <br />
                Generated
              </p>
            </div>
          </div> */}
          <div className="flex flex-col gap-6">
            <h2 className="text-lg text-center">This isn't just what we do,  it's who we are</h2>
            <div className="rounded-3xl bg-primary p-6 min-w-[20rem] text-center font-bold text-sm">
                <p>Growth driven</p>
            </div>
            <div className="rounded-3xl bg-secondary p-6 min-w-[20rem] text-white text-center font-bold text-sm">
                <p>Data focused</p>
            </div>
            <div className="rounded-3xl bg-black p-6 min-w-[20rem] text-white text-center font-bold text-sm">
                <p>Results obsessed</p>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="flex flex-col items-center gap-8 py-20 bg-primary mb-20">
        <h1 className="text-lg text-center font-bold">
          Want to become another success story?
        </h1>
        <button
          className="text-fontPrimary px-6 py-3 bg-background shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px]"
          onClick={() => navigate("/contact")}
        >
          Lets Talk
        </button>
      </section>
    </section>
  );
};
export default AboutUsHeader;
