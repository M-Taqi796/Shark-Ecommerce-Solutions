import Stats from "./core/stats.component";
const Header = () => {
  return (
    <section className="flex flex-col items-center mb-20">
      <div className="text-center">
        <div className="flex items-center justify-center mb-5 gap-5">
            <div className="flex items-center">
            <img className="rounded-full size-14" src="Ellipse1.png" alt="" />
            <img className="rounded-full size-14 ml-[-1.25rem]" src="Ellipse2.png" alt="" />
            <img className="rounded-full size-14 ml-[-1.25rem]" src="Ellipse3.png" alt="" />
            </div>
            <p className="text-md"><span className="font-bold">500+</span> Happy Customers</p>
        </div>
        <h1 className="text-xl">Don't Just Sell on Amazon</h1>
        <h1 className="text-xl text-secondary">Dominate It!</h1>
      </div>
      <img className="w-4xl" src="/sharkbusinessmen.webp" alt="" />
      <div className="w-full px-20">
        <div className="bg-backgroundSecondary rounded-4xl py-16 w-full">
          <div className="grid grid-cols-4 gap-6 px-40">
            <Stats heading={"150+"} subHeading={"TitleNumberOne"} />
            <Stats heading={"150+"} subHeading={"TitleNumberTwo"} />
            <Stats heading={"150+"} subHeading={"TitleNumberThree"} />
            <Stats heading={"150+"} subHeading={"TitleNumberFour"} />
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <button className="text-fontWhite w-96 py-3 bg-secondary shadow-[4px_4px_0px_0px] shadow-background hover:shadow-[0px_0px_0px_0px]">Schedule a meeting</button>
            <button className="text-fontPrimary w-96 py-3 bg-primary shadow-[4px_4px_0px_0px] shadow-background hover:shadow-[0px_0px_0px_0px]">Get a <span className="font-bold">Free</span> Audit Report</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
