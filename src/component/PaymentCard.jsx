import React from "react";
import style from "../styles/UserProfile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faPencil } from "@fortawesome/free-solid-svg-icons";

export default function PaymentCard({ handleCardModal, card }) {
  const maskCardNumber = (cardNumber) => {
    const last4Digits = cardNumber?.slice(-4) ?? "";
    const maskedDigits = cardNumber?.slice(0, -4).replace(/\d/g, "X") ?? "";
    return `${maskedDigits}${last4Digits}`;
  };

  return (
    <div className={style.cardWrapper}>
      <FontAwesomeIcon className={style.cardIcon} icon={faCreditCard} />
      <h5>
        {maskCardNumber(card.cardInfo)} <br />
        <span>{card.nameOnCard}</span>
      </h5>
      <FontAwesomeIcon
        className={style.editIcon}
        icon={faPencil}
        onClick={() => handleCardModal(card)}
      />
    </div>
  );
}
