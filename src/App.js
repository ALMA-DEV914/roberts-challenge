import React from 'react';
import Homepage from './components/Homepage';
import Profile from './components/UserProfile';
import User from './components/UserLists';
import Dashboard from './components/UserComponent';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App(){
  return(
    <>
    <Router>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/profile/:uuid' element={<User/>}/>
      </Routes>
    </Router>

    </>
  )   
};

export default App;
