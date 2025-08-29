import Main from "./molecules/Main.jsx";
import Header from "../components/molecules/Header.jsx";
import Hero from "../components/molecules/Hero.jsx";
import TechStack from "./molecules/Tech-Stack.jsx";
import Projects from "./molecules/Project.jsx";
import Footer from "./molecules/Footer.jsx";

const Portfoilo = () => {
  return (
    <>
      <Header />

      <Main>
        {/* Hero Section */}
        <Hero />

        {/* Tech Stack Section */}
        <TechStack />

        {/* Project Section */}
        <Projects />

        {/* Footer Section */}
        <Footer />
      </Main>
    </>
  );
};

export default Portfoilo;
