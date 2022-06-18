import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import Logout from "./Logout";
import { selectMember } from "../redux/loginSlice";

const Home = () => {
    const member = useSelector(selectMember)
    return (
      <div>
          {member ? <Logout/> : <Login/>}
      </div>
    )
}

export default Home;