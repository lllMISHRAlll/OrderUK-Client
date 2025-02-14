import React from "react";
import style from "../styles/OrderStatus.module.css";

export default function OrderStatus({ marginLeft, orderStatus, orderTrack }) {
  return (
    <div
      className={`${style.OrderStatusCotainer} ${
        marginLeft ? style[marginLeft] : ""
      }`}
    >
      <img src="assets/Images/Order UK.png" />
      <h2>{orderStatus}</h2>
      <p>{orderTrack}</p>
    </div>
  );
}
