import { motion } from "framer-motion";

const Tag = ({ children, className = "", ...props }) => {
  return (
    <motion.span
      className={`inline-block text-center font-semibold text-[1.2rem] py-2 px-4 rounded-full bg-[var(--color-grey-200)] lg:text-[1.3rem] text-[var(--color-grey-600)] ${className}`}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export default Tag;
