import React, { useContext, useEffect, useRef, useState } from "react";
import style from "../styles/UserProfile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import PaymentCard from "./PaymentCard";
import CardModal from "./CardModal";
import { UserInfoContext } from "../context/UserInfo";
import { toast } from "react-toastify";
import axios from "axios";
import { getBaseURI } from "../utils/config.js";

export default function UserProfile() {
  const ref = useRef();
  const [cardModalToggle, setcardModalToggle] = useState(false);
  const [editInfo, setEditInfo] = useState(false);
  const [editCardInfo, setEditCardInfo] = useState(false);
  const [cards, setCards] = useState([]);
  const { userInfo } = useContext(UserInfoContext);
  const [cardData, setCardData] = useState({
    cardNumber: "",
    expDate: "",
    cvv: "",
    nameOnCard: "",
  });
  const token = localStorage.getItem("token");

  const fetchCards = async () => {
    if (!token) return toast.error("No authentication token found.");

    try {
      const { data } = await axios.get(`${getBaseURI()}/api/card/get`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const cardsDetails = data?.card?.map((ele) => {
        return {
          ...ele,
          cardNumber: ele.cardInfo,
        };
      });

      setCards(Array.isArray(cardsDetails) ? cardsDetails : []);
    } catch (error) {
      toast.error("Failed to fetch Cards.");
      setCards([]);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  useEffect(() => {
    if (!editInfo && ref.current) {
      ref.current.focus();
    }
  }, [editInfo]);

  const handleEdit = () => {
    if (!editInfo) {
      //not-edit flow
      return setEditInfo(!editInfo);
    }

    //edit flow

    try {
      //take payload
      //call api
      //show success toast
      setEditInfo(!editInfo);
    } catch (error) {}
  };

  const handleCardModal = (card) => {
    if (card) {
      setEditCardInfo(true);
      setCardData(card);
    } else {
      setCardData({
        cardNumber: "",
        expDate: "",
        cvv: "",
        nameOnCard: "",
      });
    }
    setcardModalToggle(true);
  };

  return (
    <div className={style.UserProfileMain}>
      <h2>
        <FontAwesomeIcon className={style.leftArrow} icon={faArrowLeft} />
        &nbsp;&nbsp; My Profile
      </h2>
      <div className={style.head}>
        <div>
          <img src="/assets/Images/User/User1.jpeg" alt="User" />
          <h3>{userInfo?.userName || "User Name"}</h3>
        </div>

        <button type="button" onClick={handleEdit}>
          {editInfo ? "Save" : "Edit"}
        </button>
      </div>
      <div className={style.body}>
        <form>
          <div>
            <label>Full Name</label>
            <br />
            <input
              ref={ref}
              type="text"
              disabled={!editInfo}
              value={userInfo?.userName || "User Name"}
            />
          </div>
          <div>
            <label>Email Address</label>
            <br />
            <input
              type="text"
              disabled={!editInfo}
              value={userInfo?.email || "User Email"}
            />
          </div>
          <div>
            <label>Gender</label>
            <br />
            <select name="Gender" disabled={!editInfo}>
              <option value="select Gender">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label>Country</label>
            <br />
            <input type="text" disabled={!editInfo} />
          </div>
        </form>
      </div>
      <div className={style.paymentCards}>
        {cards.length > 0 ? (
          cards.map((card, index) => {
            return (
              <PaymentCard
                handleCardModal={handleCardModal}
                key={index}
                card={card}
              />
            );
          })
        ) : (
          <p>No Cards Available</p>
        )}

        <div className={style.addcard} onClick={() => handleCardModal()}>
          <FontAwesomeIcon className={style.plus} icon={faPlus} />
          <p>Add New Card</p>
        </div>
      </div>
      <CardModal
        isOpen={cardModalToggle}
        onClose={() => setcardModalToggle(false)}
        handleCardModal={handleCardModal}
        cardData={cardData}
        setCardData={setCardData}
        setCards={setCards}
        cards={cards}
        editCardInfo={editCardInfo}
        fetchCards={fetchCards}
      />
    </div>
  );
}
