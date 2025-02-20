import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Style from "../styles/HomePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./NavigationBar";
import { UserInfoContext } from "../context/UserInfo";

const HeaderNav = () => {
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const navigate = useNavigate();

  const handleNavigation = (navItem) => {
    if (navItem === "Restaurants") {
      navigate("/productPage");
    }
  };

  const handleLoginSignup = () => {
    if (userInfo?.userName) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setUserInfo(null);
    navigate("/login");
    toast.success("logout successfull");
  };

  console.log("suer", userInfo);

  return (
    <header className={Style.header}>
      <Link to="/">
        <img src="/assets/Images/Order UK.png" alt="Order UK" />
      </Link>
      <NavigationBar
        navs={[
          "Home",
          "Browse Menu",
          "Special Offers",
          "Restaurants",
          "Track Order",
        ]}
        handleNavigation={handleNavigation}
      />
      <button
        onClick={handleLoginSignup}
        className={`${Style.loginSignUpBtn} ${Style.pointer}`}
      >
        <FontAwesomeIcon className={Style.userIcon} icon={faUser} />
        {userInfo ? `Hey ${userInfo.userName.split(" ")[0]}` : "Login / Signup"}
      </button>
      {userInfo && (
        <button
          className={`${Style.loginSignUpBtn} ${Style.pointer}`}
          onClick={handleLogOut}
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default HeaderNav;
