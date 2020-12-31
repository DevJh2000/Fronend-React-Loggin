import React from "react";
import { GoOrganization, GoNote, GoClippy } from "react-icons/go";
import { NavLink } from "react-router-dom";
import "./styles.css";
export const SidebarMenu = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/perfil"
          >
            <GoOrganization className="icon-side-menu" /> Profile
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/registrar"
          >
            <GoNote className="icon-side-menu" /> Register
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/modulos"
          >
            <GoClippy className="icon-side-menu" /> Modules
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
