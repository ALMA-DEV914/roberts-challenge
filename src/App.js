import React from "react";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/DashboardPage";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logout from "./pages/Logout";
import Home from "./pages/Home";

function App() {
   
  return (
    
      <Router>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </Router>
  
  );
}

export default App;
