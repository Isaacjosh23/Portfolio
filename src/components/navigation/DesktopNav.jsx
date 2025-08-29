const DesktopNav = () => {
  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-5">
          <li>
            <a
              href="#"
              className="lg:text-[1.6rem] md:text-[1.4rem]  font-medium text-[var(--color-grey)] nav-links"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="lg:text-[1.6rem] md:text-[1.4rem]  font-medium text-[var(--color-grey)] nav-links"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#"
              className="lg:text-[1.6rem] md:text-[1.4rem]  font-medium text-[var(--color-grey)] nav-links"
            >
              Tech Stack
            </a>
          </li>

          <li>
            <a
              href="#"
              className="lg:text-[1.6rem] md:text-[1.4rem]  font-medium text-[var(--color-grey)] nav-links"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#"
              className="lg:text-[1.6rem] md:text-[1.4rem]  font-medium text-[var(--color-grey)] nav-links"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="md:flex md:items-center md:gap-10 hidden">
        <ul className="flex items-center gap-5">
          {/* Github */}
          <li>
            <a href="https://github.com/Isaacjosh23" target="_blank">
              <ion-icon
                name="logo-github"
                className="lg:w-[2.8rem] lg:h-[2.8rem] w-[2.5rem] h-[2.5rem] text-[var(--color-grey)]"
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
                className="lg:w-[2.8rem] lg:h-[2.8rem] w-[2.5rem] h-[2.5rem] text-[var(--color-grey)]"
              ></ion-icon>
            </a>
          </li>

          {/* Linkedin */}
          <li>
            <a
              href="https://www.linkedin.com/in/joshua-ebhamen-4904aa344/"
              target="_blank"
            >
              <ion-icon
                name="logo-linkedin"
                className="lg:w-[2.8rem] lg:h-[2.8rem] w-[2.5rem] h-[2.5rem] text-[var(--color-grey)]"
              ></ion-icon>
            </a>
          </li>
        </ul>

        <button className="flex items-center cursor-pointer p-2 rounded-[8px] theme-btn">
          <ion-icon
            name="sunny-outline"
            className="lg:w-[2.8rem] lg:h-[2.8rem] w-[2.5rem] h-[2.5rem] hidden text-[var(--color-grey)]"
          ></ion-icon>

          <ion-icon
            name="moon-outline"
            className="lg:w-[2.8rem] lg:h-[2.8rem] w-[2.5rem] h-[2.5rem] text-[var(--color-grey)]"
          ></ion-icon>
        </button>
      </div>
    </>
  );
};

export default DesktopNav;
