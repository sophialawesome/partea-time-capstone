import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1 className="site-title">
        Partea Time
        <br />
        <small>Let's have a partea!</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/parties">
              Parties
            </Link>
          </li>
          <li> 
            <Link className="nav-link" to="/buddies">
              Buddies
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/teas">
              Teas
            </Link>
           </li>
          <li>
          <Link className="nav-link" to="/themes">
              Themes
          </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;