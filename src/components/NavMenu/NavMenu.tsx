import React from "react";
import { NavLink } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = (): React.ReactElement => {
  return (
    <nav className="navigation-container">
      <ul className="navigation-links">
        <li>
          <NavLink
            to="/inicio"
            className={({ isActive }) =>
              `navigation-links__link ${isActive ? "navigation-links__link--active" : ""}`
            }
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/club"
            className={({ isActive }) =>
              `navigation-links__link ${isActive ? "navigation-links__link--active" : ""}`
            }
          >
            Club
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `navigation-links__link ${isActive ? "navigation-links__link--active" : ""}`
            }
          >
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/calendario"
            className={({ isActive }) =>
              `navigation-links__link ${isActive ? "navigation-links__link--active" : ""}`
            }
          >
            Calendario
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
