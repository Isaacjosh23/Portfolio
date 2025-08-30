import Container from "../reuseable/Container";
import Section from "../reuseable/Section";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section className="py-4">
      <Container>
        <p className="mt-6 font-medium text-[1rem] lg:text-xl text-center">
          &copy; {currentYear} | Designed and coded by{" "}
          <a
            href="https://www.linkedin.com/in/joshua-ebhamen-4904aa344/"
            target="_blank"
            className="underline hover:no-underline"
          >
            Ebhamen Joshua
          </a>{" "}
          .
        </p>
      </Container>
    </Section>
  );
};

export default Footer;
