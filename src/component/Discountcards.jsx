import React from "react";
import { useLocation } from "react-router-dom";
import style from "../styles/DiscountCards.module.css";
import NavigationBar from "./NavigationBar";
import DiscountCardTile from "./DiscountCardTile";
import textWraperStyle from "../styles/TilesModification.module.css";

import firstOrderDiscount from "/public/assets/Images/FoodImages/first Order Discount.png";
import veganDiscount from "/public/assets/Images/FoodImages/Vegan Discount.png";
import freeIceCreamOffer from "/public/assets/Images/FoodImages/Free Ice Cream Offer.png";

export default function Discountcards() {
  const location = useLocation();
  const currentPath = location.pathname;

  const discountCardsHomePage = [
    {
      image: "assets/Images/Food_Tile_Images/Salad.png",
      discount: "-20%",
      restaurant: "Chef Burgers London",
      textWrap: textWraperStyle.textWrapExclusivDeal,
      spanTxt: "restaurant",
    },
    {
      image: "assets/Images/Food_Tile_Images/Salad.png",
      discount: "-20%",
      restaurant: "Grand Ai Cafe London",
      textWrap: textWraperStyle.textWrapExclusivDeal,
      spanTxt: "restaurant",
    },
    {
      image: "assets/Images/Food_Tile_Images/BUrgerKing.jpeg",
      discount: "-60%",
      restaurant: "Burger King",
      textWrap: textWraperStyle.textWrapExclusivDeal,
      spanTxt: "restaurant",
    },
  ];

  const discountCardsProductPage = [
    {
      image: firstOrderDiscount,
      discount: "-20%",
      spanTxt: "McDonald’s East London",
      offerDescription: "First Order Discount",
      textWrap: textWraperStyle.textWrapExclusivDeal,
      plusButton: textWraperStyle.plusButton,
      productPageTile: textWraperStyle.productPageTile,
      productPageTextWrap: textWraperStyle.productPageTextWrap,
    },
    {
      image: veganDiscount,
      discount: "-20%",
      spanTxt: "McDonald’s East London",
      offerDescription: "Vegan Discount",
      textWrap: textWraperStyle.textWrapExclusivDeal,
      plusButton: textWraperStyle.plusButton,
      productPageTile: textWraperStyle.productPageTile,
      productPageTextWrap: textWraperStyle.productPageTextWrap,
    },
    {
      image: veganDiscount,
      discount: "-20%",
      spanTxt: "McDonald’s East London",
      offerDescription: "Vegan Discount",
      textWrap: textWraperStyle.textWrapExclusivDeal,
      plusButton: textWraperStyle.plusButton,
      productPageTile: textWraperStyle.productPageTile,
      productPageTextWrap: textWraperStyle.productPageTextWrap,
    },
    {
      image: freeIceCreamOffer,
      discount: "-100%",
      spanTxt: "McDonald’s East London",
      offerDescription: "Free ice Cream Offer",
      textWrap: textWraperStyle.textWrapExclusivDeal,
      plusButton: textWraperStyle.plusButton,
      productPageTile: textWraperStyle.productPageTile,
      productPageTextWrap: textWraperStyle.productPageTextWrap,
    },
  ];

  const homePageDiscount = () => (
    <>
      <div className={style.DiscountcardsHead}>
        <h2>Up to -40% 🎊 Order.uk exclusive deals</h2>
        <NavigationBar
          navs={["Vegan", "Sushi", "Special Offers", "Pizza & food", "Others"]}
          routes={routes}
        />
      </div>
      <div className={style.DiscountcardsBody}>
        {discountCardsHomePage.map((info, index) => (
          <DiscountCardTile key={index} {...info} />
        ))}
      </div>
    </>
  );

  const productPageDiscount = () => (
    <div className={style.DiscountcardsBodyProductpage}>
      {discountCardsProductPage.map((info, index) => (
        <DiscountCardTile key={index} {...info} />
      ))}
    </div>
  );

  const routes = {
    // Vegan: "/vegan",
    // Sushi: "/sushi",
    // "Special Offers": "/specialOffers",
    // "Pizza & food": "/pizzaFood",
    // Others: "/others",
  };

  return (
    <div className={`${style.DiscountcardsWrapper} ${style.pointer}`}>
      {currentPath.includes("/") && homePageDiscount()}
      {currentPath.includes("/productPage") && productPageDiscount()}
    </div>
  );
}
