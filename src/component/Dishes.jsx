import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import dishStyle from "../styles/Menu&Dishes.module.css";
import { cartContext } from "../context/CartInfo";

export default function Dishes({ price, dishName, dishQuantity, image }) {
  const { addToCart } = useContext(cartContext);

  const handleDishClick = () => {
    addToCart({
      price,
      itemname: dishName,
      itemQuantity: 1,
    });
  };

  return (
    <div className={dishStyle.dishContainer}>
      <div className={dishStyle.dishWrapper}>
        <div className={dishStyle.dishText}>
          <h3>{dishName}</h3>
          <p>{dishQuantity}</p>
          <span>₹ {price}</span>
        </div>
        <div className={dishStyle.imageAndBtn}>
          <img src={image} alt={dishName} />
          <button
            className={dishStyle.pointer}
            type="button"
            onClick={handleDishClick}
          >
            <FontAwesomeIcon icon={faCirclePlus} />
          </button>
        </div>
      </div>
    </div>
  );
}
