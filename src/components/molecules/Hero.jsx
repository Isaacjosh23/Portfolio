import { motion } from "framer-motion";
import Section from "../reuseable/Section.jsx";
import Container from "../reuseable/Container";
import Button from "../reuseable/Button.jsx";
import { forwardRef, useContext } from "react";
import { ThemeContext } from "../Portfoilo.jsx";

const containerVarients = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      staggerChildren: 0.2,
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const childVarients = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Hero = forwardRef(({ onContactClick, onProjectClick }, externalRef) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Section
      ref={(el) => {
        if (externalRef) externalRef.current = el;
      }}
      className={`py-20 ${theme === "dark" ? "bg-[#030712]" : ""}`}
    >
      <Container
        variants={containerVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col justify-center  items-center gap-11 md:gap-16 md:grid md:grid-cols-2"
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <motion.h1
              variants={childVarients}
              className={`text-4xl font-bold  ${
                theme === "dark"
                  ? "text-[#D9D9D9]"
                  : "text-[var(--color-solid)]"
              } text-center leading-[3.5rem] md:text-start md:leading-[4rem] md:text-5xl`}
            >
              Hi 👋, <br className="hidden md:block" /> My name is
              <br className="hidden md:block" />
              <span className="gradient"> Ebhamen Joshua</span>
            </motion.h1>

            <motion.p
              variants={childVarients}
              className={`text-center text-xl lg:text-[1.4rem] md:text-start leading-[2rem] md:leading-[2.4rem] ${
                theme === "dark" ? "text-white" : "text-[var(--color-solid)]"
              }`}
            >
              As a frontend developer, I specialize on producing outstanding
              digital experiences that are responsive, quick, easy to use, and
              aesthetically pleasing. I still adore web applications as though
              they were brand-new, despite the fact that I have been making them
              for more than two years.
            </motion.p>

            <motion.div
              variants={childVarients}
              className="flex items-center justify-center md:justify-start gap-4"
            >
              <p
                className={`flex items-center gap-2 font-medium lg:text-xl ${
                  theme === "dark"
                    ? "text-gray-300"
                    : "text-[var(--color-solid)]"
                }`}
              >
                <ion-icon
                  name="location-outline"
                  className="w-6 h-6"
                ></ion-icon>

                <span>Lagos, Nigeria</span>
              </p>

              <p
                className={`flex items-center gap-2 font-medium lg:text-xl ${
                  theme === "dark"
                    ? "text-gray-300"
                    : "text-[var(--color-solid)]"
                }`}
              >
                <ion-icon
                  name="ellipse"
                  className="w-6 h-6 text-green-600!"
                ></ion-icon>
                <span>Available for new projects</span>
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-12">
            <motion.div
              variants={childVarients}
              className="flex items-center justify-center md:justify-start gap-6"
            >
              <Button
                onClick={onContactClick}
                className={`text-[1.3rem] custom-shadow   hover-shadow ${
                  theme === "dark"
                    ? "bg-[#F9FAFB] text-[#111827]!"
                    : "bg-black text-white"
                }`}
              >
                Contact
              </Button>

              <Button
                onClick={onProjectClick}
                className={`text-[1.3rem] custom-shadow hover-shadow ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Projects
              </Button>
            </motion.div>

            <motion.ul variants={childVarients} className="flex items-center">
              {/* Github */}
              <li>
                <a
                  href="https://github.com/Isaacjosh23"
                  target="_blank"
                  className={`hover:text-black smooth-trans p-2.5 ${
                    theme === "dark"
                      ? "text-[#F9FAFB]! hover:text-white!"
                      : "text-[var(--color-grey)]"
                  }`}
                >
                  <ion-icon
                    name="logo-github"
                    className="lg:w-[2.8rem] lg:h-[2.8rem] w-[2.5rem] h-[2.5rem]"
                  ></ion-icon>
                </a>
              </li>

              {/* Twitter */}
              <li>
                <a
                  href="https://x.com/codes_from_josh?t=0p-3oxHXbpKMiF47B1XEIg&s=09"
                  target="_blank"
                  className={`hover:text-black smooth-trans p-2.5 ${
                    theme === "dark"
                      ? "text-[#F9FAFB]! hover:text-white!"
                      : "text-[var(--color-grey)]"
                  }`}
                >
                  <ion-icon
                    name="logo-twitter"
                    className="lg:w-[2.8rem] lg:h-[2.8rem] w-[2.5rem] h-[2.5rem]"
                  ></ion-icon>
                </a>
              </li>

              {/* Linkedin */}
              <li>
                <a
                  href="https://www.linkedin.com/in/joshua-ebhamen-4904aa344/"
                  target="_blank"
                  className={`hover:text-black smooth-trans p-2.5 ${
                    theme === "dark"
                      ? "text-[#F9FAFB]! hover:text-white!"
                      : "text-[var(--color-grey)]"
                  }`}
                >
                  <ion-icon
                    name="logo-linkedin"
                    className="lg:w-[2.8rem] lg:h-[2.8rem] w-[2.5rem] h-[2.5rem]"
                  ></ion-icon>
                </a>
              </li>
            </motion.ul>
          </div>
        </div>

        <div className="h-[25rem] w-[25rem] md:h-[30rem] md:w-[30rem] rounded-full img-gradient relative overflow-hidden justify-self-center">
          <img
            src="../../images/joshua-hero.jpg"
            alt="Photo of Joshua"
            className="w-96 md:w-[28rem] absolute hero-img grayscale-100 rounded-full top-[-46%] left-[50%] md:top-[-43%]"
            loading="lazy"
          />
        </div>
      </Container>
    </Section>
  );
});

export default Hero;
