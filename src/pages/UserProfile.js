import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../redux/actions/userActions";
import { USER_KEY } from "../redux/reducers/usersReducers";
import moment from "moment";
import Nav from "../components/Nav";
import User from "../components/UserLists";
import Address from "../components/UserAddress";
import Footer from "../components/Footer";

const UserProfile = () => {
  // initialize dispatch
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  // view data from store
  let viewUser = useSelector((state) => {
    return state[USER_KEY];
  });

//   button click
let btnClick = () =>{
    dispatch(loadData());
}


return (
    <React.Fragment>
      <div className="container p-3 text-white justify-content-center">
        <div className="container p-3">
            <h2 className="font-weight-bold">RANDOM USER PROFILE APP</h2>
           <Nav/>
            </div><br></br>
            <div className="containe ">
              {viewUser.loading === true ? (
                <h1>Loading....</h1>
              ) : (
                <React.Fragment>
                  {viewUser.data.length === 0 ? null : (
                    <React.Fragment>
                      {viewUser.data.results.map((user) => {
                        return (
                           <>
                    <div className="user-info mt-4 d-flex ">
                    <div className="col-md-8 information">
                       <div className="text-center"><User userData={user}/></div><br></br>
                       <div className="text-center"><Address userData={user}/></div>
                       <div className="text-center">    <p><span className='text-info'>Coordinates: </span> {user.location.coordinates.latitude} - {user.location.coordinates.longitude}</p>
                                <p><span className='text-info'>Contact Option Cell: </span> {user.cell}</p>

                                <p><span className='text-info'>Username:</span> {user.login.username}</p>
                                <p><span className='text-info'>ID: </span> {user.id.name} - {user.id.value}</p>
                                <p><span className='text-info'>Date of Registration: </span>{moment(`${user.registered.date}`).format("MMMM Do YYYY")} at {user.registered.age} </p>
                              </div>
                              </div>
                            <div className="col-sm-5">
                        <img src={user.picture.large} alt="user-profile" className="card-img-top rounded-circle"/></div>
                            </div><br></br>
                            <button className="btns" onClick={btnClick}>NEXT PROFILE</button>
                           </>
                        );
                      })}
                    </React.Fragment>
                  )}
                </React.Fragment>
              )}
            </div>
          </div><br></br><br></br>
          <Footer/>
    </React.Fragment>
  );
};

export default UserProfile;

