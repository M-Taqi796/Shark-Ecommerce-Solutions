const CaseStudyCard = ({
  heading,
  description,
  oneNum,
  oneTitle,
  twoNum,
  twoTitle,
  image,
  direction,
}) => {
  return (
    <section
      className={`flex items-center gap-16 py-3 border-b ${
        direction === "reverse" ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col gap-6 w-[50%]">
        <h2 className="font-bold text-lg">{heading}</h2>
        <p className="text-md">{description}</p>
        <div className="flex gap-20 items-center">
          <div className="flex gap-3 items-center">
            <p className="text-lg">{oneNum}</p>
            <p className="w-28 text-sm">{oneTitle}</p>
          </div>
          <div className="flex gap-3 items-center">
            <p className="text-lg">{twoNum}</p>
            <p className="w-28 text-sm">{twoTitle}</p>
          </div>
        </div>
      </div>
      <img className="rounded-xl w-[50%] hover:scale-102 transition-transform duration-300" src={image} alt="" />
    </section>
  );
};
export default CaseStudyCard;
