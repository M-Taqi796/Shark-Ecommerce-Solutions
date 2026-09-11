const ServicesCard = ({ image, title, description, onClick, centered = false, className = "" }) => {
    if (centered) {
        return (
            <div className={`w-full justify-center bg-background shadow text-fontWhite px-4 py-8 rounded-2xl flex flex-col items-center gap-4 hover:bg-primary hover:scale-105 transition-transform duration-300 group cursor-pointer ${className}`} onClick={onClick}>
                <img className="size-28 shrink-0 object-contain" src={image} alt="" />
                <h2 className="text-md text-center font-bold text-secondary group-hover:text-fontWhite">{title}</h2>
                <p className="text-fontSecondary text-sm text-center group-hover:text-fontWhite">{description}</p>
                <button className="text-sm text-secondary underline cursor-pointer group-hover:text-fontWhite" onClick={onClick}>Get Started Now</button>
            </div>
        )
    }

    return (
        <div className={`w-full h-full bg-background shadow text-fontWhite px-4 py-8 rounded-2xl flex flex-col items-center gap-4 hover:bg-primary hover:scale-105 transition-transform duration-300 group cursor-pointer ${className}`} onClick={onClick}>
            <img className="size-28 shrink-0 object-contain" src={image} alt="" />
            <h2 className="text-md text-center font-bold text-secondary group-hover:text-fontWhite min-h-[4rem] flex items-center justify-center">{title}</h2>
            <p className="text-fontSecondary text-sm text-center group-hover:text-fontWhite flex-1">{description}</p>
            <button className="text-sm text-secondary underline cursor-pointer group-hover:text-fontWhite mt-auto" onClick={onClick}>Get Started Now</button>
        </div>
    )
}
export default ServicesCard