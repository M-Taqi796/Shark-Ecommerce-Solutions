const Stats =({heading, subHeading})=>{
    return(
        <div className="py-20 px-14 w-3xs bg-background rounded-xl text-secondary hover:bg-primary hover:text-fontWhite hover:scale-105 transition-transform duration-300">
                <h2 className="text-xl font-bold">{heading}</h2>
                <p className="text-sm">{subHeading}</p>
            </div>
    )
}
export default Stats