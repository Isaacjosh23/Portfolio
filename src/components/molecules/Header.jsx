import MobileNav from "../navigation/MobileNav.jsx";
import DesktopNav from "../navigation/DesktopNav.jsx";

const Header = ({
  onAboutClick,
  onProjectClick,
  onExperienceClick,
  onContactClick,
}) => {
  return (
    <header className="flex items-center justify-between container relative !py-10 nav-open">
      <div className="flex items-center">
        <a href="#">
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
      />

      <DesktopNav
        onAboutClick={onAboutClick}
        onExperienceClick={onExperienceClick}
        onContactClick={onContactClick}
        onProjectClick={onProjectClick}
      />
    </header>
  );
};

export default Header;
