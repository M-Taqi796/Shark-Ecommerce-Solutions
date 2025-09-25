import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./routes/home"
import About from "./routes/about"
import Services from "./routes/services"
import Contact from "./routes/contact"
import CaseStudy from "./routes/caseStudy"
import NavBar from "./components/NavBar/navBar.component"
import Footer from "./components/Footer/Footer.component"

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-study" element={<CaseStudy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App