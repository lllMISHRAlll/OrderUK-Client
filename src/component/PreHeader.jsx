import React from "react";
import Style from "../styles/HomePage.module.css";
import {
  faBasketShopping,
  faCircleArrowDown,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserInfoContext } from "../context/UserInfo";
import { useContext } from "react";

export default function PreHeader() {
  const { cartToggle, SetcartToggle } = useContext(UserInfoContext);

  const handleCartClick = () => {
    SetcartToggle(!cartToggle);
  };

  return (
    <div className={Style.preHeaderContainer}>
      <div className={Style.preHeaderWrapper}>
        <p>
          ⭐ Get 5% Off your first order,
          <a href="#" className={Style.pointer}>
            Promo: ORDER5
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faLocationDot} />
          &nbsp; Regent Street, A4, A4201, London &nbsp;&nbsp;&nbsp;&nbsp;
          <button className={`${Style.changeLocation} ${Style.pointer}`}>
            Change Location
          </button>
        </p>
      </div>
      <div className={Style.cartToggle} onClick={handleCartClick}>
        <div className={Style.cartIcon}>
          <FontAwesomeIcon
            className={Style.basketIcon}
            icon={faBasketShopping}
          />
          <p>My Cart</p>
        </div>
        <div className={Style.verticalBarWrapper}>
          <div className={Style.verticalBar}></div>
          <div className={Style.verticalBar}></div>
        </div>

        <div className={Style.downArrowCart}>
          <FontAwesomeIcon icon={faCircleArrowDown} />
        </div>
      </div>
    </div>
  );
}
