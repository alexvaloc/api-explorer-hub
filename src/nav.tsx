import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { switchRoutes } from "./router";

export const Nav: React.FC = () => {
  const { pathname } = useLocation();
  const isGithubActive =
    pathname === switchRoutes.root ||
    pathname.startsWith("/list/") ||
    pathname.startsWith("/detail/");
  const navActiveClass = isGithubActive
    ? "nav-links--github"
    : "nav-links--rick";

  return (
    <nav className={`nav-links ${navActiveClass}`}>
      <NavLink
        to={switchRoutes.root}
        className={`nav-button${isGithubActive ? " nav-button-active" : ""}`}
      >
        GitHub Members
      </NavLink>
      <NavLink
        to={switchRoutes.RickyMorty}
        className={({ isActive }) =>
          `nav-button${isActive ? " nav-button-active" : ""}`
        }
      >
        Rick & Morty Characters
      </NavLink>
    </nav>
  );
};
