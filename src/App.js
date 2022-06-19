import React from "react";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/DashboardPage";
import Login from "./components/TextField";
import { Routes, Route } from "react-router-dom";
import Logout from "./pages/Logout";
import MemberList from "./pages/MemberLists";
import AddMember from "./pages/AddMember";
import EditMember from "./pages/EditMember";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MemberList />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/add-member" element={<AddMember />} />
      <Route path="/edit-member/:id" element={<EditMember />} />
    </Routes>
  );
}

export default App;
