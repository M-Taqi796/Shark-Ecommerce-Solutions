import CaseStudyHeader from "../components/caseStudyHeader/caseStudyHeader.component"
import CaseStudyList from "../components/CaseStudyList/caseStudyList.component"
import MeetingCard from "../components/MeetingCard/meetingCard.component"

const CaseStudy =() => {
    return (
        <section>
            <CaseStudyHeader/>
            <CaseStudyList />
            <MeetingCard/>
        </section>
    )
}
export default CaseStudy