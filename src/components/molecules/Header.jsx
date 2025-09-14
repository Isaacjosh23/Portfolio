import MobileNav from "../navigation/MobileNav.jsx";
import DesktopNav from "../navigation/DesktopNav.jsx";
import { ThemeContext } from "../Portfoilo.jsx";
import { useContext } from "react";

const Header = ({
  onAboutClick,
  onProjectClick,
  onExperienceClick,
  onContactClick,
  onHeroClick,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <header
      className={`fixed  w-full z-[999] nav-open ${
        theme === "dark" ? "bg-[#030712]" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between container h-32">
        <div className="flex items-center">
          <a href="#" onClick={() => window.location.reload()}>
            <img
              src="../images/name-logo.png"
              alt="Joshua"
              className="w-[4.8rem] md:w-[5rem] lg:w-24"
            />
          </a>
        </div>

        <MobileNav
          onAboutClick={onAboutClick}
          onExperienceClick={onExperienceClick}
          onContactClick={onContactClick}
          onProjectClick={onProjectClick}
          onHeroClick={onHeroClick}
        />

        <DesktopNav
          onAboutClick={onAboutClick}
          onExperienceClick={onExperienceClick}
          onContactClick={onContactClick}
          onProjectClick={onProjectClick}
          onHeroClick={onHeroClick}
        />
      </div>
    </header>
  );
};
export default Header;
