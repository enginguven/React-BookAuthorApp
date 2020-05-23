import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Book Author App
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/books">
            Books
          </NavLink>
          <NavLink className="nav-item nav-link" to="/authors">
            Authors
          </NavLink>
          <NavLink className="nav-item nav-link" to="/createbook">
            Create Book
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
