import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import logo from "../../assets/global network.png";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { GoPerson, GoSignOut } from "react-icons/go";
import "./style.css";
import types from "../../configs/types";

export const Header = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(AuthContext);
  const { nombres, apellidos } = state.usuario;
  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });
    history.replace("/login");
  };

  return (
    <header
      id="header"
      className="navbar navbar-ligth sticky-top bg-header flex-md-nowrap p-0 shadow"
    >
      <span className="navbar-brand col-md-3 col-lg-2 me-0 px-3">
        <Image src={logo} width="140" />
      </span>
      <div className="d-flex align-items-center">
        <GoPerson className="icon-user-header" />
        <span className="text-user-header">{`${nombres} ${apellidos}`}</span>
        <ul className="navbar-nav px-3 bg-logout " onClick={handleLogout}>
          <li className="nav-item text-nowrap">
            <span className="nav-link">
              <GoSignOut className="icon-user-header" /> Sign out
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
};
