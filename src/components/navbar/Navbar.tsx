// libraries
import { NavLink } from "react-router-dom";
import { MouseEvent, useState } from "react";

//components
import { Logo } from "@assets/icons/Icons";

// styles
import NavbarStyles from "./Navbar.module.css";

//utils
import { PAGES, EXTRA_MENU } from "./pages";
const Navbar = () => {
  const [toggleClass, setToggleClass] = useState("extra__menu");
  const toggleExtraMenu = () => {
    toggleClass === "extra__menu"
      ? setToggleClass("extra__menu__float")
      : setToggleClass("extra__menu");
  };
  return (
    <nav className={NavbarStyles.navbar}>
      <div className={NavbarStyles.navbar__logo}>
        <Logo />
      </div>
      <div className={NavbarStyles.navbar__menu}>
        {PAGES.map((page, index) => (
          <div className={NavbarStyles.navbar__menu__item} key={index}>
            {index == PAGES.length - 1 ? (
              <NavLink
                to={page.path}
                onClick={(e: MouseEvent<HTMLElement>) => {
                  e.preventDefault();
                  toggleExtraMenu();
                }}
              >
                <div className={NavbarStyles.navbar__menu__item__icon}>
                  {page.icon}
                </div>
                <small className={NavbarStyles.navbar__menu__item__text}>
                  {page.name}
                </small>
              </NavLink>
            ) : (
              <NavLink to={page.path}>
                <div className={NavbarStyles.navbar__menu__item__icon}>
                  {page.icon}
                </div>
                <small className={NavbarStyles.navbar__menu__item__text}>
                  {page.name}
                </small>
              </NavLink>
            )}
          </div>
        ))}
      </div>
      <div className={NavbarStyles[toggleClass]}>
        {EXTRA_MENU.map((page, index) => (
          <div className={NavbarStyles.navbar__menu__item} key={index}>
            <NavLink to={page.path}>
              <div className={NavbarStyles.navbar__menu__item__icon}>
                {page.icon}
              </div>
              <small className={NavbarStyles.navbar__menu__item__text}>
                {page.name}
              </small>
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
