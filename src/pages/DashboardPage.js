import React, { useState, useEffect } from "react";
import User from "../components/UserLists";
import ReactPaginate from "react-paginate";
import Footer from "../components/Footer";
import ExtraDetails from "../components/ExtraDetails";
import Address from "../components/UserAddress";
import Nav from "../components/Nav";
import { FaBackward, FaForward } from "react-icons/fa";

const PER_PAGE = 1;

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

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

  const filterUsers = (event) => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter((user) =>
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(value)
    );
    setUsers(filteredUsers);
  };

  function handlePageClick({ selected: selectedPage }) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageUsers = users
    .slice(offset, offset + PER_PAGE)
    .map((user, index) => <User key={index} userData={user}/>);

  const pageCount = Math.ceil(users.length / PER_PAGE);

  const userAdd = users
    .slice(offset, offset + PER_PAGE)
    .map((user, index) => <Address key={index} userData={user} />);

  const moreDetails = users
    .slice(offset, offset + PER_PAGE)
    .map((user, index) => <ExtraDetails key={index} userData={user} />);

  const Modal = (props) => {
    if (!props.show) {
      return null;
    }
    return (
      <div className="container fluid mt-3">
        <div className="modal bg-white">
          <div className="modal-body">
            {currentPageUsers}
            <br></br>

            <div className=" container modal-text d-flex mx-auto text-left">
              <div className="col-md-4">
                <h5>EXTRA DETAILS</h5>
                {moreDetails}
              </div>
              <div className="extra-details col-6">
                <h5>ADDRESS</h5>
                {userAdd}
              </div>
            </div>
           
            <div className="modal-footer">
              <button className="button" onClick={props.onClose}>
                CLOSE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <div className="container p-3 my-2 text-white">
          <h1>Ramdom Users Lists</h1>
          <Nav />
          <input
            className="search-bar"
            onInput={filterUsers}
            placeholder="Search here...."
          />
        </div>

        <div className="current-page">
          {currentPageUsers}

          <div className="show-profile">
            <button
              className="m-2 mx-auto col-lg-4"
              onClick={() => setShow(true)}
            >
              VIEW PROFILE
            </button>
          </div>

          <ReactPaginate
            previousLabel={<FaBackward />}
            nextLabel={<FaForward />}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination_link"}
            nextLinkClassName={"pagination_link"}
            disabledClassName={"pagination_disabled"}
            activeClassName={"pagination_active"}
          />
        </div>
      </div>

      <Modal onClose={() => setShow(false)} show={show} />
      <Footer />
    </>
  );
};

export default Dashboard;
