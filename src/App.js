import React from "react";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import Logout from "./pages/Logout";
//import MemberList from "./pages/MemberLists";
import AddMember from "./pages/AddMember";
import EditMember from "./pages/EditMember";
import UsersList from "./pages/UserProfile";

function App() {
  return (
   
    <Routes>
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<UsersList/>}/>
      <Route path="/logout" element={<Logout />} />
      <Route path="/" element={<AddMember />} />
      <Route path="/edit-member/:id" element={<EditMember />}/>
      {/*<Route path="/add-member" element={<MemberList/>}/>*/}
    </Routes>
    
  );
}

export default App;
