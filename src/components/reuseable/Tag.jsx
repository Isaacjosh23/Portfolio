import { motion } from "framer-motion";
import { ThemeContext } from "../Portfoilo";
import { useContext } from "react";

const Tag = ({ children, className = "", ...props }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.span
      className={`inline-block text-center font-semibold text-[1.2rem] py-2 px-4 rounded-full lg:text-[1.3rem] text-[var(--color-grey-600)] ${className} ${
        theme === "dark" ? "bg-[#374151]" : "bg-[var(--color-grey-200)]"
      }`}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export default Tag;
