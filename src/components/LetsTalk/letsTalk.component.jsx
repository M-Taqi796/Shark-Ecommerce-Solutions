import { useNavigate } from "react-router-dom"
const LetsTalk = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center gap-8 py-20 bg-primary mb-20">
      <h1 className="text-md text-center font-bold max-sm:text-smd">
        Want to become another success story?
      </h1>
      <button
        className="text-fontPrimary px-6 py-3 bg-background shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px]"
        onClick={() => navigate("/contact")}
      >
        Lets Talk
      </button>
    </section>
  );
};
export default LetsTalk