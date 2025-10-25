import Counter from "../Counter/counter.component"
import { useNavigate } from "react-router-dom"
const Blog = () => {
    const navigate = useNavigate();
    return (
        <section className="flex items-center px-20 py-12 bg-primary mb-20 gap-6">
            <article>
                <h2 className="text-lg font-bold mb-6">Your Trusted Amazon Marketing Partner</h2>
                <p className="text-sm mb-6">At Shark Ecommerce & Solutions, we specialize in Amazon PPC and listing management to maximize your sales potential and streamline your account management for success.</p>
                <div className="flex gap-10 items-center mb-6">
                    <div>
                        <Counter targetNumber={200} string="K+" size="text-lg" color="text-fontPrimary"/>
                        <p className="text-md">Monthly Profit</p>
                    </div>
                    <div>
                        <Counter targetNumber={1500} string="K+" size="text-lg" color="text-fontPrimary"/>
                        <p className="text-md">Daily Sales</p>
                    </div>
                </div>
                <button className="text-fontWhite w-96 py-3 bg-backgroundSecondary shadow-[4px_4px_0px_0px] shadow-background hover:shadow-[0px_0px_0px_0px]" onClick={() => navigate("/audit")}>Get a <span className="font-bold">Free</span> Audit Report</button>
            </article>
            <img className="rounded-4xl hover:scale-105 transition-transform duration-300" src="BlogImg.webp" alt="" />
        </section>
    )
}

export default Blog