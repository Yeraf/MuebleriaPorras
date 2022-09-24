import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <Link class="navbar-brand" to="/">
            Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
           
              <li class="nav-item active">
              <Link className="nav-link" to="/">
              Home
            </Link>
              </li>
            <li class="nav-item active">
            <Link className="nav-link" to="/about">
              About
            </Link>
            </li>
            <li class="nav-item active">
            <Link className="nav-link" to="/contact">
              Contacto
            </Link>
            </li>
            <li class="nav-item active">
            <Link className="nav-link" to="/history">
              History
            </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search">
            </input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
