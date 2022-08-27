import React from "react";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import UsersList from "./pages/UserProfile";

function App() {
  return (
   
    <Routes>
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<UsersList/>}/>

    </Routes>
    
  );
}

export default App;
