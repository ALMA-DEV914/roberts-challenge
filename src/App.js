import React from 'react';
import Homepage from './components/Homepage';
import Dashboard from './components/UserComponent';
import UserApp from './components/UserProfile';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App(){
  return(
    <>
    <Router>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/dashboard" element={< Dashboard/>} />
        <Route path='/profile' element={<UserApp/>}/>
        </Routes>
    </Router>

    </>
  )   
};

export default App;
