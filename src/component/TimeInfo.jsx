import React from "react";
import style from "../styles/ProductPage.module.css";

export default function TimeInfo() {
  return (
    <div className={style.timeInfoMain}>
      <div className={`${style.deliveryInfo} ${style.sameSize}`}>
        <h1>Delivery information </h1>

        <p>
          <span>Monday:</span> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Tuesday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Wednesday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Thursday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Friday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Saturday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Sunday:</span> 8:00 AM–12:00 AM
        </p>

        <span>Estimated time until delivery: 20 min</span>
      </div>
      <div className={`${style.contactInfo} ${style.sameSize}`}>
        <h1>Contact information </h1>
        <p>If you have allergies or other dietary</p>
        <p>restrictions, please contact the restaurant. The</p>
        <p>restaurant will provide food-specific</p>
        <p>information upon request.</p>
        <span>Phone number</span>
        <p>+934443-43</p>
        <span>Website</span>
        <p>http://mcdonalds.uk/</p>
      </div>
      <div className={`${style.operationalInfo} ${style.sameSize}`}>
        <h1>Operational Times </h1>

        <p>
          <span>Monday:</span> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Tuesday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Wednesday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Thursday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Friday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Saturday:</span> 8:00 AM–3:00 AM
        </p>
        <p>
          <span>Sunday:</span> 8:00 AM–3:00 AM
        </p>
      </div>
    </div>
  );
}
