import React, { useState } from "react";
import style from "../styles/App.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getBaseURI } from "../utils/config.js";

export default function LogIn() {
  const [login, setLogin] = useState({
    email: null,
    password: null,
  });
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleContinue = async (e) => {
    e.preventDefault();
    if (!login.email || !login.password) {
      alert("Please fill in all fields!");
      return;
    }

    console.log(login);

    const payload = {
      email: login.email,
      password: login.password,
    };

    try {
      const res = await axios.post(`${getBaseURI()}/api/user/login`, payload);
      localStorage.setItem("token", res.data.token);

      setLogin({
        email: "",
        password: "",
      });

      navigate("/");
    } catch (error) {
      setError("Something went wrong");
    }
  };
  return (
    <div className={style.hero}>
      <div className={style.signUpLogIn}>
        <img
          className={style.OrderUkImg}
          src="/public/assets/Images/Order UK.png"
          alt="Order UK"
        />
        <h1>Welcome Back &#128075;</h1>
        <p>
          Today is a new day. It's your day. You shape it.
          <br /> Sign up to start ordering.
        </p>
        <form onSubmit={handleContinue}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="Example@email.com"
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />

          <input
            type="password"
            id="password"
            placeholder="At least 8 characters"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <br />
          <button type="submit">Continue</button>
          <p className={style.signInAnchor}>
            Don't you have an account?
            <a href="#" onClick={() => navigate("/signup")}>
              Sign Up
            </a>
          </p>
        </form>
      </div>
      <div className={style.homeImgContainer}>
        <img src="/public/assets/Images/HomeImage.png" alt="Home" />
      </div>
    </div>
  );
}
