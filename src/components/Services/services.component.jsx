import ServicesCard from "./core/ServicesCard.component"

const Services = () => {
    return (
        <section className="mb-20 mx-40">
            <h1 className="text-xl text-secondary text-center">We Help You Rise</h1>
            <p className="text-center mx-60 text-sm">From PPC campaigns to SEO, design, and listing optimization — we provide end-to-end Amazon solutions that boost visibility, increase sales, and strengthen your brand. Our strategies are built to help you grow smarter, faster, and higher.</p>
            <div className="flex justify-between mt-10">
                <ServicesCard image="ppc.svg" title="Amazon PPC" description="Drive targeted traffic and boost sales with data-driven ad campaigns that maximise ROI and lower ACoS."/>
                <ServicesCard image="listing.svg" title="Listing optimization" description="Improve visibility and conversions by keyword-rich titles, compelling copy, and enhanced product content."/>
                <ServicesCard image="seo.svg" title="SEO" description="Increase organic rankings with proven Amazon SEO strategies tailored to your products."/>
                <ServicesCard image="design.svg" title="Design" description="Create eye-catching visuals, A+ content, and storefront designs that build trust and attract more buyers."/>
            </div>
        </section>
    )
}
export default Services