import { useContext, useState } from "react";
import { ThemeContext } from "../Portfoilo";

const MobileNav = ({
  onAboutClick,
  onExperienceClick,
  onContactClick,
  onProjectClick,
  onHeroClick,
}) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleNavToggle = () => {
    setNavIsOpen((open) => !open);
  };

  const handleOverlay = () => {
    setNavIsOpen(false);
  };

  const handleNavClick = (e, callback) => {
    e.preventDefault();
    callback();
    setNavIsOpen(false);
  };

  const handleMode = () => {
    toggleTheme();
    setNavIsOpen(false);
  };

  const [downloading, setDownloading] = useState(false);

  const handleClick = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2000); // reset after 2s
  };
  return (
    <>
      {navIsOpen && (
        <nav className="main-nav md:hidden absolute w-full h-screen invisible opacity-0 pointer-events-none z-[45] smooth-trans nav-position">
          <ul
            className={`flex flex-col items-center gap-10 h-screen ${
              theme === "dark" ? "bg-[#030712]" : "bg-white"
            }`}
          >
            <li>
              <a
                href="#"
                className={`text-[1.5rem] font-bold nav-links ${
                  theme === "dark"
                    ? "text-gray-300!"
                    : "text-[var(--color-grey)]"
                }`}
                onClick={(e) => handleNavClick(e, onHeroClick)}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={(e) => handleNavClick(e, onAboutClick)}
                className={`text-[1.5rem] font-bold nav-links ${
                  theme === "dark"
                    ? "text-gray-300!"
                    : "text-[var(--color-grey)]"
                }`}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className={`text-[1.5rem] font-bold nav-links ${
                  theme === "dark"
                    ? "text-gray-300!"
                    : "text-[var(--color-grey)]"
                }`}
                onClick={(e) => handleNavClick(e, onExperienceClick)}
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#"
                className={`text-[1.5rem] font-bold nav-links ${
                  theme === "dark"
                    ? "text-gray-300!"
                    : "text-[var(--color-grey)]"
                }`}
                onClick={(e) => handleNavClick(e, onProjectClick)}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#"
                className={`text-[1.5rem] font-bold nav-links ${
                  theme === "dark"
                    ? "text-gray-300!"
                    : "text-[var(--color-grey)]"
                }`}
                onClick={(e) => handleNavClick(e, onContactClick)}
              >
                Contact
              </a>
            </li>

            <div className="flex flex-col justify-center items-center gap-10">
              <a
                onClick={handleClick}
                href="../../../resume/resume.docx"
                download="Ebahmen_Joshua_Resume.docx"
                className={`p-4 text-[1.3rem] font-semibold md:text-[1.4rem] lg:text-[1.6rem] smooth-trans hover-shadow custom-shadow rounded-3xl flex items-center justify-center gap-2 min-w-[128px]  ${
                  downloading ? "opacity-70 pointer-events-none" : ""
                } ${
                  theme === "dark"
                    ? "bg-[#F9FAFB] text-[#111827]!"
                    : "bg-black text-white hover:bg-[#333]"
                }`}
              >
                {downloading ? (
                  <>
                    <span
                      className={`loader border-2 p-3 border-t-transparent rounded-full w-5 h-5 animate-spin ${
                        theme === "dark" ? "border-black" : "border-white"
                      }`}
                    ></span>
                    {/* Downloading... */}
                  </>
                ) : (
                  "Download CV"
                )}
              </a>

              <button
                className="flex items-center gap-4 p-2 rounded-[8px] custom-shadow"
                onClick={handleMode}
              >
                {theme === "light" ? (
                  <ion-icon
                    name="moon-outline"
                    className="w-[2.5rem] h-[2.5rem]"
                  ></ion-icon>
                ) : (
                  <ion-icon
                    name="sunny-outline"
                    className="w-[2.5rem] h-[2.5rem]"
                  ></ion-icon>
                )}
              </button>
            </div>
          </ul>
        </nav>
      )}

      {navIsOpen && (
        <div
          className="absolute md:hidden top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.6)] z-[40] backdrop-blur-[3px]"
          onClick={handleOverlay}
        ></div>
      )}

      {/* Mobille Nav Buttons */}
      <button
        className="flex items-center gap-10 cursor-pointer z-[45] md:hidden"
        onClick={handleNavToggle}
      >
        {navIsOpen ? (
          <ion-icon
            name="close-outline"
            className={`w-[3rem] h-[3rem] icon-mobile-nav`}
          ></ion-icon>
        ) : (
          <ion-icon
            name="menu-outline"
            className={`w-[3rem] h-[3rem] icon-mobile-nav`}
          ></ion-icon>
        )}
      </button>
    </>
  );
};

export default MobileNav;
