import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserComponent = () => {
  const users = useSelector((state) => state.allUsers.users);

  const userList = users.map((user) => {
    const {id, name: {title, first, last}, picture: {large},  email, phone } = user;

    return (
      <div className="four wide column" key={id}>
        <Link to={`/user/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={large} alt={first} />
              </div>
              <div className="content">
                <div className="header">{title}. {first} {last}</div>
                <div className="meta price">{email}</div>
                <div className="meta">{phone}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{userList}</>;
};

export default UserComponent;