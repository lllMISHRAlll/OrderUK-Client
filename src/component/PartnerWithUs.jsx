import React from "react";
import style from "../styles/HomePage.module.css";
import textWraperStyle from "../styles/TilesModification.module.css";
import DiscountCardTile from "./DiscountCardTile";

export default function PartnerWithUs() {
  const PartnerWithUsInfo = [
    {
      image: "assets/Images/Partner_With_US_Images/PartnerWithUS.png",
      earnMore: "Earn more with lower fees",
      spanTxt: "Signup as a businesss",
      orangeBtn: textWraperStyle.orangeBtn,
      textWrap: textWraperStyle.textWrapPartnerWithUs,
      earnMoreWrapper: textWraperStyle.earnMoreWrapper,
      partnerWithUsTile: style.partnerWithUsTile,
      partnerWithUs: "Partner With Us",
    },
    ,
    {
      image: "assets/Images/Partner_With_US_Images/RideWIthUS.png",
      earnMore: "Avail exclusive perks",
      spanTxt: "Signup as a rider",
      orangeBtn: textWraperStyle.orangeBtn,
      textWrap: textWraperStyle.textWrapPartnerWithUs,
      earnMoreWrapper: textWraperStyle.earnMoreWrapper,
      partnerWithUsTile: style.partnerWithUsTile,
      partnerWithUs: "Ride With Us",
    },
  ];
  return (
    <div className={style.PartnerWithUsContainer}>
      {PartnerWithUsInfo.map((info, index) => (
        <DiscountCardTile key={index} {...info} />
      ))}
    </div>
  );
}
