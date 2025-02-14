import React from "react";
import style from "../styles/CheckOut.module.css";
import PreHeader from "../component/PreHeader";
import Footer from "../component/Footer";
import HeaderNav from "../component/HeaderNavigation";
import OrderDetails from "../component/OrderDetails";
import PopularCards from "../component/PopularCards";

export default function CheckOut() {
  const cardsInfoPopularrestaurants = [
    {
      image: "assets/Images/restaurants//MacD.png",
      classNameChange: style.similarRestaurants,
      restaurantName: "Mac Donald's London",
    },
    {
      image: "assets/Images/restaurants//PAPA Jhons.png",
      classNameChange: style.similarRestaurants,
      restaurantName: "PAPA Jhons",
    },
    {
      image: "assets/Images/restaurants//KFC.png",
      classNameChange: style.similarRestaurants,
      restaurantName: "KFC West London",
    },
    {
      image: "assets/Images/restaurants//TexasChicken.png",
      classNameChange: style.similarRestaurants,
      restaurantName: "TexasChicken",
    },
    {
      image: "assets/Images/restaurants//BurgerKing.png",
      classNameChange: style.similarRestaurants,
      restaurantName: "Burger King",
    },
    {
      image: "assets/Images/restaurants//Shaurma.png",
      classNameChange: style.similarRestaurants,
      restaurantName: "No.1 Shaurma",
    },
  ];
  return (
    <div className={style.main}>
      <div className={style.container}>
        <PreHeader />
        <HeaderNav />
        <OrderDetails />
        <PopularCards
          title={"Similar Restaurants"}
          cardsInfoKeys={cardsInfoPopularrestaurants}
        />
      </div>
      <Footer />
    </div>
  );
}
