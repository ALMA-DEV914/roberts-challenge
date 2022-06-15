//import React 
import React from "react";
import { Link } from "react-router-dom";

//function to create Nav components
function Nav () {
//render the page section
  return (
    <div className="container">
    <nav className="navbar navbar-expand-sm bg-light">
    <div className="d-inline-flex p-3 bg-secondary text-white">
      
    <Link to="/"><button 
          className="p-2 bg-info navActive"
        >Home</button></Link>

      <Link to="/dashboard" ><button className= "p-2 bg-warning navActive" >DASHBORD</button>
      </Link>

      <Link to="/profile"><button className= "p-2 bg-primary navActive">PROFILE</button></Link>
       </div>
    </nav>
    </div>
  );
}

export default Nav;
