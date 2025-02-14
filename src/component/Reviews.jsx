import React from "react";
import reviewStyle from "../styles/Reviews.module.css";
import { Rating } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function Reviews({ review }) {
  return (
    <div key={review.id} className={reviewStyle.reviewsContainer}>
      <div className={reviewStyle.reviewUserInfo}>
        <div className={reviewStyle.reviewUserImg}>
          <img
            src={
              review.imgSrc ??
              "/public/assets/Images/Review Assets/reviewUser1.png"
            }
            alt={review.name}
          />
          <div className={reviewStyle.verticalbar}></div>
          <p>
            {review.name} <br />
            <span>{review.location}</span>
          </p>
        </div>
        <div className={reviewStyle.reviewRatingsDates}>
          <Rating name="size-small" defaultValue={review.rating} size="small" />
          <p>
            <FontAwesomeIcon icon={faClock} /> &nbsp; {review.date}
          </p>
        </div>
      </div>
      <div className={reviewStyle.reviewText}>
        <p>{review.text}</p>
      </div>
    </div>
  );
}
