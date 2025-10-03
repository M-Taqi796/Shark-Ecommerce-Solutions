import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./routes/home"
import About from "./routes/about"
import Services from "./routes/services"
import Contact from "./routes/contact"
import CaseStudy from "./routes/caseStudy"
import NavBar from "./components/NavBar/navBar.component"
import Footer from "./components/Footer/footer.component"
import LoadingBar from "./components/LoadingBar/loadingBar.component"
import Audit from "./routes/audit"
import Meeting from "./routes/meeting"

function App() {
  return (
    <>
      <Router>
        <LoadingBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/meeting" element={<Meeting />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App