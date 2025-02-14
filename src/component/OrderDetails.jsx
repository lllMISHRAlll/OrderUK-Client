import React, { useContext } from "react";
import style from "../styles/CheckOut.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowLeft,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import AddedItems from "./AddedItems";
import { cartContext } from "../context/CartInfo";
import { useNavigate } from "react-router-dom";

export default function OrderDetails() {
  const { cartItem } = useContext(cartContext);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItem.reduce(
      (total, item) => total + item.price * item.itemQuantity,
      0
    );
  };

  const total = calculateTotal();
  const salesTax = (total * 0.05).toFixed(2);
  const finalTotal = (total + parseFloat(salesTax)).toFixed(2);

  const handleNavigateToPayment = () => {
    navigate("/payment");
  };

  return (
    <div className={style.orderDetailsmain}>
      <div className={style.header}>
        <FontAwesomeIcon
          className={style.leftArrow}
          icon={faArrowLeft}
          onClick={() => navigate("/productPage")}
        />
        <h2>Your Order Details</h2>
      </div>
      <div className={style.body}>
        <div className={style.leftBody}>
          {cartItem.map((obj, index) => (
            <AddedItems key={index} {...obj} />
          ))}
          <br />
          <div>
            <span>Notes</span>
            <input type="text" placeholder="Add order notes"></input>
          </div>
        </div>
        <div className={style.rightBody}>
          <div className={style.addressToggle}>
            <div className={style.deliveryText}>
              <FontAwesomeIcon
                className={style.loationIcon}
                icon={faLocationDot}
              />
              <p>
                Delivery Address
                <br />
                <span>Enter your address here</span>
              </p>
            </div>
            <FontAwesomeIcon
              className={style.rightArrowIcon}
              icon={faAngleRight}
              onClick={() => navigate("/address")}
            />
          </div>
          <div className={style.itemsPrice}>
            <div>
              <p>Items</p>
              <p>₹ {total}</p>
            </div>
            <div>
              <p>Sales tax</p>
              <p>₹ {salesTax}</p>
            </div>
          </div>
          <div className={style.totalPrice}>
            <p>Subtotal</p>
            <span>₹ {finalTotal}</span>
          </div>
          <button
            className={style.paymentMthodBtn}
            type="submit"
            onClick={handleNavigateToPayment}
          >
            Choose Payment Method
          </button>
        </div>
      </div>
    </div>
  );
}
