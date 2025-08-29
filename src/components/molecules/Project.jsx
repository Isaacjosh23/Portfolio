import Container from "../reuseable/Container";

const projectObject = [
  {
    id: 1,

    image: "../../images/project-img/mortgage.jpg",

    Title: "Mortgage Repayment App",

    Description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",

    Stack: "HTML, JavaScript, SASS, React",

    Weblink: "https://mortpay.netlify.app/",

    GitHubLink: "https://github.com/Isaacjosh23/Mortgage-Repayment.git",
  },

  {
    id: 2,

    image: "../../images/project-img/mortgage.jpg",

    Title: "Mortgage Repayment App",

    Description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",

    Stack: "HTML, JavaScript, SASS, React",

    Weblink: "https://mortpay.netlify.app/",

    GitHubLink: "https://github.com/Isaacjosh23/Mortgage-Repayment.git",
  },

  {
    id: 3,

    image: "../../images/project-img/mortgage.jpg",

    Title: "Mortgage Repayment App",

    Description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",

    Stack: "HTML, JavaScript, SASS, React",

    Weblink: "https://mortpay.netlify.app/",

    GitHubLink: "https://github.com/Isaacjosh23/Mortgage-Repayment.git",
  },

  {
    id: 4,

    image: "../../images/project-img/mortgage.jpg",

    Title: "Mortgage Repayment App",

    Description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",

    Stack: "HTML, JavaScript, SASS, React",

    Weblink: "https://mortpay.netlify.app/",

    GitHubLink: "https://github.com/Isaacjosh23/Mortgage-Repayment.git",
  },

  {
    id: 5,

    image: "../../images/project-img/mortgage.jpg",

    Title: "Mortgage Repayment App",

    Description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",

    Stack: "HTML, JavaScript, SASS, React",

    Weblink: "https://mortpay.netlify.app/",

    GitHubLink: "https://github.com/Isaacjosh23/Mortgage-Repayment.git",
  },

  {
    id: 6,

    image: "../../images/project-img/mortgage.jpg",

    Title: "Mortgage Repayment App",

    Description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",

    Stack: "HTML, JavaScript, SASS, React",

    Weblink: "https://mortpay.netlify.app/",

    GitHubLink: "https://github.com/Isaacjosh23/Mortgage-Repayment.git",
  },
];

const Projects = () => {
  return (
    <section className="py-20">
      <Container className="flex flex-col gap-12 md:gap-20 lg:gap-32">
        <div className="flex flex-col gap-4 md:gap-7 text-center">
          <h3 className="text-3xl md:text-4xl font-bold">Projects</h3>
          <p className="font-normal md:text-[1.3rem]">
            Things I’ve built so far
          </p>
        </div>

        <div>
          <ul className="flex flex-col justify-center items-center gap-24 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-0 md:gap-y-16">
            {projectObject.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

const Project = ({ project }) => {
  return (
    <li className="rounded-2xl project-card w-[28rem] md:justify-self-center">
      <div className="rounded-t-2xl overflow-hidden">
        <img
          src={project.image}
          alt={project.Title}
          className="inline-block min-w-full"
        />
      </div>

      <div className="flex flex-col gap-6 p-9">
        <div className="flex flex-col gap-3">
          <h3 className="font-medium text-2xl lg:text-[1.6rem] text-black">
            {project.Title}
          </h3>

          <p className="text-[1.2rem] lg:text-[1.3rem]">
            {project.Description}
          </p>
        </div>

        <p className="text-[1.2rem] lg:text-[1.3rem]">
          <span className="font-medium">Tech Stack:</span> {project.Stack}
        </p>

        <div className="flex items-center justify-between">
          <a
            href={project.Weblink}
            target="_blank"
            className="underline hover:no-underline active:no-underline smooth-trans text-black text-[1.2rem] lg:text-[1.3rem] flex items-center gap-5"
          >
            <span>
              <img
                src="../../images/project-img/live-project-icon.png"
                alt="link icon"
                className="w-8"
              />
            </span>

            <span>Live Preview</span>
          </a>

          <a
            href={project.GitHubLink}
            target="_blank"
            className="underline hover:no-underline active:no-underline smooth-trans text-black text-[1.2rem] lg:text-[1.3rem] flex items-center gap-5"
          >
            <span>
              <img
                src="../../images/project-img/github-icon-project.png"
                alt="github icon"
                className="w-8"
              />
            </span>

            <span>View Code</span>
          </a>
        </div>
      </div>
    </li>
  );
};

export default Projects;
