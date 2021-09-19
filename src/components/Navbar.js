import React from "react";
import { Link, useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();

  const handleNavigation = ({ path }) => {
    history.push(path);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <Link
          className="navbar-brand"
          onClick={() =>
            handleNavigation({
              path: "/",
            })
          }
        >
          <span>Shopy</span>
          <span>Me</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main-nav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
