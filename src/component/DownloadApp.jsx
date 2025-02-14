import React from "react";
import s from "../styles/HomePage.module.css";

export default function DownloadApp() {
  return (
    <div className={s.downloadAppContainer}>
      <div className={s.textContent}>
        <div className={s.orderingWrapper}>
          <img src="assets/Images/Order UK.png" />
          <h1>ing is more</h1>
        </div>
        <div className={s.persoInstant}>
          <p>
            <a>Personalised</a> & Instant
          </p>
        </div>
        <p className={s.downloadText}>
          Download the Order.uk app for faster ordering
        </p>
        <div className={s.AppStoreWrapper}>
          <img
            className={s.footerStore}
            src="/public/assets/Images/app-store-badge.png"
          />
          <img
            className={s.footerStore}
            src="/public/assets/Images/GogglePlay Badge.png"
          />
        </div>
      </div>
      <img
        className={s.friendsLaughing1}
        src="assets/Images/Friends-Laughing.png"
      />
      <img
        className={s.friendsLaughing2}
        src="assets/Images/Friends-Laughing.png"
      />
    </div>
  );
}
