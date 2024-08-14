import React from "react";
import logo from "../../photos/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const navigate = useNavigate();

  const loginRoute = () => {
    let path = `login`;
    navigate(path);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="logo"
              src={logo}
              alt="LOGO"
              // style={{ maxWidth: "150px", maxHeight: "80px" }}
            ></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav navLinks mb-2 mb-lg-0 d-flex justify-content-center mx-auto ps-4-lg"
              id="primary"
            >
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Self
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Couples Therapy
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Teen
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      View all
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Contact us
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav navBtns flex-row-lg ms-auto">
              <li className="nav-item">
                <button type="button" className="btn btn-primary">
                  Book Online Session
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="login-btn btn btn-secondary"
                  onClick={loginRoute}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
