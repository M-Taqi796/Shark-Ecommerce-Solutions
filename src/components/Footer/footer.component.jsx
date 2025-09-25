const Footer =() => {
    return (
        <section className="bg-backgroundSecondary px-20 pt-20 pb-10 text-fontSecondary">
            <div className="flex justify-between mb-20">
                <div className="flex flex-col gap-3">
                    <h2 className="text-lg text-secondary">Services</h2>
                    <p>Amazon PPC | Listing Optimisation | SEO | Designing</p>
                    <div className="flex gap-3">
                        <img className="size-8" src="fb.svg" alt="" />
                        <img className="size-8" src="ig.svg" alt="" />
                        <img className="size-8" src="tiktok.svg" alt="" />
                        <img className="size-8" src="x.svg" alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-3 items-end">
                    <h2 className="text-lg text-primary">Support</h2>
                    <p>+1234567890</p>
                    <p>contact@sharkecommerce.com</p>
                </div>
            </div>
            <p className="text-center">© 2025 Shark Ecommerce Solutions  All rights reserved</p>
        </section>
    )
}
export default Footer