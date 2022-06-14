import { useState, useEffect } from "react";
import UserCard from "../Profile";


function Dashboard() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=100");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      console.log(userData.results)
      setAllUsers(userData.results);
      setUsers(userData.results);
    })();
  }, []);

   const filterUsers = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }


  return (
      
    <div className="container">
    <div class="container p-3 my-3 bg-dark text-white">
    <h1>Ramdom Users Lists</h1>
      <input className="search-bar" onInput={filterUsers} placeholder="Search here...."/>
      </div>
        {users.map((user, index) => (
        <UserCard 
        key={index} 
        userData={user}
         />
         
        ))}
    </div>
  );
}

export default Dashboard;