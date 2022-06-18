import React from "react";
import moment from "moment";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const User = ({userData}) => {
  const {
    name: { title, first, last },
    email,
    phone,
    dob: { date, age },
    picture: { large },
  } = userData;

  let daysLeft =
    "Birthday on " +
    moment(date).format("D MMM") +
    " (in " +
    moment(moment(date))
      .add(
        moment(moment().format("YYYY-MM-DD")).diff(moment(date), "years") + 1,
        "years"
      )
      .diff(moment().format("YYYY-MM-DD"), "days") +
    " days)";

  return (
    <>
      <div className="container opacity-80">
        <div className="row">
          <div className="col-sm-4">
            <img
              className="card-img-top rounded-circle"
              src={large}
              alt="user-profile"
            />
          </div>
          <div className="col-sm-8 text-white bg-dark">
            <div className="card-body">
              <h2 className="text-warning">
                {title}. {first} {last}
              </h2>
              <p className="card-title">
                <span className="text-info">Date of birth:</span>{" "}
                {moment(`${date}`).format("MMMM Do YYYY")}
              </p>
              <p className="text-info">{daysLeft}</p>
              <p>
                <span className="text-info">Age:</span> {age}
              </p>
              <p>
                <FaEnvelope className="text-info" /> {email}
              </p>
              <p>
                <FaPhone className="text-info" /> {phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
