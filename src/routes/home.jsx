import Blog from "../components/Blog/blog.component"
import ContactCard from "../components/ContactCard/ContactCard.component"
import Features from "../components/Features/features.component"
import Founder from "../components/Founder/founder.component"
import Header from "../components/Header/header.component"
import MeetingCard from "../components/MeetingCard/meetingCard.component"
import Services from "../components/Services/services.component"

const Home =() => {
    return (
        <section>
            <Header />
            <Features />
            <Founder />
            <Blog />
            <Services />
            <MeetingCard />
            <ContactCard />
        </section>
    )
}
export default Home