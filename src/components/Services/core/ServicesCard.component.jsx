const ServicesCard = ({ image, title, description }) => {
    return (
        <div className="bg-backgroundSecondary text-fontWhite px-4 py-8 rounded-2xl w-80 flex flex-col items-center gap-4 hover:bg-background hover:text-fontPrimary hover:shadow">
            <img className="size-28" src={image} alt="" />
            <h2 className="text-md font-bold">{title}</h2>
            <p className="text-fontSecondary text-center">{description}</p>
            <button className="text-sm text-primary underline cursor-pointer">Get Started Now</button>
        </div>
    )
}
export default ServicesCard