import { useNavigate } from "react-router-dom";
const AboutUsHeader = () => {
  const navigate = useNavigate();
  return (
    <section>
      <article className="text-center py-20 px-80 bg-secondary text-fontWhite mb-20 max-xl:px-32 max-md:px-10 max-sm:px-4">
        <h1 className="text-xl mb-6 max-sm:text-sxl">Meet the Shark</h1>
        <p className="text-md max-sm:text-smd">
          Behind every powerful Amazon brand, there's a strategist who knows how
          to turn potential into profit. Since 2017, we.ve been helping brands
          dominate the Amazon marketplace with precision, creativity, and
          data-driven strategies.
        </p>
      </article>
      <section className="flex justify-between items-center gap-6 mx-40 mb-20 max-xl:mx-14 max-lg:flex-col max-sm:mx-6">
        <div>
          <article className="w-full">
            <h1 className="text-xl mb-6 max-lg:text-center max-sm:text-sxl">Our Success Story</h1>
            <p className="text-md max-lg:text-center max-sm:text-smd">
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
        </div>
        <div>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-md max-sm:text-smd text-center">This isn't just what we do,  it's who we are</h2>
            <div className="rounded-3xl bg-primary p-6 min-w-[20rem] max-sm:min-w-[6rem] text-center font-bold text-sm">
                <p>Growth driven</p>
            </div>
            <div className="rounded-3xl bg-secondary p-6 min-w-[20rem] max-sm:min-w-[6rem] text-white text-center font-bold text-sm">
                <p>Data focused</p>
            </div>
            <div className="rounded-3xl bg-black p-6 min-w-[20rem] max-sm:min-w-[6rem] text-white text-center font-bold text-sm">
                <p>Results obsessed</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-8 py-20 bg-primary mb-20">
                <h1 className="text-md text-center font-bold max-sm:text-smd">Want to become another success story?</h1>
                 <button className="text-fontPrimary px-6 py-3 bg-background shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px]" onClick={()=>navigate("/contact")}>Lets Talk</button>
            </section>
    </section>
  );
};
export default AboutUsHeader;
