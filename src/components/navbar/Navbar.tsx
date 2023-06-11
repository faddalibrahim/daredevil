//components
import { Logo } from "@assets/icons/Icons";

// styles
import NavbarStyles from "./Navbar.module.css";

//utils
import { PAGES } from "./pages";
const Navbar = () => {
  return (
    <nav className={NavbarStyles.navbar}>
      <div className={NavbarStyles.navbar__logo}>
        <Logo />
      </div>
      <div className={NavbarStyles.navbar__menu}>
        {PAGES.map((page, index) => (
          <div className={NavbarStyles.navbar__menu__item} key={index}>
            {/* <NavLink to={page.path}> */}
            <a href={page.path}>
              <div className={NavbarStyles.navbar__menu__item__icon}>
                {page.icon}
              </div>
              <small className={NavbarStyles.navbar__menu__item__text}>
                {page.name}
              </small>
            </a>
            {/* </NavLink> */}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
