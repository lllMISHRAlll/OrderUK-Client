import React from "react";
import style from "../styles/App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className={`${style.footer} ${style.bgGrey}`}>
      <div className={style.footerUpper}>
        <div className={style.AppStoreContainer}>
          <img
            className={style.footerOrderUk}
            src="/assets/Images/FooterOrderUk.png"
          />
          <div className={style.AppStoreWrapper}>
            <img
              className={style.footerGplay}
              src="/assets/Images/app-store-badge.png"
            />
            <img
              className={style.footerAppStore}
              src="/assets/Images/GogglePlay Badge.png"
            />
          </div>
          <p>
            Company # 490039-445, Registered with <br />
            House of companies.
          </p>
        </div>
        <div className={style.subscribeContainer}>
          <h4>Get Exclusive Deals in your Inbox</h4>
          <div className={style.subscribeInput}>
            <input type="text" placeholder="youremail@gmail.com" />
            <button type="submit">Subscribe</button>
            <p>
              we wont spam, read our <a>email policy</a>
            </p>
          </div>

          <div className={style.socialMedia}>
            <FontAwesomeIcon className={style.faIcons} icon={faFacebook} />
            <FontAwesomeIcon className={style.faIcons} icon={faInstagram} />
            <FontAwesomeIcon className={style.faIcons} icon={faTiktok} />
            <FontAwesomeIcon className={style.faIcons} icon={faSnapchat} />
          </div>
        </div>
        <div className={style.allLinks}>
          <div className={style.legalPages}>
            <h3>legal Pages</h3>
            <a>Terms and conditions </a>
            <a>Privacy </a>
            <a>Cookies </a>
            <a>Modern Slavery Statement</a>
          </div>
          <div className={style.importantLinks}>
            <h3>Important Links</h3>
            <a>Get help</a>
            <a>Add your restaurant</a>
            <a>Sign up to deliver</a>
            <a>Create a business account</a>
          </div>
        </div>
      </div>
      <div className={style.footerLower}>
        <p className={style.copyRights}>
          Order.uk Copyright 2024, All Rights Reserved.
        </p>
        <p>Privacy Policy</p>
        <p>Terms </p>
        <p>Pricing </p>
        <p>Do not sell or share my personal information</p>
      </div>
    </div>
  );
}
