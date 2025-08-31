import Container from "../reuseable/Container";
import Section from "../reuseable/Section";
import Tag from "../reuseable/Tag";

const GetInTouch = () => {
  return (
    <Section className="py-20 lg:py-32 bg-[var(--color-grey-50)]">
      <Container className="flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col justify-center items-center gap-6">
          <Tag>Get in touch</Tag>

          <p className="text-xl md:text-[1.35rem] text-center">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex items-center gap-6">
            <a
              href="mailto:ebhamenjoshua@gmail.com"
              className="font-semibold flex text-black items-center gap-3 text-[1.4rem] md:text-[1.8rem] lg:text-[2.2rem] underline hover:no-underline"
            >
              <ion-icon name="mail-outline" className="w-7 h-7"></ion-icon>
              <span>ebhamenjoshua@gmail.com</span>
            </a>
            <ion-icon
              name="copy-outline"
              className="w-7 h-7 cursor-pointer"
            ></ion-icon>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+91 12345 09876"
              className="font-semibold flex text-black items-center gap-3 text-[1.4rem] md:text-[1.8rem] lg:text-[2.2rem] underline hover:no-underline"
            >
              <ion-icon name="call-outline" className="w-7 h-7"></ion-icon>
              <span>+91 12345 09876</span>
            </a>
            <ion-icon
              name="copy-outline"
              className="w-7 h-7 cursor-pointer"
            ></ion-icon>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <p className="text-[1.1rem] md:text-[1.35rem] text-center">
            You can also find me on these platforms!
          </p>

          <ul className="flex items-center gap-6">
            {/* Github */}
            <li>
              <a
                href="https://github.com/Isaacjosh23"
                target="_blank"
                className="text-[var(--color-solid)] hover:text-black smooth-trans"
              >
                <ion-icon
                  name="logo-github"
                  className="w-[2.5rem] lg:w-[2.8rem] lg:h-[2.8rem] h-[2.5rem] "
                ></ion-icon>
              </a>
            </li>

            {/* Twitter */}
            <li>
              <a
                href="https://x.com/codes_from_josh?t=0p-3oxHXbpKMiF47B1XEIg&s=09"
                target="_blank"
                className="text-[var(--color-solid)] hover:text-black smooth-trans"
              >
                <ion-icon
                  name="logo-twitter"
                  className="w-[2.5rem] lg:w-[2.8rem] lg:h-[2.8rem] h-[2.5rem]"
                ></ion-icon>
              </a>
            </li>

            {/* LinkedIn */}
            <li>
              <a
                href="https://www.linkedin.com/in/joshua-ebhamen-4904aa344/"
                target="_blank"
                className="text-[var(--color-solid)] hover:text-black smooth-trans"
              >
                <ion-icon
                  name="logo-linkedin"
                  className="w-[2.5rem] lg:w-[2.8rem] lg:h-[2.8rem] h-[2.5rem]"
                ></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  );
};

export default GetInTouch;
