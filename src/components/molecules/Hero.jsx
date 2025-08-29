import Container from "../reuseable/Container";
import Button from "../reuseable/Button.jsx";

const Hero = () => {
  return (
    <section className="py-20 ">
      <Container className="flex flex-col justify-center  items-center gap-11 md:gap-16 md:grid md:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-4xl font-bold text-[var(--color-solid)] text-center leading-[3.5rem] md:text-start md:leading-[4rem] md:text-5xl">
              Hi 👋, <br className="hidden md:block" /> My name is
              <br className="hidden md:block" />
              <span className="gradient"> Pavan MG</span>
              <br /> I build things for web.
            </h1>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6">
            <Button className="text-[1.3rem] cus-shadow bg-black text-white hover-shadow">
              Contact
            </Button>

            <Button className="text-[1.3rem] cus-shadow text-black hover-shadow">
              Projects
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="../../images/joshua.png"
            alt="Photo of Joshua"
            className="w-96 md:w-[28rem]"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
