const Main = ({ children, className = "", ...props }) => {
  return (
    <main className={`${className}`} {...props}>
      {children}
    </main>
  );
};

export default Main;
