//import React 
import React from "react";
import { Link } from "react-router-dom";

//function to create Nav components
const Nav = () => {
//render the page section
  return (
    <div className="container opacity-75">
    <nav className="navbar navbar-expand-sm bg-light">
    <div className="d-inline-flex p-1 bg-secondary text-white">
      
    <Link to="/"><button 
          className="p-2 bg-info navActive"
        >Home</button></Link>

      <Link to="/dashboard" ><button className= "p-2 bg-warning navActive" >DASHBORD</button>
      </Link>

      <Link to="/profile/userId"><button className= "p-2 bg-primary navActive">PROFILE</button></Link>
       </div>
    </nav>
    </div>
  );
}

export default Nav;
