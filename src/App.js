import React from 'react';
import Dashboard from './components/Dashboard';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
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
      </Routes>
    </Router>

    </>
  )   
    
};

export default App;