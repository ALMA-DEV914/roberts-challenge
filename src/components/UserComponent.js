import React,{ useState, useEffect } from "react";
import User from "./UserLists";
import ReactPaginate from "react-paginate";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const PER_PAGE = 1;

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(0)
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
       
      setAllUsers(userData.results);
      setUsers(userData.results);
    })();
  }, []);

   const filterUsers = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }


  function handlePageClick({selected: selectedPage}) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage)
  }
  

  const offset = currentPage * PER_PAGE;
  const currentPageUsers = users.slice(offset, offset + PER_PAGE).map((user, index) => <User 
  key={index} 
  userData={user}
   />)

   let id = currentPage;
   const pageCount = Math.ceil(users.length / PER_PAGE)

  return (
    <>
  <div className="container dashboard">
    <div className="container p-3 my-2 bg-dark text-white">
    <h1>Ramdom Users Lists</h1>
      <input className="search-bar" onInput={filterUsers} placeholder="Search here...."/>
      </div>
      <div className="current-page">
      {currentPageUsers}
      <Link to="/profile"><button className="p-1 mx-auto">SEE PROFILE</button></Link>
        </div>
      <div>
        <ReactPaginate 
          previousLabel={"< Previous"}
          nextLabel={"Next >"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination_link"}
          nextLinkClassName={"pagination_link"}
          disabledClassName={"pagination_disabled"}
          activeClassName={"pagination_active"}
          />
        </div>
    </div><br></br>
    <Footer/>
    </>
  );
}

export default Dashboard;
