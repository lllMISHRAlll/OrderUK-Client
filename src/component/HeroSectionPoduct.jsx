import React from "react";
import style from "../styles/ProductPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faClock,
  faMagnifyingGlass,
  faPersonBiking,
} from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";

export default function HeroSectionProduct() {
  const location = useLocation();
  const searchParams = location?.search?.split("=")[1];

  return (
    <div
      className={style.heroMain}
      style={{
        backgroundImage: `url("/assets/Images/FoodImages/burger.png")`,
      }}
    >
      <div className={style.upper}>
        <div className={style.restaurantInfo}>
          <p>I'm lovin' it!</p>
          <h3>{decodeURIComponent(searchParams)}</h3>
          <div className={style.miniWrapper}>
            <span>
              <FontAwesomeIcon icon={faClipboardList} />
              &nbsp; Minimum Order: 12 GBP
            </span>
            <span>
              <FontAwesomeIcon icon={faPersonBiking} />
              &nbsp; Delivery in 20-25 Minutes
            </span>
          </div>
        </div>
        <div className={style.dishImgage}>
          <div className={style.dishImageWrapper}>
            <img src="/assets/Images/FoodImages/burger.png" />
          </div>
          <div className={style.ratingDisplay}>
            <h1>3.4</h1>
            <Rating name="size-small" defaultValue={3.4} size="small" />
            <p>1,360 reviews</p>
          </div>
        </div>
      </div>
      <div className={style.openTill}>
        <FontAwesomeIcon icon={faClock} /> &nbsp; Open until 3:00 AM
      </div>
      <div className={style.footer}>
        <h1>All Offers from McDonald’s East London</h1>
        <div className={style.inputWrapper}>
          <FontAwesomeIcon
            className={style.searchIcon}
            icon={faMagnifyingGlass}
          />
          <input type="input" placeholder="Search from menu..." />
        </div>
      </div>
    </div>
  );
}
