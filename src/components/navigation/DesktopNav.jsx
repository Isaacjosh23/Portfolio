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
        <a
          href="#"
          className="p-4 bg-black text-white md:text-[1.4rem] lg:text-[1.6rem] hover:bg-[#333] smooth-trans hover-shadow custom-shadow rounded-3xl"
        >
          Download CV
        </a>

        <button className="flex items-center cursor-pointer p-2 rounded-[8px] custom-shadow">
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
