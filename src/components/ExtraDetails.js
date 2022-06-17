import React from "react";
import moment from "moment";

const ExtraDetails = ({ userData }) => {
  const {
    cell,
    login: { username },
    id: { name, value },
    registered: { date, age },
    location: {
      coordinates: { latitude, longitude },
    },
  } = userData;

  return (
    <div className="user-info mt-4">
      <div className="col-md-8 information">
        <p>
          <span className="text-primary">Coordinates: </span>
          {latitude} - {longitude}
        </p>
        <p>
          <span className="text-primary">Contact Option Cell: </span> {cell}
        </p>
        <p>
          <span className="text-primary">Username:</span> {username}
        </p>
        <p>
          <span className="text-primary">ID: </span> {name} - {value}
        </p>
        <p>
          <span className="text-primary">Date of Registration: </span>
          {moment(`${date}`).format("MMMM Do YYYY")} at {age}{" "}
        </p>
      </div>
    </div>
  );
};

export default ExtraDetails;
