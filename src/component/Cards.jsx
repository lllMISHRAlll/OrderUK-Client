import React from "react";
import style from "../styles/PopularCards.module.css";
import { useNavigate } from "react-router-dom";

export default function Cards(prop) {
  const {
    image,
    foodType,
    restaurantNumbers,
    classNameChange,
    restaurantName,
  } = prop;
  const navigate = useNavigate();
  const handleRestaurantClicked = () => {
    restaurantName &&
      navigate(`/productPage?restaurantName=${restaurantName}`, {
        state: { restaurantName: restaurantName },
      });
  };
  return (
    <div className={style.cardsWrapper} onClick={handleRestaurantClicked}>
      <img className={style.cardImg} src={image} alt="food" />
      <div className={classNameChange ? classNameChange : style.cardInfo}>
        <h5>{foodType || restaurantName}</h5>
        {restaurantNumbers && <p>{restaurantNumbers} restaurants</p>}
      </div>
    </div>
  );
}
