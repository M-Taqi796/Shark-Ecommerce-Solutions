const Footer =() => {
    return (
        <section className="bg-backgroundSecondary px-20 pt-20 pb-10 text-fontSecondary max-[53.75rem]:py-6 max-sm:px-6">
            <div className="flex justify-center mb-4">
            <img className="w-20" src="/Icon_Shark.svg" alt="" />
            </div>
            <div className="flex justify-between mb-20 max-[53.75rem]:flex-col">
                <div className="flex flex-col max-[53.75rem]:justify-center max-[53.75rem]:items-center max-[53.75rem]:mb-6 gap-3">
                    <h2 className="text-lg text-secondary">Services</h2>
                    <p className="text-center">Amazon PPC | Listing Optimisation | SEO | Designing</p>
                    <div className="flex gap-3">
                        <img className="size-8" src="/fb.svg" alt="" />
                        <img className="size-8" src="/ig.svg" alt="" />
                        <img className="size-8" src="/tiktok.svg" alt="" />
                        <img className="size-8" src="/x.svg" alt="" />
                    </div>
                </div>
                <div className="flex flex-col max-[53.75rem]:justify-center max-[53.75rem]:items-center gap-3 items-end">
                    <h2 className="text-lg text-primary">Support</h2>
                    <p className="text-center">+13479192740</p>
                    <p className="text-center">contact@sharkecommerce.com</p>
                </div>
            </div>
            <p className="text-center">© 2025 Shark Ecommerce Solutions  All rights reserved</p>
        </section>
    )
}
export default Footer