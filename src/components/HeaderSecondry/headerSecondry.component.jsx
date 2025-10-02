const HeaderSecondry = () => {
  return (
    <header className="mx-40 mb-20 flex justify-between items-center mt-20">
      <article className="flex flex-col gap-4 w-[50%]">
        <h1 className="text-xl">
          Turning Amazon Clicks Into <br />
          <span className="text-secondary">Consistent</span>{" "}
          <span className="text-primary">Sales</span>
        </h1>
        <p className="text-md">Proven PPC & listing optimisation that actually delivers.</p>
        <div className="flex gap-4">
        <button className="text-fontWhite w-72 py-3 bg-secondary shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px]">
          Schedule a meeting
        </button>
        <button className="text-fontPrimary w-72 py-3 bg-primary shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px]">
          Get a <span className="font-bold">Free</span> Audit Report
        </button>
        </div>
      </article>
      <img className="w-[50%] rounded-tr-[6.25rem] rounded-bl-[6.25rem] rounded-tl-3xl rounded-br-3xl" src="meeting.png" alt="" />
    </header>
  );
};
export default HeaderSecondry;
