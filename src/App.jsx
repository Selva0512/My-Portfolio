import React from "react";
import Home from "./pages/About-Me";
import Header from "./components/Header";
import myvideo from "./asset/3163534-uhd_3840_2160_30fps.mp4";
import EducationTimeline from "./pages/Education";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import ContactForm from "./components/ContactForm";
import Projects from "./pages/Projects";
import Activities from "./pages/Activities";

function App() {
  return (
    <div className="relative h-screen overflow-hidden cursor-auto">
      {/* Background Video (fixed) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-xs"
      >
        <source src={myvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Scrollable Page Content */}
      <div className="relative z-10 overflow-y-auto h-screen scroll-smooth">
        {/* Apply mx-auto + w-[90%] here */}
        <div className="mx-auto w-[80%]">
          <Header />
          <section id="home">
            <Home />
          </section>
          <section id="education">
            <EducationTimeline />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="activities">
            <Activities/>
          </section>
          <section id="contact">
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
