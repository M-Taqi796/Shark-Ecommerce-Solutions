import Counter from "../../Counter/counter.component"

const Stats =({heading, subHeading, string})=>{
    return(
        <div className="py-20 px-14 w-full bg-background rounded-xl text-secondary hover:bg-primary hover:text-fontWhite hover:scale-105 transition-transform duration-300 group max-[93.75rem]:px-4 max-[93.75rem]:py-10 max-[60rem]:px-2 max-[60rem]:py-6 max-sm:flex max-sm:flex-col max-sm:items-center">
                <Counter targetNumber={heading} string={string}/>
                <p className="text-sm max-[67.5rem]:text-ssm max-sm:text-center">{subHeading}</p>
            </div>
    )
}
export default Stats