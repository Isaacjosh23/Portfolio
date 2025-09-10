import { useState } from "react";

const DesktopNav = ({
  onAboutClick,
  onExperienceClick,
  onContactClick,
  onProjectClick,
  onHeroClick,
}) => {
  const [downloading, setDownloading] = useState(false);

  const handleClick = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2000); // reset after 2s
  };

  const handleNavClick = (e, callback) => {
    e.preventDefault();
    callback();
  };

  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-5">
          <li>
            <a
              href="#"
              className="lg:text-[1.6rem] md:text-[1.4rem]  font-medium text-[var(--color-grey)] nav-links"
              onClick={(e) => handleNavClick(e, onHeroClick)}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="lg:text-[1.6rem] md:text-[1.4rem]  font-medium text-[var(--color-grey)] nav-links"
              onClick={(e) => handleNavClick(e, onAboutClick)}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#"
              className="lg:text-[1.6rem] md:text-[1.4rem]  font-medium text-[var(--color-grey)] nav-links"
              onClick={(e) => handleNavClick(e, onExperienceClick)}
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#"
              className="lg:text-[1.6rem] md:text-[1.4rem]  font-medium text-[var(--color-grey)] nav-links"
              onClick={(e) => handleNavClick(e, onProjectClick)}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#"
              className="lg:text-[1.6rem] md:text-[1.4rem]  font-medium text-[var(--color-grey)] nav-links"
              onClick={(e) => handleNavClick(e, onContactClick)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="md:flex md:items-center md:gap-10 hidden">
        <a
          onClick={handleClick}
          href="../../../resume/resume.docx"
          download="Ebahmen_Joshua_Resume.docx"
          className={`p-4 bg-black text-white font-semibold md:text-[1.4rem] lg:text-[1.6rem] hover:bg-[#333] smooth-trans hover-shadow custom-shadow rounded-3xl flex items-center justify-center gap-2 min-w-[128px]  ${
            downloading ? "opacity-70 pointer-events-none" : ""
          }`}
        >
          {downloading ? (
            <>
              <span className="loader border-2 p-4 border-white border-t-transparent rounded-full w-4 h-4 animate-spin"></span>
            </>
          ) : (
            "Download CV"
          )}
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
