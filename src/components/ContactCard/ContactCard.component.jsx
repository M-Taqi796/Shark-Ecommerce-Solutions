const ContactCard = () => {
    return (
        <section className="bg-primary p-6 flex items-center gap-14 mb-20 mx-36 rounded-3xl">
            <img className="rounded-2xl  hover:scale-105 transition-transform duration-300" src="get_together.webp" alt="" />
            <article className="text-center">
                <h2 className="text-lg text-fontWhite font-bold mb-3">Lets Grow Together</h2>
                <p className="text-fontWhite text-md mb-3">We are more than happy to discuss and provide solutions to your problems</p>
                <button className="text-fontPrimary px-6 py-3 bg-background shadow-[4px_4px_0px_0px] shadow-backgroundSecondary hover:shadow-[0px_0px_0px_0px]">Contact Us Now</button>
            </article>
        </section>
    )
}
export default ContactCard