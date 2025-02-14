import React, { useContext, useState } from "react";
import style from "../styles/App.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserInfoContext } from "../context/UserInfo";
import { getBaseURI } from "../utils/config.js";

export default function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const [signUp, setSignUp] = useState({
    name: null,
    phone: null,
    email: null,
    password: null,
  });

  const handleContinue = async (e) => {
    e.preventDefault();
    if (!signUp.name || !signUp.phone || !signUp.email || !signUp.password) {
      alert("Please fill in all fields!");
      return;
    }

    const payload = {
      userName: signUp.name,
      email: signUp.email,
      phoneNumber: Number(signUp.phone),
      password: signUp.password,
    };

    try {
      const res = await axios.post(`${getBaseURI()}/api/user/signup`, payload);
      console.log(res);

      setSignUp({
        name: "",
        phone: "",
        email: "",
        password: "",
      });
      setUserInfo(payload);

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
          src="/assets/Images/Order UK.png"
          alt="Order UK"
        />
        <h1>Welcome &#128075;</h1>
        <p>
          Today is a new day. It's your day. You shape it.
          <br /> Sign up to start ordering.
        </p>
        <form onSubmit={handleContinue}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            placeholder="e.g., John A"
            value={signUp.name}
            onChange={(e) => setSignUp({ ...signUp, name: e.target.value })}
            required
          />
          <br />
          <br />

          <label htmlFor="phone">Phone number</label>
          <br />
          <input
            type="tel"
            id="phone"
            placeholder="Enter your 10-digit mobile number"
            value={signUp.phone}
            // onChange={handlePhoneChange}
            onChange={(e) => setSignUp({ ...signUp, phone: e.target.value })}
            // pattern="\d{10}"
            required
          />
          <br />
          <br />

          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="example@email.com"
            value={signUp.email}
            onChange={(e) => setSignUp({ ...signUp, email: e.target.value })}
            required
          />
          <br />
          <br />

          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="At least 8 characters"
            value={signUp.password}
            onChange={(e) => setSignUp({ ...signUp, password: e.target.value })}
            required
            minLength="8"
          />
          <br />
          <br />

          <button type="submit">Continue</button>

          <p className={style.signInAnchor}>
            Already have an account?
            <a href="#" onClick={() => navigate("/logIn")}>
              Sign in
            </a>
          </p>
        </form>
      </div>

      <div className={style.homeImgContainer}>
        <img src="/assets/Images/HomeImage.png" alt="Home" />
      </div>
    </div>
  );
}
