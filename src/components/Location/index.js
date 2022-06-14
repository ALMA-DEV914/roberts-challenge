import React from "react";

const Address = ({ userData }) => {
    const {location:{street:{number, name}, city, state, country, postcode, timezone:{offset, description}}} = userData;

    return <div className="address">
        <p>Street: {number}, {name}</p>
        <p>City, State, Country: {city}, {state} {country} {postcode}</p>
        <p>Timezone: {offset}, {description}</p>
    </div>;
    
  };
  
  export default Address;
  