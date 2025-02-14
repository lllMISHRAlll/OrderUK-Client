import React from "react";
import style from "../styles/Address.module.css";
import PreHeader from "../component/PreHeader";
import HeaderNav from "../component/HeaderNavigation";
import Footer from "../component/Footer";
import AddressBucket from "../component/AddressBucket";

export default function Address() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <PreHeader />
        <HeaderNav />
        <AddressBucket />
      </div>
      <Footer />
    </div>
  );
}
