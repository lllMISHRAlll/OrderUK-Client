import React from "react";
import style from "../styles/DiscountCards.module.css";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

export default function DiscountCardTile({
  image,
  discount,
  restaurant,
  orangeBtn,
  textWrap,
  earnMore,
  earnMoreWrapper,
  partnerWithUsTile,
  spanTxt,
  partnerWithUs,
  plusButton,
  productPageTile,
  offerDescription,
  productPageTextWrap,
}) {
  const location = useLocation();

  return (
    <div
      className={productPageTile || partnerWithUsTile || style.discountCardTile}
      style={{
        backgroundImage: `linear-gradient(to bottom left, transparent 40%, black),url(${image})`,
      }}
    >
      <div className={earnMoreWrapper || style.discountNumber}>
        <div>
          <p>{discount || earnMore}</p>
        </div>
      </div>
      <div className={productPageTextWrap || textWrap}>
        <span>{location.state?.restaurantName || spanTxt}</span>
        <p> {offerDescription || partnerWithUs || restaurant} </p>
        {orangeBtn && (
          <button className={`${orangeBtn} ${style.pointer}`} type="submit">
            Get Started
          </button>
        )}
        {plusButton && (
          <button className={`${plusButton} ${style.pointer}`} type="submit">
            <FontAwesomeIcon icon={faCirclePlus} />{" "}
          </button>
        )}
      </div>
    </div>
  );
}
