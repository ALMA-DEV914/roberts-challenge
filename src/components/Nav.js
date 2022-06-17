//import React
import React from "react";
import { Link } from "react-router-dom";

//function to create Nav components
const Nav = () => {
  //render the page section
  return (
    <div className="container opacity-75">
      <nav className="navbar navbar-expand-sm">
        <div className="d-inline-flex  bg-secondary text-white">
          <Link to="/">
            <button className="p-1 bg-info navActive m-1">Home</button>
          </Link>

          <Link to="/dashboard">
            <button className="p-1 m-1 bg-warning navActive">DASHBORD</button>
          </Link>

          <Link to="/profile">
            <button className="p-1 m-1 bg-primary navActive">PROFILE</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
