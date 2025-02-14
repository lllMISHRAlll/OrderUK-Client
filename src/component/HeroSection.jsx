import React from "react";
import Style from "../styles/HomePage.module.css";
import OrderStatus from "./OrderStatus";
import style from "../styles/App.module.css";

export default function HeroSection() {
  const orderStatusData = [
    {
      orderStatus: "We’ve Received your order!",
      orderTrack: "Awaiting Restaurant acceptance",
    },
    {
      orderStatus: "Order Accepted!",
      orderTrack: "Your order will be delivered shortly",
      marginLeft: "marginLeftLarge",
    },
    {
      orderStatus: "Your Rider is nearby!",
      orderTrack: "They're almost there - get ready!",
      marginLeft: "marginLeftSmall",
    },
  ];

  return (
    <div className={`${Style.heroContainer} ${style.bgGrey}`}>
      <div className={Style.heroLeft}>
        <p>Order Restaurant food, takeaway and groceries.</p>
        <h2>
          Feast Your Senses,
          <br />
          <span>and Fresh</span>
        </h2>
        <p>Enter a postcode to see what we deliver</p>
        <div className={Style.heroInput}>
          <input type="text" placeholder="youremail@gmail.com" />
          <button type="submit">Subscribe</button>
        </div>
      </div>
      <div className={Style.heroRight}>
        <img className={Style.shape} src="assets/Images/Shape.png" />
        <img className={Style.img2} src="assets/Images/Img2.png" />
      </div>
      <img className={Style.img1} src="assets/Images/Img1.png" />
      <div className={Style.orderStatus}>
        {orderStatusData.map((status, index) => (
          <OrderStatus
            key={index}
            orderStatus={status.orderStatus}
            orderTrack={status.orderTrack}
            marginLeft={status.marginLeft}
          />
        ))}
      </div>
    </div>
  );
}
