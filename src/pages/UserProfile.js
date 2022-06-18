import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userSlice";
import moment from "moment";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const UserProfile = () => {
  const user = useSelector(state => state.user);
  // initialize dispatch
  let dispatch = useDispatch();
  
  useEffect(() => {
     dispatch(fetchUsers());
 }, []);

 console.log("Users", user)

  return (
    <>
      <div className="container p-3 text-white justify-content-center">
        <div className="container p-3">
          <h2 className="font-weight-bold">RANDOM USER PROFILE APP</h2>
          <Nav />
        </div>
      
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
        {user.users.map((user, index) => (
          <li key={index} className="text-white">{user.email}</li>
         
        ))}
      </ul>
    ) : null}
   </div>
  
      <br></br>
      <br></br>
      <Footer />
    </>
  );
};

export default UserProfile;
