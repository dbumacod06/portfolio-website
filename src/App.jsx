import MainMenu from "./components/main-menu/MainMenu"
import Hero from "./components/hero-section/Hero"
import SectionHeading from "./components/section-heading/main-heading/SectionHeading"
import Experiences from "./components/experience-section/Experiences"
// import SubSectionHeading from "./components/section-heading/sub-heading/SectionHeading"
import TechnicalSkills from "./components/skills-section/TechnicalSkills"
import Testimonials from "./components/testimonials-section/Testimonials"
import "./App.css"

function App() {
  return (
    <>
      <div className="main-menu">
        <MainMenu />
      </div>
      <div className="container">
        <Hero />
        <SectionHeading headingText="Professional Experience"/>
        <Experiences />
        <SectionHeading headingText="Technical Skills"/>
        <TechnicalSkills /> 
        <SectionHeading headingText="Colleagues' Corner"/>
        <Testimonials />
      </div>
    </>
  )
}

export default App
