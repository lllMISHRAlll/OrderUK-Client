import React from "react";
import mapStyle from "../styles/Map.module.css";

export default function MapInfo() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1522135.2751583152!2d139.7698121!3d35.50924045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e1!3m2!1sen!2sin!4v1738338501994!5m2!1sen!2sin"
      width="100%"
      height="450"
      loading="lazy"
      allowFullScreen
    ></iframe>
  );
}
