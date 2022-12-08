import React from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=" border-bottom-4 fixed-top border-dark navbar navbar-expand-sm navbar-light bg-light bg-gradient p-1">
        <div className="container-fluid d-flex flex-row-reverse">
          <button
            className="navbar-{brand p-1 bg-dark bg-gradient text-white"
            href="#"
          >
            BTBTB-bordtennisbrödernastisdagsbollar
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active">
                  Hem
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/booking" className="nav-link">
                  Bokning
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
