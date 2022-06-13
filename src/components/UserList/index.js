//import react hooks
import React, { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);

//declare the API endpoints
const baseUrl = `https://randomuser.me/api/?results=100`;
//fucntion to fetch the data json
    const fetchUserData = async () => {
        const data = await fetch(baseUrl);
        const userData = await data.json();
        setUsers(userData.results);
    };

    useEffect(() => {
       fetchUserData()
    }, []);

  
    
    //return the html page of student list and search bars
    return (
        <>
         <h1>Users Data</h1>
         <section>
             {users.map((user) => {
                 return (
                     <div key={user.login.uuid}>
                         <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
                     </div>
                 )
             })}
         </section>
          
        </>
    );
    }
//export the studentList component
export default UserList;
