const Main = ({ children, className = "", ...props }) => {
  return (
    <main className={`${className} pt-32`} {...props}>
      {children}
    </main>
  );
};

export default Main;
