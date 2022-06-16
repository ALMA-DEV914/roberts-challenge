import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedUser,
} from "../redux/actions/userActions";

const UserDetails = () => {
   const { userId } = useParams();
  let user = useSelector((state) => state.user);
  const { picture, title, email, phone, gender } = user;
  const dispatch = useDispatch();

  const fetchUserDetail = async (id) => {
    const response = await axios
      .get(`https://randomuser.me/api/?results=${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedUser(response.data));
  };

  useEffect(() => {
    fetchUserDetail();
  }, [userId]);

  return (
    <div className="ui grid container">
      {Object.keys(user).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={picture} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <p className="ui teal tag label">{email}</p>
                </h2>
                <h3 className="ui brown block header">{gender}</h3>
                <p>{phone}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
