import CaseStudyCard from "./core/caseStudyCard.component"
import { useNavigate } from "react-router-dom"
const CaseStudyList = () => {
    const navigate = useNavigate();
    return (
        <section className="mb-20 mx-52 max-[88rem]:mx-32 max-xl:mx-20 max-sm:mx-8 ">
            <CaseStudyCard 
            heading="Amazon PPC Optimization - Driving 60% Increase in Sales with 40% Lower ACOS" 
            description="Through advanced Amazon PPC optimization strategies, we helped increase product visibility, improve click-through rates, and achieve a 60% boost in sales while reducing Advertising Cost of Sales ACOS by 40%."
            oneNum={"60%"}
            oneTitle={"Increase in Sales"}
            twoNum={"40%"}
            twoTitle={"ACOS Reduced"}
            image={"cs_1_1.png"}
            color={"primary"}
            onClick={() => navigate('/case-study/csleyo01')}
            />
            <CaseStudyCard 
            heading="Achieving Lifetime Sales Growth with ACoS Reduced Below 20%" 
            description="This case study demonstrates how strategic optimization led to continuous lifetime sales growth while successfully maintaining ACoS below 20%, ensuring long-term profitability and sustainable performance"
            oneNum={"80%"}
            oneTitle={"Increase in Sales"}
            twoNum={"20%"}
            twoTitle={"ACOS Reduced"}
            image={"cs_2_1.png"}
            color={"primary"}
            direction={"reverse"}
            onClick={() => navigate('/case-study/csleyo02')}
            />
            <CaseStudyCard 
            heading="Boosting Sales Through Strategic Amazon Listing Optimization" 
            description="This case study highlights how optimized product listings significantly improved visibility, conversion rates, and overall sales performance without increasing advertising costs"
            oneNum={"50%"}
            oneTitle={"Increase in Sales in just one Month"}
            image={"cs_3_1.png"}
            color={"primary"}
            onClick={() => navigate('/case-study/csleyo03')}
            />
            <CaseStudyCard 
            heading="Enhancing Brand Visibility with Advanced Amazon Graphic Design Solution" 
            description="This case study showcases how high-quality listing images, A+ content, and storefront graphics significantly increased customer engagement, improved conversion rates, and boosted overall sales performance."
            oneNum={"45%"}
            oneTitle={"Raise conversion within a month"}
            image={"cs_4_1.png"}
            color={"primary"}
            direction={"reverse"}
            onClick={() => navigate('/case-study/csleyo04')}
            />
        </section>
    )
}
export default CaseStudyList