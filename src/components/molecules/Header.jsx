import MobileNav from "../navigation/MobileNav.jsx";
import DesktopNav from "../navigation/DesktopNav.jsx";

const Header = ({
  onAboutClick,
  onProjectClick,
  onExperienceClick,
  onContactClick,
  onHeroClick,
}) => {
  return (
    <header className="fixed bg-white w-full z-[999] nav-open">
      <div className="flex items-center justify-between container h-32">
        <div className="flex items-center">
          <a href="#" onClick={() => window.location.reload()}>
            <img
              src="../images/name-logo.png"
              alt="Joshua"
              className="w-24 lg:w-28"
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
