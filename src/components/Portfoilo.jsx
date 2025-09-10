import Main from "./molecules/Main.jsx";
import Header from "../components/molecules/Header.jsx";
import Hero from "../components/molecules/Hero.jsx";
import TechStack from "./molecules/Tech-Stack.jsx";
import Projects from "./molecules/Project.jsx";
import Footer from "./molecules/Footer.jsx";
import About from "./molecules/About.jsx";
import GetInTouch from "./molecules/GetInTouch.jsx";
import Experience from "./molecules/Experience.jsx";
import { useRef } from "react";

const Portfoilo = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const heroRef = useRef(null);

  const scrollToSection = (ref, offset = 0) => {
    if (ref.current) {
      const y =
        ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <Header
        onHeroClick={() => scrollToSection(heroRef, 128)}
        onAboutClick={() => scrollToSection(aboutRef, 100)}
        onExperienceClick={() => scrollToSection(experienceRef, 100)}
        onProjectClick={() => scrollToSection(projectRef, 100)}
        onContactClick={() => scrollToSection(contactRef, 100)}
      />

      <Main>
        {/* Hero Section */}
        <Hero
          onProjectClick={() => scrollToSection(projectRef, 100)}
          onContactClick={() => scrollToSection(contactRef, 100)}
          ref={heroRef}
        />

        {/* About Section */}
        <About ref={aboutRef} />

        {/* Tech Stack Section */}
        <TechStack />

        {/* Experience Section */}
        <Experience ref={experienceRef} />

        {/* Project Section */}
        <Projects ref={projectRef} />

        {/* Get In Touch */}
        <GetInTouch ref={contactRef} />

        {/* Footer Section */}
        <Footer />
      </Main>
    </>
  );
};

export default Portfoilo;
