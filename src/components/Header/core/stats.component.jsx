import Counter from "../../Counter/counter.component"

const Stats =({heading, subHeading, string})=>{
    return(
        <div className="py-20 px-14 w-3xs bg-background rounded-xl text-secondary hover:bg-primary hover:text-fontWhite hover:scale-105 transition-transform duration-300 group">
                <Counter targetNumber={heading} string={string}/>
                <p className="text-sm">{subHeading}</p>
            </div>
    )
}
export default Stats