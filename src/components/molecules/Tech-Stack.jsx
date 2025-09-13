import { forwardRef, useContext, useEffect, useRef } from "react";
import Container from "../reuseable/Container";
import Section from "../reuseable/Section";
import Tag from "../reuseable/Tag";
import { motion, useAnimationControls, useInView } from "framer-motion";
import useResponsiveAmount from "../hooks/useResponsiveAmount";
import { ThemeContext } from "../Portfoilo";

const slideLeftVariant = {
  init: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },

  out: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.4, ease: "easeIn", staggerChildren: 0.15 },
  },
};

const TechStack = () => {
  const internalRef = useRef(null);
  const amount = useResponsiveAmount();
  const inView = useInView(internalRef, { amount });
  const controls = useAnimationControls();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("out");
  }, [inView, controls]);

  return (
    <Section className={`py-20 ${theme === "dark" ? "bg-[#030712]" : ""}`}>
      <Container
        ref={internalRef}
        initial="init"
        animate={controls}
        variants={slideLeftVariant}
        className="flex flex-col gap-12 md:gap-20 lg:gap-32"
      >
        <motion.div
          variants={slideLeftVariant}
          className="flex flex-col items-center gap-4 md:gap-7 text-center"
        >
          <Tag as={motion.div} variants={slideLeftVariant}>
            Tech Stack
          </Tag>
          <motion.p
            variants={slideLeftVariant}
            className="text-xl md:text-[1.35rem] text-center leading-[2rem] md:leading-[2.4rem]"
          >
            Technologies I’ve been working with recently
          </motion.p>
        </motion.div>

        {/* Stack Images */}

        <motion.ul
          variants={slideLeftVariant}
          className="grid grid-cols-4 gap-y-8 md:gap-y-16 items-center justify-center"
        >
          <motion.li
            variants={slideLeftVariant}
            className="flex items-center justify-center"
          >
            <img
              src="../../images/tech-stack/html.svg"
              alt=""
              className="w-16 md:w-24"
            />
          </motion.li>
          <motion.li
            variants={slideLeftVariant}
            className="flex items-center justify-center"
          >
            <img
              src="../../images/tech-stack/css.svg"
              alt=""
              className="w-16 md:w-24"
            />
          </motion.li>
          <motion.li
            variants={slideLeftVariant}
            className="flex items-center justify-center"
          >
            <img
              src="../../images/tech-stack/js.svg"
              alt=""
              className="w-16 md:w-24"
            />
          </motion.li>
          <motion.li
            variants={slideLeftVariant}
            className="flex items-center justify-center"
          >
            <img
              src="../../images/tech-stack/react.svg"
              alt=""
              className="w-16 md:w-24"
            />
          </motion.li>
          <motion.li
            variants={slideLeftVariant}
            className="flex items-center justify-center"
          >
            <img
              src="../../images/tech-stack/tailwind.svg"
              alt=""
              className="w-16 md:w-24"
            />
          </motion.li>
          <motion.li
            variants={slideLeftVariant}
            className="flex items-center justify-center"
          >
            <img
              src="../../images/tech-stack/git-icon.svg"
              alt=""
              className="w-16 md:w-24"
            />
          </motion.li>
          <motion.li
            variants={slideLeftVariant}
            className="flex items-center justify-center"
          >
            <img
              src="../../images/tech-stack/vscode.svg"
              alt=""
              className="w-16 md:w-24"
            />
          </motion.li>
          <motion.li
            variants={slideLeftVariant}
            className="flex items-center justify-center"
          >
            {theme === "dark" ? (
              <img
                src="../../images/tech-stack/github-fill.png"
                alt=""
                className="w-16 md:w-24"
              />
            ) : (
              <img
                src="../../images/tech-stack/github.svg"
                alt=""
                className="w-16 md:w-24"
              />
            )}
          </motion.li>
        </motion.ul>
      </Container>
    </Section>
  );
};

export default TechStack;
