import Counter from "../Counter/counter.component"

const CaseStudyHeader = () => {
    return (
        <section>
            <article className="text-center py-20 px-80 bg-secondary text-fontWhite mb-20">
                <h1 className="text-xl mb-6">Case Studies</h1>
                <p className="text-md">Witness how we help businesses transform from struggling to successful on Amazon. Become an Amazon success story with our tailored solutions and proven track record.</p>
            </article>
            <section className="flex justify-between items-center mx-40 mb-20">
                <article className="w-[60%]">
                    <h1 className="text-xl mb-6">Our Past Projects</h1>
                    <p className="text-md">Let us help you stand out in the crowded Amazon marketplace with our proven approach to digital marketing and customer experience. Witness the success stories yourself.</p>
                </article>
                <div className="flex items-center gap-6 p-6 bg-primary rounded-2xl">
                    <Counter targetNumber={100} string="+" color="text-fontprimary" size="text-lg"/>
                    <p className="text-sm">Projects<br />Completed</p>
                </div>
            </section>
            <section className="flex flex-col items-center gap-8 py-20 bg-primary mb-20">
                <h1 className="text-lg text-center font-bold">Want to become another success story?</h1>
                 <button className="text-fontPrimary px-6 py-3 bg-background shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px]">Lets Talk</button>
            </section>
        </section>
    )
}
export default CaseStudyHeader