import React from "react";

const Address = ({ userData }) => {
  const {
    location: {
      street: { number, name },
      city,
      state,
      country,
      postcode,
      timezone: { offset, description },
    },
  } = userData;

  return (
    <div className="address">
      <p>
        <span className="text-info">Street: </span>
        {number}, {name}
      </p>
      <p>
        <span className="text-info">City, State, Country:</span> {city}, {state}{" "}
        {country} {postcode}
      </p>
      <p>
        <span className="text-info">Timezone: </span>
        {offset}, {description}
      </p>
    </div>
  );
};

export default Address;
