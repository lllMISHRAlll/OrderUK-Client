import React from "react";
import style from "../styles/PopularCards.module.css";
import Cards from "./Cards";

export default function PopularCards({ title, cardsInfoKeys }) {
  return (
    <div className={style.popularCategories}>
      <h2>{title}</h2>
      <div className={style.CardsContainer}>
        {cardsInfoKeys.map((cardInfo, index) => (
          <Cards key={index} {...cardInfo} />
        ))}
      </div>
    </div>
  );
}
