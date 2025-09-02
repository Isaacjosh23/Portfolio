import { motion } from "framer-motion";
import { forwardRef } from "react";

const Container = forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <motion.div ref={ref} className={`container ${className}`} {...props}>
      {children}
    </motion.div>
  );
});

export default Container;
