import { useEffect, useRef } from "react";
import Container from "../reuseable/Container";
import Section from "../reuseable/Section";
import Tag from "../reuseable/Tag";
import useResponsiveAmount from "../hooks/useResponsiveAmount";
import { motion, useAnimationControls, useInView } from "framer-motion";

const slideLeftVariant = {
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

const GetInTouch = () => {
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
      variants={slideLeftVariant}
      className="py-20 lg:py-32 bg-[var(--color-grey-50)]"
    >
      <Container
        variants={slideLeftVariant}
        className="flex flex-col items-center gap-6 md:gap-12"
      >
        <motion.div
          variants={slideLeftVariant}
          className="flex flex-col justify-center items-center gap-6"
        >
          <Tag as={motion.div} variants={slideLeftVariant}>
            Get in touch
          </Tag>

          <motion.p
            variants={slideLeftVariant}
            className="text-xl md:text-[1.35rem] text-center"
          >
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </motion.p>
        </motion.div>

        <motion.div
          variants={slideLeftVariant}
          className="flex flex-col justify-center items-center gap-8"
        >
          <motion.div
            variants={slideLeftVariant}
            className="flex items-center gap-6"
          >
            <a
              href="mailto:ebhamenjoshua@gmail.com"
              className="font-semibold flex text-black items-center gap-3 text-[1.4rem] md:text-[1.8rem] lg:text-[2.2rem] underline hover:no-underline"
            >
              <ion-icon name="mail-outline" className="w-7 h-7"></ion-icon>
              <span>ebhamenjoshua@gmail.com</span>
            </a>
            <ion-icon
              name="copy-outline"
              className="w-7 h-7 cursor-pointer"
            ></ion-icon>
          </motion.div>

          <motion.div variants={slideLeftVariant}>
            <a
              href="https://api.whatsapp.com/send?phone=2348132853469&text=Hi%20Joshua%2C%0A%0AMy%20name%20is%20"
              target="_blank"
              className="font-semibold flex text-black items-center gap-3 text-[1.4rem] md:text-[1.8rem] lg:text-[2.2rem] underline hover:no-underline"
            >
              <ion-icon name="logo-whatsapp" className="w-7 h-7"></ion-icon>
              <span>08132853469</span>
              <ion-icon
                name="copy-outline"
                className="w-7 h-7 cursor-pointer"
              ></ion-icon>
            </a>
          </motion.div>

          <motion.div
            variants={slideLeftVariant}
            className="flex items-center gap-6"
          >
            <a
              href="tel:+234 8140458966"
              className="font-semibold flex text-black items-center gap-3 text-[1.4rem] md:text-[1.8rem] lg:text-[2.2rem] underline hover:no-underline"
            >
              <ion-icon name="call-outline" className="w-7 h-7"></ion-icon>
              <span>+234 8140458966</span>
            </a>
            <ion-icon
              name="copy-outline"
              className="w-7 h-7 cursor-pointer"
            ></ion-icon>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideLeftVariant}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-[1.1rem] md:text-[1.35rem] text-center">
            You can also find me on these platforms!
          </p>

          <ul className="flex items-center">
            {/* Github */}
            <li>
              <a
                href="https://github.com/Isaacjosh23"
                target="_blank"
                className="text-[var(--color-solid)] hover:text-black smooth-trans p-2.5"
              >
                <ion-icon
                  name="logo-github"
                  className="w-[2.5rem] lg:w-[2.8rem] lg:h-[2.8rem] h-[2.5rem]"
                ></ion-icon>
              </a>
            </li>

            {/* Twitter */}
            <li>
              <a
                href="https://x.com/codes_from_josh?t=0p-3oxHXbpKMiF47B1XEIg&s=09"
                target="_blank"
                className="text-[var(--color-solid)] hover:text-black smooth-trans p-2.5"
              >
                <ion-icon
                  name="logo-twitter"
                  className="w-[2.5rem] lg:w-[2.8rem] lg:h-[2.8rem] h-[2.5rem]"
                ></ion-icon>
              </a>
            </li>

            {/* LinkedIn */}
            <li>
              <a
                href="https://www.linkedin.com/in/joshua-ebhamen-4904aa344/"
                target="_blank"
                className="text-[var(--color-solid)] hover:text-black smooth-trans p-2.5"
              >
                <ion-icon
                  name="logo-linkedin"
                  className="w-[2.5rem] lg:w-[2.8rem] lg:h-[2.8rem] h-[2.5rem]"
                ></ion-icon>
              </a>
            </li>
          </ul>
        </motion.div>
      </Container>
    </Section>
  );
};

export default GetInTouch;
