import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../userRedux/usersAction";
import moment from "moment";
import Nav from "../components/Nav";
import User from "../components/UserLists";
import Address from "../components/UserAddress";
import Footer from "../components/Footer";
import {FaForward } from "react-icons/fa";

const UserProfile = () => {
  // view data from store
const users = useSelector((state) => state.users);

  // initialize dispatch
 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  function handleClick() {
    dispatch(loadData());
  }

  console.log("Users", users);

  return (
    <React.Fragment>
      <div className="container text-white mt-4">
        <h1 className="font-weight-bold">RANDOM USER PROFILE </h1>
        <Nav />
      </div>
      <div className="container mt-4 text-white">
        {users.loading === true ? (
          <p>Loading...</p>
        ) : (
          <React.Fragment>
            {users.data.length === 0 ? null : (
              <React.Fragment>
                {users.data.results.map((user) => {
                  return (
                    <>
                      <div className="container">
                        <div className="d-flex">
                          <div className="col-sm-7 text-left">
                            <div className="text-center">
                              <User userData={user} />
                            </div>
                            <h3>Address</h3>
                            <Address userData={user} />
                          </div>
                          <div className="col-sm-5 mt-4">
                            <img
                              className="card-img-top rounded-circle"
                              src={user.picture.large}
                              alt="user-profile"
                            />
                            <button className="btns" onClick={handleClick}>
                              <FaForward />
                            </button>
                            {/*
                            <button
                              className="btns"
                              onClick={handleClick}
                            >
                              <FaBackward />
                  </button>*/}
                          </div>
                        </div>
                        <h3>Extra Details</h3>
                        <div className="col-sm-12 d-flex">
                          <div className="col-sm-4">
                            <p>
                              <span className="text-info">
                                Contact Option cell:
                              </span>{" "}
                              {user.cell}
                            </p>
                            <p>
                              <span className="text-info">Registerd on: </span>{" "}
                              {moment(`${user.registered.date}`).format(
                                "MMMM Do YYYY"
                              )}{" "}
                              at age {user.registered.age}
                            </p>
                          </div>
                          <div>
                            <p>
                              <span className="text-info">Username:</span>
                              {user.login.username}
                            </p>
                            <p>
                              <span className="text-info">ID:</span>{" "}
                              {user.id.name} - {user.id.value}
                            </p>
                            <p>
                              Coordinates:
                              <span className="text-info"> Latitude:</span>{" "}
                              {user.location.coordinates.latitude}{" "}
                              <span className="text-info">Longitude: </span>
                              {user.location.coordinates.longitude}
                            </p>
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
      </div>
      <br></br>
      <br></br>
      <Footer />
    </React.Fragment>
  );
};

export default UserProfile;
