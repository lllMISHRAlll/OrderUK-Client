import React from "react";
import style from "../styles/KnowMore.module.css";

export default function GreyCards({ text1, text2, img }) {
  return (
    <div className={style.CardContainer}>
      <h4>{text1 || "Default Title"}</h4>
      <img src={img || "default-image-path.png"} alt="Card Icon" />
      <p>{text2 || "Default Description"}</p>
    </div>
  );
}
