import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/loginSlice";

const Login = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDeafult();

    dispatch(
      login({
        username: username,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <>
      <div className="container text-white login">
        <form
          className="login-form col-lg-6 mx-auto text-left p-3"
          onSubmit={(event) => handleSubmit(event)}
        >
          <h2>Login Here</h2>
          <label className="name p-1">Enter Username</label>
          <br></br>
          <input
            type="name"
            placeholder="Username"
            value={username}
            onChange={(event) => setName(event.target.value)}
          />
          <br></br>

          <label className="email p-1">Enter Email</label>
          <br></br>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br></br>

          <label className="password p-1">Create Password</label>
          <br></br>
          <input
            className="password"
            placeholder="********"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br></br>
          <br></br>
           <Link to="/homepage">
           <button type="submit" className="btns">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
