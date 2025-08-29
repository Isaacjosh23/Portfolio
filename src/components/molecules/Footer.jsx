import Container from "../reuseable/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20">
      <Container>
        <div className="text-[var(--color-solid)] grid grid-cols-3 gap-3 md:grid-cols-[1fr_1fr_1fr_1fr] md:gap-14 md:py-8">
          <div className="flex flex-col gap-5">
            <a href="#">
              <img
                src="../../images/footer/logo.png"
                alt="joshua logo"
                className="w-20 md:w-24 lg:w-28"
              />
            </a>

            <ul className="flex items-center gap-3.5 md:hidden">
              {/* Github */}
              <li>
                <a href="https://github.com/Isaacjosh23" target="_blank">
                  <ion-icon
                    name="logo-github"
                    className="w-[2rem] h-[2rem] text-[var(--color-solid)]"
                  ></ion-icon>
                </a>
              </li>

              {/* Twitter */}
              <li>
                <a
                  href="https://x.com/codes_from_josh?t=0p-3oxHXbpKMiF47B1XEIg&s=09"
                  target="_blank"
                >
                  <ion-icon
                    name="logo-twitter"
                    className="w-[2rem] h-[2rem] text-[var(--color-solid)]"
                  ></ion-icon>
                </a>
              </li>

              {/* LinkedIn */}
              <li>
                <a
                  href="https://www.linkedin.com/in/joshua-ebhamen-4904aa344/"
                  target="_blank"
                >
                  <ion-icon
                    name="logo-linkedin"
                    className="w-[2rem] h-[2rem] text-[var(--color-solid)]"
                  ></ion-icon>
                </a>
              </li>
            </ul>
          </div>

          <a
            href="tel:+91 12345 09876"
            className=" font-semibold md:flex md:items-center md:gap-3 md:text-[1.2rem] lg:text-[1.4rem] hover:underline"
          >
            <ion-icon
              name="call-outline"
              className="hidden md:block md:w-7 md:h-7"
            ></ion-icon>
            <span>+91 12345 09876</span>
          </a>

          <a
            href="mailto:ebhamenjoshua@gmail.com"
            className="break-words font-semibold md:flex md:items-center md:gap-3 md:text-[1.2rem] lg:text-[1.4rem] hover:underline"
          >
            <ion-icon
              name="mail-outline"
              className="hidden md:block md:w-7 md:h-7"
            ></ion-icon>
            <span>ebhamenjoshua@gmail.com</span>
          </a>

          <ul className="md:flex items-center gap-6 hidden">
            {/* Github */}
            <li>
              <a href="https://github.com/Isaacjosh23" target="_blank">
                <ion-icon
                  name="logo-github"
                  className="w-[2.5rem] lg:w-[2.8rem] lg:h-[2.8rem] h-[2.5rem] text-[var(--color-solid)]"
                ></ion-icon>
              </a>
            </li>

            {/* Twitter */}
            <li>
              <a
                href="https://x.com/codes_from_josh?t=0p-3oxHXbpKMiF47B1XEIg&s=09"
                target="_blank"
              >
                <ion-icon
                  name="logo-twitter"
                  className="w-[2.5rem] lg:w-[2.8rem] lg:h-[2.8rem] h-[2.5rem]  text-[var(--color-solid)]"
                ></ion-icon>
              </a>
            </li>

            {/* LinkedIn */}
            <li>
              <a
                href="https://www.linkedin.com/in/joshua-ebhamen-4904aa344/"
                target="_blank"
              >
                <ion-icon
                  name="logo-linkedin"
                  className="w-[2.5rem] lg:w-[2.8rem] lg:h-[2.8rem] h-[2.5rem] text-[var(--color-solid)]"
                ></ion-icon>
              </a>
            </li>
          </ul>
        </div>

        <hr className="hidden md:block md:text-[var(--color-grey)] border rounded-2xl" />

        <div className="hidden md:flex items-center justify-between md:py-8">
          <ul className="flex items-center">
            <li>
              <a href="" className="nav-links text-[1.3rem]">
                Home
              </a>
            </li>

            <li>
              <a href="" className="nav-links text-[1.3rem]">
                About
              </a>
            </li>

            <li>
              <a href="" className="nav-links text-[1.3rem]">
                Tech Stack
              </a>
            </li>

            <li>
              <a href="" className="nav-links text-[1.3rem]">
                Projects
              </a>
            </li>

            <li>
              <a href="" className="nav-links text-[1.3rem]">
                Contact
              </a>
            </li>
          </ul>

          <p className="text-[1.2rem] font-medium">
            Designed and built by <span className="gradient">Pavan MG </span>
            with <span className="gradient">Love</span> &
            <span className="gradient"> Coffee</span>
          </p>
        </div>

        <p className="mt-6 font-medium md:text-[1.1rem] text-center">
          &copy; {currentYear} Joshua. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
