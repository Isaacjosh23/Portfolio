import Main from "./molecules/Main.jsx";
import Header from "../components/molecules/Header.jsx";
import Hero from "../components/molecules/Hero.jsx";
import TechStack from "./molecules/Tech-Stack.jsx";
import Projects from "./molecules/Project.jsx";
import Footer from "./molecules/Footer.jsx";
import About from "./molecules/About.jsx";
import GetInTouch from "./molecules/GetInTouch.jsx";
import Experience from "./molecules/Experience.jsx";

const Portfoilo = () => {
  return (
    <>
      <Header />

      <Main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Tech Stack Section */}
        <TechStack />

        {/* Experience Section */}
        <Experience />

        {/* Project Section */}
        <Projects />

        {/* Get In Touch */}
        <GetInTouch />

        {/* Footer Section */}
        <Footer />
      </Main>
    </>
  );
};

export default Portfoilo;
