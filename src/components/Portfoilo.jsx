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
  const stackRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        onAboutClick={() => scrollToSection(aboutRef)}
        onStackClick={() => scrollToSection(stackRef)}
        onProjectClick={() => scrollToSection(projectRef)}
      />

      <Main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About ref={aboutRef} />

        {/* Tech Stack Section */}
        <TechStack ref={stackRef} />

        {/* Experience Section */}
        <Experience />

        {/* Project Section */}
        <Projects ref={projectRef} />

        {/* Get In Touch */}
        <GetInTouch />

        {/* Footer Section */}
        <Footer />
      </Main>
    </>
  );
};

export default Portfoilo;
