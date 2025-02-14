import React from "react";
import menuStyle from "../styles/Menu&Dishes.module.css";
import Dishes from "./Dishes";

export default function Menu({ title, dishes }) {
  return (
    <div className={menuStyle.main}>
      <h1>{title}</h1>
      <div className={menuStyle.dishesMain}>
        {dishes.map((dish, index) => (
          <Dishes key={index} {...dish} />
        ))}
      </div>
    </div>
  );
}
