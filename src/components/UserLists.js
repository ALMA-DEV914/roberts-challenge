import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../redux/actions/userActions";
import UserComponent from "./UserComponent";

const ProfilePage = () => {
  const users = useSelector((state) => state.allUsers.users);
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    const response = await axios
      .get("https://randomuser.me/api/?results=100")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setUsers(response.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log("Users :", users);

  return (
    <div className="ui grid container">
     <UserComponent/>
    </div>
  );
};

export default ProfilePage;
