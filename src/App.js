import React from "react";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/DashboardPage";
import UserProfile from "./pages/UserProfile";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
