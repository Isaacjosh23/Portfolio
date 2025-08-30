import Container from "../reuseable/Container";
import Section from "../reuseable/Section";
import Tag from "../reuseable/Tag";

const About = () => {
  return (
    <Section className="bg-[var(--color-grey-50)] py-20 lg:py-32">
      <Container className="flex flex-col items-center gap-6 md:gap-12">
        <Tag>About me</Tag>
        <div className="flex flex-col justify-center gap-16 md:grid md:grid-cols-2">
          <div className="flex justify-center md:items-center">
            <img
              src="../../images/joshua-about.jpg"
              alt="photo of josh"
              className="w-80 md:w-[26rem]"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl">
              Curious about me? Here you have it:
            </h3>

            <p className="flex flex-col justify-center gap-4 text-xl lg:text-[1.35rem] text-[var(--color-solid)]">
              <span className="inline-block">
                I'm an enthusiastic, self-described designer with a focus on
                front-end development. Bringing the technical and aesthetic
                elements of digital things to life excites me greatly. I care
                about developing readable, clean, and incredibly performant
                code, as well as user experience and pixel-perfect design.
              </span>

              <span className="inline-block">
                I started my career as a web developer in 2023, and ever since
                then, I've developed further, taking on new tasks and picking up
                the newest technology. Two years after I began my web
                development career, I am now in my early twenties and creating
                state-of-the-art web applications with the help of contemporary
                technologies like React, JavaScript, HTML, Tailwindcss, Git, and
                more.
              </span>

              <span className="inline-block">
                I am a very forward-thinking person who likes to work on
                projects from conception to completion.
              </span>

              <span className="inline-block">
                I like to work on items from conception to development because I
                am a very progressive thinker.
              </span>

              <span className="inline-block">
                I enjoy playing guitar, playing video games with friends, and
                watching movies when I'm not in full-on developer mode. You may
                follow me on{" "}
                <a
                  href="https://github.com/Isaacjosh23"
                  target="_blank"
                  className="underline hover:no-underline"
                >
                  GitHub
                </a>{" "}
                or on{" "}
                <a
                  href="https://x.com/codes_from_josh?t=0p-3oxHXbpKMiF47B1XEIg&s=09"
                  target="_blank"
                  className="underline hover:no-underline"
                >
                  Twitter
                </a>
                , or on{" "}
                <a
                  href="https://www.linkedin.com/in/joshua-ebhamen-4904aa344/"
                  target="_blank"
                  className="underline hover:no-underline"
                >
                  LinkedIn
                </a>{" "}
                where I publicly display my work and builds.
              </span>

              <span className="inline-block">
                Last but not least, please feel free to contact me and say
                hello; I'm available for freelance work! I swear not to bite 😉.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
