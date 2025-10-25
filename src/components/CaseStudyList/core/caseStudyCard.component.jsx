const CaseStudyCard = ({
  heading,
  description,
  oneNum,
  oneTitle,
  twoNum,
  twoTitle,
  image,
  color,
  direction,
}) => {
  return (
    <section
      className={`flex items-center gap-16 py-3 border-b max-lg:flex-col max-lg:gap-6 ${
        direction === "reverse" ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col gap-6 w-full">
        <h2 className="font-bold text-md max-sm:text-smd">{heading}</h2>
        <p className="text-sm max-sm:text-ssm">{description}</p>
        <div className="flex gap-10 items-center max-sm:flex-col max-sm:items-start max-sm:gap-4">
          <div className="flex gap-3 items-center">
            <p className="text-md max-sm:text-ssm">{oneNum}</p>
            <p className="w-28 text-sm max-sm:text-ssm">{oneTitle}</p>
          </div>
          <div className="flex gap-3 items-center">
            <p className="text-md max-sm:text-smd">{twoNum}</p>
            <p className="w-28 text-sm max-sm:text-ssm">{twoTitle}</p>
          </div>
        </div>
      </div>
      <img className={`rounded-xl w-[50%] max-lg:w-full hover:scale-102 transition-transform duration-300 border-40 border-${color}`} src={image} alt="" />
    </section>
  );
};
export default CaseStudyCard;
