import ServicesCard from "../Services/core/ServicesCard.component";

const Servicesmain = () => {
  return (
    <section className="mb-20 mx-40">
      <h1 className="text-xl text-secondary text-center">We Help You Rise</h1>
      <p className="text-center mx-60">
        From PPC campaigns to SEO, design, and listing optimization — we provide
        end-to-end Amazon solutions that boost visibility, increase sales, and
        strengthen your brand. Our strategies are built to help you grow
        smarter, faster, and higher.
      </p>
      <div className="flex gap-5 mt-10">
        <div className="flex flex-col gap-5">
          <ServicesCard
            image="seo.svg"
            title="SEO"
            description="Increase organic rankings with proven Amazon SEO strategies tailored to your products."
          />
          <ServicesCard
            image="design.svg"
            title="Design"
            description="Create eye-catching visuals, A+ content, and storefront designs that build trust and attract more buyers."
          />
        </div>
        <div className="w-[50%] justify-center bg-background shadow text-fontWhite px-5 py-8 rounded-2xl flex flex-col items-center gap-4 hover:bg-primary hover:scale-105 transition-transform duration-300 group">
          <img className="size-28" src="ppc.svg" alt="" />
          <h2 className="text-md font-bold text-secondary group-hover:text-fontWhite">
            "Amazon PPC"
          </h2>
          <p className="text-fontSecondary text-sm text-center group-hover:text-fontWhite">
            "Drive targeted traffic and boost sales with data-driven ad campaigns that maximise ROI and lower ACoS."
          </p>
          <button className="text-sm text-secondary underline cursor-pointer group-hover:text-fontWhite">
            Get Started Now
          </button>
        </div>
        <ServicesCard
          image="listing.svg"
          title="Listing optimization"
          description="Improve visibility and conversions by keyword-rich titles, compelling copy, and enhanced product content."
        />
      </div>
    </section>
  );
};
export default Servicesmain;
