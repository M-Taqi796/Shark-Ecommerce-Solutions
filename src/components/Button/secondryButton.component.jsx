const SecondryBTN = ({
  title,
  onClick,
  bgColor = "bg-secondary",
  textColor = "text-fontWhite",
  shadowColor = "backgroundSecondary", // default shadow color
}) => {
  return (
    <button
      className={`${bgColor} ${textColor} px-6 py-3 shadow-[4px_4px_0px_${shadowColor}]`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default SecondryBTN;
