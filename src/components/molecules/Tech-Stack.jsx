import Container from "../reuseable/Container";

const TechStack = () => {
  return (
    <section className="py-20">
      <Container className="flex flex-col gap-12 md:gap-20 lg:gap-32">
        <div className="flex flex-col gap-4 md:gap-7 text-center">
          <h3 className="text-3xl md:text-4xl font-bold">My Tech Stack</h3>
          <p className="font-normal md:text-[1.3rem]">
            Technologies I’ve been working with recently
          </p>
        </div>

        {/* Stack Images */}
        <div>
          <ul className="grid grid-cols-4 gap-y-8 md:gap-y-16 items-center justify-center">
            <li className="flex items-center justify-center">
              <img
                src="../../images/tech-stack/html.svg"
                alt="skill logo"
                className="w-16 md:w-24"
              />
            </li>

            <li className="flex items-center justify-center">
              <img
                src="../../images/tech-stack/css.svg"
                alt="skill logo"
                className="w-16 md:w-24"
              />
            </li>

            <li className="flex items-center justify-center">
              <img
                src="../../images/tech-stack/js.svg"
                alt="skill logo"
                className="w-16 md:w-24"
              />
            </li>

            <li className="flex items-center justify-center">
              <img
                src="../../images/tech-stack/react.svg"
                alt="skill logo"
                className="w-16 md:w-24"
              />
            </li>

            <li className="flex items-center justify-center">
              <img
                src="../../images/tech-stack/tailwind.svg"
                alt="skill logo"
                className="w-16 md:w-24"
              />
            </li>

            <li className="flex items-center justify-center">
              <img
                src="../../images/tech-stack/git-icon.svg"
                alt="skill logo"
                className="w-16 md:w-24"
              />
            </li>

            <li className="flex items-center justify-center">
              <img
                src="../../images/tech-stack/vscode.svg"
                alt="skill logo"
                className="w-16 md:w-24"
              />
            </li>

            <li className="flex items-center justify-center">
              <img
                src="../../images/tech-stack/github.svg"
                alt="skill logo"
                className="w-16 md:w-24"
              />
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default TechStack;
