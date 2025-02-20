import React, { useContext } from "react";
import cartStyle from "../styles/Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faCircleArrowDown,
  faCircleArrowRight,
  faPersonBiking,
  faShareNodes,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import ItemInCart from "./ItemInCart";
import { cartContext } from "../context/CartInfo";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const { cartItem } = useContext(cartContext);

  const calculateTotal = () => {
    return cartItem.reduce(
      (total, item) => total + item.price * item.itemQuantity,
      0
    );
  };

  const total = calculateTotal();

  const handleCheckOut = () => {
    sessionStorage.setItem("cartItem", JSON.stringify(cartItem));
    navigate("/checkout");
  };

  return (
    <div className={cartStyle.container}>
      <div className={cartStyle.shareLink}>
        <div className={cartStyle.shareIcon}>
          <FontAwesomeIcon icon={faShareNodes} />
        </div>
        <p>
          Share this cart <br />
          with your friends
        </p>
        <button type="submit">Copy Link</button>
      </div>
      <div className={cartStyle.main}>
        <div className={cartStyle.head}>
          <FontAwesomeIcon
            className={cartStyle.basketIcon}
            icon={faBasketShopping}
          />
          <p>My Basket</p>
        </div>
        <div className={cartStyle.addedItems}>
          {cartItem.map((item, index) => (
            <ItemInCart key={index} item={item} />
          ))}
        </div>
        <div className={cartStyle.totalPrice}>
          <div>
            <p>Sub Total: </p>
            <span>₹ {total}</span>
          </div>
          <div>
            <p>Discounts:</p>
            <span>-₹ 3.00</span>
          </div>
          <div>
            <p>Delivery Fee:</p>
            <span>₹ 3.00</span>
          </div>
        </div>
        <button className={cartStyle.totalPriceBtn} type="submit">
          Total to pay &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          <span>₹ {total + 3 - 3}</span>
        </button>
        <div className={cartStyle.freeItemAndapplyCouponCode}>
          <p>Choose your free item..</p>
          <button type="submit">
            <FontAwesomeIcon
              icon={faCircleArrowDown}
              style={{ color: "grey" }}
            />
          </button>
        </div>
        <div className={cartStyle.freeItemAndapplyCouponCode}>
          <p>Apply Coupon Code here</p>
          <button type="submit">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "green" }}
            />
          </button>
        </div>
        <div className={cartStyle.deliveryTime}>
          <div className={cartStyle.deliveryTimeDisplay}>
            <FontAwesomeIcon
              icon={faPersonBiking}
              style={{ color: "green", fontSize: "1.4rem" }}
            />
            <h4>Delivery</h4>
            <p>Starts at 17:50</p>
          </div>
          <div className={cartStyle.verticalBar} />
          <div className={cartStyle.collectionTimeDisplay}>
            <FontAwesomeIcon
              icon={faShop}
              style={{ color: "green", fontSize: "1.4rem" }}
            />
            <h4>Collection</h4>
            <p>Starts at 17:50</p>
          </div>
        </div>
        <button
          className={cartStyle.checkOutBtn}
          type="submit"
          onClick={handleCheckOut}
        >
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            style={{ color: "white" }}
          />
          &nbsp;&nbsp; Checkout!
        </button>
      </div>
    </div>
  );
}
