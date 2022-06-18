import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/loginSlice';
import Login from './Login';

function Logout() {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  }
return (
  <>
    <div className='container text-white mt-4'>
      <h1>Thank you for visiting our app. Login Back!</h1>
      <p>Explore the world!</p>
     
  </div>
  <Login/>
  </>
  )
}

export default Logout;
