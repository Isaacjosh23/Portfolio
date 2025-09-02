import { motion } from "framer-motion";
import { forwardRef } from "react";

const Section = forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <motion.section ref={ref} className={`${className}`} {...props}>
      {children}
    </motion.section>
  );
});

export default Section;
