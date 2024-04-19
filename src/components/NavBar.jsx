import React from "react";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <nav className=" bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="public/sample-logo.png"
              alt="Bootstrap"
              width="100"
              height="50"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
