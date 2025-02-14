import React, { useState } from "react";
import style from "../styles/Modal.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { getBaseURI } from "../utils/config.js";

export default function CardModal({
  isOpen,
  onClose,
  setCardData,
  cardData,
  setCards,
  fetchCards,
}) {
  const token = localStorage.getItem("token");
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber" && value.length > 16) return;

    setCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRemove = async () => {
    try {
      const cardId = cardData?._id;
      await axios.delete(`${getBaseURI()}/api/card/delete/${cardId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Card Deleted successfully");
    } catch (error) {
      console.error("err", error);
      toast.error("Failed to Delete Card.");
    }
    fetchCards();
    onClose();
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      if (cardData?._id) {
        const cardId = cardData?._id;
        const payload = {
          cardInfo: cardData.cardNumber,
          cvv: cardData.cvv,
          expDate: cardData.expDate,
          nameOnCard: cardData.nameOnCard,
        };
        await axios.patch(
          `${getBaseURI()}/api/card/update/${cardId}`,
          payload,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        toast.success("Card updated successfully");
      } else {
        const payload = {
          cardInfo: cardData.cardNumber,
          cvv: cardData.cvv,
          expDate: cardData.expDate,
          nameOnCard: cardData.nameOnCard,
        };
        await axios.post(`${getBaseURI()}/api/card/add`, payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Card added successfully");
      }
    } catch (error) {
      console.error("err", error);
      toast.error("Failed to Add Card.");
    }
    onClose();
    fetchCards();
  };

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <h2>{cardData?._id ? "Edit Card Details" : "Add card"}</h2>
        <form className={style.cardForm} onSubmit={handleSave}>
          <div>
            <label>Card Info</label>
            <input
              name="cardNumber"
              type="number"
              placeholder="Card Number"
              value={cardData.cardNumber}
              onChange={handleChange}
              maxLength={16}
            />
          </div>
          <div>
            <label>Expiration Date</label>
            <input
              name="expDate"
              type="text"
              placeholder="MM/YY"
              value={cardData.expDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>CVV</label>
            <input
              name="cvv"
              type="text"
              placeholder="CVV"
              value={cardData.cvv}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Name on Card</label>
            <input
              name="nameOnCard"
              type="text"
              placeholder="Cardholder Name"
              value={cardData.nameOnCard}
              onChange={handleChange}
            />
          </div>
        </form>
        <div className={style.buttonGroup}>
          {cardData?._id && (
            <button className={style.cancel} onClick={handleRemove}>
              Remove
            </button>
          )}

          <button className={style.cancel} onClick={onClose}>
            Cancel
          </button>
          <button className={style.save} type="submit" onClick={handleSave}>
            {cardData?._id ? "save" : "Add Card"}
          </button>
        </div>
      </div>
    </div>
  );
}
