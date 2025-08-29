const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`font-bold cursor-pointer rounded-2xl cta-btn ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
