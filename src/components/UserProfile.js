import React, {useEffect, useState} from "react";
import Footer from "./Footer";
import Address from "./UserAddress";
import User from "./UserLists";
import moment from "moment";

const Profile = () => {
     const [user, setUser] = useState([]);

    useEffect(() => {
        (async (uuid) => {
          let userData;
          try {
            const response = await fetch(`https://randomuser.me/api/?results=${uuid}`);
            userData = await response.json();
          } catch (error) {
            console.log(error);
            userData = [];
          }
        console.log(userData.results)  
        setUser(userData.results);
        })();
      }, []);

   
const profilePage = user.map((user) => <div className="user-info mt-4 d-flex" key={user.login.uuid}>
<div className="col-md-8 information">
    <User userData={user}/><br></br>
    <Address userData={user}/>
    <p><span className='text-info'>Coordinates: </span> {user.location.coordinates.latitude} - {user.location.coordinates.longitude}</p>
    <p><span className='text-info'>Contact Option Cell: </span> {user.cell}</p>
    <p><span className='text-info'>Username:</span> {user.login.username}</p>
    <p><span className='text-info'>ID: </span> {user.id.name} - {user.id.value}</p>
    <p><span className='text-info'>Date of Registration: </span>{moment(`${user.registered.date}`).format("MMMM Do YYYY")} at {user.registered.age} </p>
   </div>
  <div className="col-sm-5">
    <img src={user.picture.large} alt="user-profile" className="card-img-top rounded-circle"/>
    </div>

</div>
)

return (
      <>
<div className="container p-3 my-2 text-white text-center">
   <h1 className="p-3">User Profile</h1>
      <div className="profile-page">
      {profilePage}
        </div>
      <div>
    </div>
    </div>
    <br></br>
    <Footer/>
   </>
  );
}

export default Profile;
