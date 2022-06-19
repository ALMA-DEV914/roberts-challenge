import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../userRedux/userAction";
import { USER_KEY } from "../userRedux/usersReducer";
import moment from "moment";
import ReactPaginate from "react-paginate";
import Nav from "../components/Nav";
import User from "../components/UserLists";
import Address from "../components/UserAddress";
import Footer from "../components/Footer";
import { FaBackward, FaForward } from "react-icons/fa";

const PER_PAGE = 1;

const UserProfile = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [allUsers, setAllUsers] = useState([]);
  // initialize dispatch
  let dispatch = useDispatch();

   useEffect(() => {
    setCurrentPage(viewUser)
    dispatch(loadData());
  }, []);

  // view data from store
  const viewUser = useSelector((state) => {
    return state[USER_KEY];
  });

  //   button click
  const btnClick = () => {
    dispatch(loadData());
    dispatch(setAllUsers(viewUser))
  };

  function handlePageClick({ selected: selectedPage }) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  const pageCount = Math.ceil(viewUser.length / PER_PAGE);


  console.log("Users", viewUser)

  return (
    <React.Fragment>
      <div className="container text-white mt-4">
        <h1 className="font-weight-bold">RANDOM USER PROFILE </h1>
        <Nav />
      </div>
      <div className="container mt-4 text-white">
        {viewUser.loading === true ? (
          <p>Loading...</p>
        ) : (
          <React.Fragment>
            {viewUser.data.length === 0 ? null : (
              <React.Fragment>
                {viewUser.data.results.map((user, index) => {
                  return (
                    <>
                      <div className="container" key={index} pageCount={pageCount}>
                        <div className="d-flex">
                          <div className="col-sm-7 text-left">
                            <div className="text-center">
                            <User  userData={user} />
                            </div>
                            <h3>Address</h3>
                            <Address  userData={user} />
                          </div>
                          <div className="col-sm-5 mt-4">
                            <img
                              className="card-img-top rounded-circle"
                              src={user.picture.large}
                              alt="user-profile"
                            />
                             <button className="btns" onClick={handlePageClick}>
                        <FaForward/>
                      </button>
                             <button className="btns" onClick={handlePageClick}>
                       <FaBackward/>
                      </button>
                        
                          </div>
                        </div>
                        <h3>Extra Details</h3>
                        <div className="col-sm-12 d-flex">
              
                          <div className="col-sm-4">
          
                          <p><span className="text-info">Contact Option cell:</span> {user.cell}</p>
                          <p>
                            <span className="text-info">Registerd on: </span>{" "}
                            {moment(`${user.registered.date}`).format(
                              "MMMM Do YYYY"
                            )}{" "}
                            at age {user.registered.age}
                          </p>
                          </div>
                          <div>
                          <p><span className="text-info">Username:</span>{user.login.username}</p>
                          <p><span className="text-info">ID:</span> {user.id.name} - {user.id.value}</p>
                          <p>Coordinates:<span className="text-info"> Latitude:</span> {user.location.coordinates.latitude} {" "}
                           <span className="text-info">Longitude: </span>{user.location.coordinates.longitude}</p>
                        </div>
                      </div>
                      </div>
                    </>
                  );
                })}
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div><br></br><br></br>
      <Footer/>
    </React.Fragment>
  );
};

export default UserProfile;
