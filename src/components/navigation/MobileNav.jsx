import { useState } from "react";

const MobileNav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleNavToggle = () => {
    setNavIsOpen((open) => !open);
  };

  const handleOverlay = () => {
    setNavIsOpen(false);
  };

  return (
    <>
      {navIsOpen && (
        <nav className="main-nav absolute w-full h-screen invisible opacity-0 pointer-events-none z-[45] smooth-trans nav-position">
          <ul className="flex flex-col bg-white items-start gap-10 h-screen">
            <li>
              <a href="#" className="text-[1.5rem] font-bold nav-links">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="text-[1.5rem] font-bold nav-links">
                About
              </a>
            </li>

            <li>
              <a href="#" className="text-[1.5rem] font-bold nav-links">
                Tech Stack
              </a>
            </li>

            <li>
              <a href="#" className="text-[1.5rem] font-bold nav-links">
                Projects
              </a>
            </li>

            <li>
              <a href="#" className="text-[1.5rem] font-bold nav-links">
                Contact
              </a>
            </li>

            <button>
              <ion-icon
                name="sunny-outline"
                className="w-[2.5rem] h-[2.5rem] hidden"
              ></ion-icon>

              <ion-icon
                name="moon-outline"
                className="w-[2.5rem] h-[2.5rem]"
              ></ion-icon>
            </button>
          </ul>
        </nav>
      )}

      {navIsOpen && (
        <div
          className="absolute top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.6)] z-[40] backdrop-blur-[3px]"
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
