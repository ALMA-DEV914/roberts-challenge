import React from 'react';
import Homepage from './components/Homepage';
import UserDetails from './components/UserProfile';
import ProfilePage from './components/UserLists';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App(){
  return(
    <>
    <Router>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/dashboard" element={<ProfilePage />} />
        <Route path='/user/:userId' element={<UserDetails/>}/>
        </Routes>
    </Router>

    </>
  )   
};

export default App;
