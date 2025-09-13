// import { motion } from "framer-motion";
import { forwardRef } from "react";

const Section = forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <section ref={ref} className={`${className} `} {...props}>
      {children}
    </section>
  );
});

export default Section;
