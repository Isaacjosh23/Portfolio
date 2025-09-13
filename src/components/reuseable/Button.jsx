const Button = ({ children, className, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`font-bold cursor-pointer rounded-2xl cta-btn ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
