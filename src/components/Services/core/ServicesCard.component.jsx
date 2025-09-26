const ServicesCard = ({ image, title, description }) => {
    return (
        <div className="justify-center bg-background shadow text-fontWhite px-4 py-8 rounded-2xl w-80 flex flex-col items-center gap-4 hover:bg-primary hover:scale-105 transition-transform duration-300 group">
            <img className="size-28" src={image} alt="" />
            <h2 className="text-md text-center font-bold text-secondary group-hover:text-fontWhite">{title}</h2>
            <p className="text-fontSecondary text-sm text-center group-hover:text-fontWhite">{description}</p>
            <button className="text-sm text-secondary underline cursor-pointer group-hover:text-fontWhite">Get Started Now</button>
        </div>
    )
}
export default ServicesCard