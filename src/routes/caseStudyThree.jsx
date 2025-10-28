import LetsTalk from "../components/LetsTalk/letsTalk.component";
import MeetingCard from "../components/MeetingCard/meetingCard.component";

const CaseStudyThree = () => {
  return (
    <section>
      <article className="text-center py-20 px-80 bg-secondary text-fontWhite mb-20 max-xl:px-32 max-md:px-10 max-sm:px-4">
        <h1 className="text-xl mb-6 max-sm:text-sxl">
          Boosting Sales Through Strategic Amazon Listing Optimization
        </h1>
        <p className="text-md max-sm:text-smd">
          This case study highlights how optimized product listings
          significantly improved visibility, conversion rates, and overall sales
          performance without increasing advertising costs.
        </p>
      </article>
      <section className="flex justify-between items-center gap-6 mx-40 mb-20 max-xl:mx-14 max-lg:flex-col max-sm:mx-6">
        <div>
          <article className="w-full">
            <h1 className="text-xl mb-6 max-lg:text-center max-sm:text-sxl">
              Case Study Description:
            </h1>
            <p className="text-md max-lg:text-center max-sm:text-smd">
              Listing Optimization plays a critical role in influencing both
              organic ranking and customer purchase decisions. By optimizing
              product titles, bullet points, descriptions, keywords, and images,
              we were able to dramatically increase listing performance and
              improve sales outcomes. Our optimization strategy focused on
              enhancing keyword relevance, improving content quality, and
              creating a persuasive customer experience to build trust and drive
              conversions.
              <br /> <br />
            </p>
            <p className="text-md max-lg:text-center max-sm:text-smd">
              After implementing these optimizations, the product achieved
              higher visibility in organic search results, resulting in a
              significant increase in traffic. The improved content helped
              customers better understand the product benefits, which directly
              contributed to a higher conversion rate. As a result, sales
              increased by over <span className="font-bold">50% within the first month,</span> without the need for
              additional ad spend. The listing also started ranking on page one
              for multiple high-volume keywords, leading to consistent sales
              growth and long-term market stability. This case demonstrates that
              strategic listing optimization alone can substantially improve
              performance and drive sustainable sales growth on Amazon.
            </p>
          </article>
        </div>
      </section>
      <LetsTalk />
      <section className="grid grid-cols-2 gap-10 mx-20 justify-center items-center mb-20 max-lg:mx-6 max-lg:gap-4 max-md:grid-cols-1 max-sm:mx-2 max-sm:gap-2">
        <img className="w-full border" src="/cs_3_1.png" alt="" />
        <img className="w-full border" src="/cs_3_2.png" alt="" />
        <img className="w-full border" src="/cs_3_4.png" alt="" />
        <img className="w-full border" src="/cs_3_3.png" alt="" />
        <img className="w-full border" src="/cs_3_5.png" alt="" />
      </section>
      <MeetingCard />
    </section>
  );
};
export default CaseStudyThree;