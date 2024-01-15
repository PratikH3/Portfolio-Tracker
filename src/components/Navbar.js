import React from "react";
import logo from "../assets/logo.svg";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid m-2">
        <Link className="me-4" to={"/"}>
          <img src={logo} alt="logo" height={40} />
        </Link>

        <Link className="navbar-brand" to={"/"}>
          {props.title}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item px-3">
              <Link to={"/signup"}>Sign Up</Link>
            </li>
            <li className="nav-item px-3">
              <Link to={"/login"}>Log In</Link>
            </li>
            <li className="nav-item px-3">
              <Link to={"/about"}>About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Portfolio Tracker",
};
