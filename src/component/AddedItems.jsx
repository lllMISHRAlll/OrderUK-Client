import React from "react";
import style from "../styles/CheckOut.module.css";

export default function AddedItems({ image, itemname, itemQuantity, price }) {
  return (
    <div className={style.itemMain}>
      <div className={style.itemMainLeft}>
        <div className={style.imageDisplay}>
          <img src={image} alt="Dish IMG" />
        </div>
        <div className={style.itemName}>
          <h4>{itemname || "Item Name Here"}</h4>
          <p>{itemQuantity || "Item Quantity"}x Item</p>
        </div>
      </div>

      <div className={style.itemPrice}>
        <p>₹ {price || "XXX"}</p>
      </div>
    </div>
  );
}
