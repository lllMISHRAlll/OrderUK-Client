import React, { useState } from "react";
import reviewStyle from "../styles/Reviews.module.css";
import { Rating } from "@mui/material";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Reviews from "./Reviews";
export default function CustomerReviews() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const reviews = [
    {
      id: 1,
      imgSrc: "/assets/Images/Review Assets/reviewUser1.png",
      name: "St Glx",
      location: "South London",
      rating: 5,
      date: "24th September, 2023",
      text: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    },
    {
      id: 2,
      imgSrc: null,
      name: "Jane Doe",
      location: "New York, USA",
      rating: 4,
      date: "10th October, 2023",
      text: "Great service, but the waiting time was slightly longer than expected. The food quality was excellent.",
    },
    {
      id: 3,
      imgSrc: null,
      name: "John Smith",
      location: "Berlin, Germany",
      rating: 5,
      date: "5th November, 2023",
      text: "A very pleasant experience. The staff was very professional, and the atmosphere was great.",
    },
    {
      id: 4,
      imgSrc: null,
      name: "Jane mOKS",
      location: "New York, USA",
      rating: 4,
      date: "10th October, 2023",
      text: "Great service, but the waiting time was slightly longer than expected. The food quality was excellent.",
    },
    {
      id: 5,
      imgSrc: null,
      name: "John nwchi",
      location: "TOKYO, Germany",
      rating: 2,
      date: "19th November, 2023",
      text: "DESC.",
    },
  ];

  return (
    <div className={reviewStyle.main}>
      <div className={reviewStyle.reviewHeader}>
        <h1>Customer Reviews</h1>
        <div className={reviewStyle.buttons}>
          <FontAwesomeIcon
            className={reviewStyle.btnIcons}
            icon={faAngleLeft}
            onClick={() =>
              setCurrentIdx((prev) =>
                prev === 0 ? 0 : (prev - 1) % reviews.length
              )
            }
          />
          <FontAwesomeIcon
            className={reviewStyle.btnIcons}
            icon={faAngleRight}
            onClick={() =>
              setCurrentIdx((prev) =>
                prev + 3 === reviews.length ? 0 : prev + 1
              )
            }
          />
        </div>
      </div>
      <div className={reviewStyle.reviewBody}>
        {reviews.slice(currentIdx, 3).map((review) => (
          <Reviews review={review} />
        ))}
      </div>
      <div className={reviewStyle.ratingDisplay}>
        <h1>3.4</h1>
        <Rating name="size-small" defaultValue={3.4} size="small" />
        <p>1,360 reviews</p>
      </div>
    </div>
  );
}
