import Container from "../reuseable/Container";
import Section from "../reuseable/Section";
import Tag from "../reuseable/Tag";

const projectObject = [
  {
    id: 1,

    image: "../../images/project-img/portfolio.png",

    Title: "Portfolio",

    Description:
      "This appears to be a personal developer/branding page for Joshua—a portfolio or branding site to showcase who you are and why brands might need you.",

    Stack: "React, TailwindCSS, CSS, Vite",

    Weblink: "https://portjosh.netlify.app/",

    GitHubLink: "https://github.com/Isaacjosh23/Portfolio.git",
  },

  {
    id: 2,

    image: "../../images/project-img/omnifood.png",

    Title: "Omnifood",

    Description:
      "A daily healthy meal subscription service powered by AI—personalized meal plans delivered to your door, tailored to your taste and diet preferences.",

    Stack: "HTML, JavaScript, CSS, TailwindCSS",

    Weblink: "https://ominfood-nevercookagain.netlify.app/",

    GitHubLink: "https://github.com/Isaacjosh23/Ominfood.git",
  },

  {
    id: 3,

    image: "../../images/project-img/igeekmart.png",

    Title: "iGeekMart",

    Description:
      "This is a custom merchandise service that curates, designs, and ships branded merch—perfect for events, employees, or fans based on choice.",

    Stack: "HTML, JavaScript, CSS, TailwindCSS",

    Weblink: "https://igeekmart.netlify.app/",

    GitHubLink: "https://github.com/Isaacjosh23/iGeekMart.git",
  },

  {
    id: 4,

    image: "../../images/project-img/african-touch.png",

    Title: "African Touch",

    Description:
      "An authentic African fashion brand blending heritage craftsmanship with modern style—each artisanal piece tells a story.",

    Stack: "HTML, JavaScript, CSS, TailwindCSS",

    Weblink: "https://africantouch.netlify.app/",

    GitHubLink: "https://github.com/Isaacjosh23/AfricanTouch.git",
  },

  {
    id: 5,

    image: "../../images/project-img/mortgage.jpg",

    Title: "Mortgage Repayment App",

    Description:
      "This is a mortgage or loan repayment calculator tool—helps estimate monthly payments based on loan details.",

    Stack: "React, TailwindCSS, CSS, Vite",

    Weblink: "https://mortpay.netlify.app/",

    GitHubLink: "https://github.com/Isaacjosh23/Mortgage-Repayment.git",
  },

  {
    id: 6,

    image: "../../images/project-img/tip-calculator.jpg",

    Title: "Tip Calculator",

    Description:
      "This is a simple calculator to compute the tip and split the bill—ideal for dining with friends or group payments.",

    Stack: "React, TailwindCSS, CSS, Vite",

    Weblink: "https://calctipfm.netlify.app/",

    GitHubLink: "https://github.com/Isaacjosh23/Tip-Calc-FrontendMentor.git",
  },

  {
    id: 7,

    image: "../../images/project-img/price-component.jpg",

    Title: "Price Component",

    Description:
      "Possibly a pricing card or comparison UI component—displaying service tiers or product plans in card layouts.",

    Stack: "React, TailwindCSS, CSS, Vite",

    Weblink: "https://pricecom.netlify.app/",

    GitHubLink: "https://github.com/Isaacjosh23/Price-Component.git",
  },

  {
    id: 8,

    image: "../../images/project-img/faq.jpg",

    Title: "FAQ Accordion",

    Description:
      "A frequently-asked-questions section with expandable accordion functionality for neat, compact content display.",

    Stack: "React, TailwindCSS, CSS, Vite",

    Weblink: "https://faqac.netlify.app/",

    GitHubLink: "https://github.com/Isaacjosh23/Faq-challenge.git",
  },

  {
    id: 9,

    image: "../../images/project-img/preview-card.jpg",

    Title: "Product Card",

    Description:
      "This is a product listing or preview card layout—showcasing items with images, titles, and quick details for buyers.",

    Stack: "React, TailwindCSS, CSS, Vite",

    Weblink: "https://previewcar.netlify.app/",

    GitHubLink: "https://github.com/Isaacjosh23/Product-Preview-Card.git",
  },
];

const Projects = () => {
  return (
    <Section className="py-20 lg:py-32">
      <Container className="flex flex-col gap-12 md:gap-20 lg:gap-32">
        <div className="flex flex-col gap-4 md:gap-7 items-center text-center">
          <Tag>Projects</Tag>
          <p className="text-xl md:text-[1.35rem] text-center">
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
    </Section>
  );
};

const Project = ({ project }) => {
  return (
    <li className="rounded-2xl bg-white custom-shadow w-[28rem] md:justify-self-center">
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
