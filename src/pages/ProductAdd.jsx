import React from "react";
import style from "../styles/userProfile.module.css";
import PreHeader from "../component/PreHeader";
import Footer from "../component/Footer";
import HeaderNav from "../component/HeaderNavigation";
import UserProfile from "../component/UserProfile";
import AddProducts from "../component/AddProducts";

export default function CheckOut() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <PreHeader />
        <HeaderNav />
        <AddProducts />
      </div>
      <Footer />
    </div>
  );
}
