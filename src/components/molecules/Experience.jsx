import Container from "../reuseable/Container";
import Section from "../reuseable/Section";
import Tag from "../reuseable/Tag";

const workExperiences = [
  {
    id: 1,

    img: "../../images/experience-img/chingu.png",

    company: "Chingu",

    companyLink: "https://www.linkedin.com/company/chingu-os/",

    period: "July 2025 - Present",

    role: "Frontend Developer",

    tasks: [
      "Designed the complete UI of the web application",
      "Converted the UI into a live project through codes",
      "Solve bug issues",
      "Testing and deployment",
    ],
  },
];

const Experience = () => {
  return (
    <Section className="py-20 lg:py-32 bg-[var(--color-grey-50)]">
      <Container className="flex flex-col items-center gap-12 md:gap-20 lg:gap-32">
        <div className="flex flex-col gap-4 md:gap-7 items-center text-center">
          <Tag className="font-normal md:text-[1.3rem]">Experience</Tag>

          <p className="text-xl md:text-[1.35rem] text-center">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>

        <ul className="flex flex-col justify-center gap-16 md:grid md:grid-cols-3">
          {workExperiences.map((work) => (
            <ExperienceCard key={work.id} work={work} workTask={work.tasks} />
          ))}
        </ul>
      </Container>
    </Section>
  );
};

const ExperienceCard = ({ work, workTask }) => {
  return (
    <li className="bg-white p-12 rounded-2xl custom-shadow flex flex-col justify-center gap-8 w-[28rem] md:col-span-full md:w-full md:items-center">
      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-32">
        <a
          href={work.companyLink}
          target="_blank"
          className="flex items-center md:justify-start  md:flex-col gap-3 "
        >
          <img src={work.img} alt={work.company} className="w-24" />

          <p className="text-xl font-semibold text-black text-center underline hover:no-underline">
            {work.company}
          </p>
        </a>

        <h3 className="text-2xl text-black font-semibold md:hidden">
          {work.role}
        </h3>

        <div className="hidden md:flex md:flex-col gap-8">
          <h3 className="text-2xl text-black font-semibold">{work.role}</h3>

          <ul className="flex flex-col justify-center gap-3 list-disc">
            {workTask.map((task) => (
              <ExperienceTask task={task} />
            ))}
          </ul>
        </div>

        <p className="text-[1.2rem]">{work.period}</p>
      </div>

      <ul className="flex flex-col justify-center gap-3 list-disc md:hidden">
        {workTask.map((task) => (
          <ExperienceTask task={task} />
        ))}
      </ul>
    </li>
  );
};

const ExperienceTask = ({ task }) => {
  return <li className="text-[1.2rem]">{task}</li>;
};

export default Experience;
