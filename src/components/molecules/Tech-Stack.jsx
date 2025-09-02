import { useEffect, useRef } from "react";
import Container from "../reuseable/Container";
import Section from "../reuseable/Section";
import Tag from "../reuseable/Tag";
import { motion, useAnimationControls, useInView } from "framer-motion";
import useResponsiveAmount from "../hooks/useResponsiveAmount";

const slideRightVariant = {
  init: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },

  out: {
    opacity: 0,
    x: 100,
    transition: { duration: 0.4, ease: "easeIn", staggerChildren: 0.15 },
  },
};

const skills = [
  {
    type: "HTML",
    img: "../../images/tech-stack/html.svg",
  },
  {
    type: "CSS",
    img: "../../images/tech-stack/css.svg",
  },
  {
    type: "JavaScript",
    img: "../../images/tech-stack/js.svg",
  },
  {
    type: "React",
    img: "../../images/tech-stack/react.svg",
  },
  {
    type: "Tailwind",
    img: "../../images/tech-stack/tailwind.svg",
  },
  {
    type: "Git",
    img: "../../images/tech-stack/git-icon.svg",
  },
  {
    type: "Vscode",
    img: "../../images/tech-stack/vscode.svg",
  },
  {
    type: "GitHub",
    img: "../../images/tech-stack/github.svg",
  },
];

const TechStack = () => {
  const ref = useRef(null);
  const amount = useResponsiveAmount();
  const inView = useInView(ref, { amount });
  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("out");
  }, [inView, controls]);

  return (
    <Section
      ref={ref}
      initial="init"
      animate={controls}
      variants={slideRightVariant}
      className="py-20"
    >
      <Container
        variants={slideRightVariant}
        className="flex flex-col gap-12 md:gap-20 lg:gap-32"
      >
        <motion.div
          variants={slideRightVariant}
          className="flex flex-col items-center gap-4 md:gap-7 text-center"
        >
          <Tag as={motion.div} variants={slideRightVariant}>
            Tech Stack
          </Tag>
          <motion.p
            variants={slideRightVariant}
            className="text-xl md:text-[1.35rem] text-center"
          >
            Technologies I’ve been working with recently
          </motion.p>
        </motion.div>

        {/* Stack Images */}

        <motion.ul
          variants={slideRightVariant}
          className="grid grid-cols-4 gap-y-8 md:gap-y-16 items-center justify-center"
        >
          {skills.map((skill) => (
            <Stack skill={skill} key={skill.type} />
          ))}
        </motion.ul>
      </Container>
    </Section>
  );
};

const Stack = ({ skill }) => {
  return (
    <motion.li
      variants={slideRightVariant}
      className="flex items-center justify-center"
    >
      <img src={skill.img} alt={skill.type} className="w-16 md:w-24" />
    </motion.li>
  );
};

export default TechStack;
