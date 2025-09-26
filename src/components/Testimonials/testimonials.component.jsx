const Testimonials = () => {
    return (
        <div className="mb-20">
            <h1 className="text-xl text-secondary text-center mb-10">Client Testimonials</h1>
            <div className="flex items-center mx-40 justify-between">
                <img className="size-16 hover:scale-130 transition-transform duration-300" src="left.svg" alt="" />
                <div className="flex flex-col items-center">
                    <img className="rounded-full size-24 mb-4" src="default.jpg" alt="" />
                    <h2 className="text-lg">NameOfClient</h2>
                    <div className="flex gap-1.5 mb-6">
                        <img className="size-8" src="Star.svg" alt="" />
                        <img className="size-8" src="Star.svg" alt="" />
                        <img className="size-8" src="Star.svg" alt="" />
                        <img className="size-8" src="Star.svg" alt="" />
                        <img className="size-8" src="Star.svg" alt="" />
                    </div>
                    <p className="text-center text-sm w-3xl">Stand out from the competition and showcase your brand with top-tier A+ content, Brand Stores, and graphics that convert. Our Amazon agency can get it done</p>
                </div>
                <img className="size-16 hover:scale-130 transition-transform duration-300" src="right.svg" alt="" />
            </div>
        </div>
    )
}
export default Testimonials