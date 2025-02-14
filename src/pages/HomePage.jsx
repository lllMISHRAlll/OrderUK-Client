import React from "react";
import PreHeader from "../component/PreHeader";
import homeStyle from "../styles/HomePage.module.css";
import style from "../styles/PopularCards.module.css";
import HeaderNav from "../component/HeaderNavigation";
import HeroSection from "../component/HeroSection";
import Footer from "../component/Footer";
import Discountcards from "../component/Discountcards";
import PopularCards from "../component/PopularCards";
import DownloadApp from "../component/DownloadApp";
import PartnerWithUs from "../component/PartnerWithUs";
import KnowMore from "../component/KnowMore";

export default function HomePage() {
  const cardsInfoPopularcatagories = [
    {
      image: "assets/Images/Food_Tile_Images//Burger and FastFood.png",
      foodType: "Burger and FastFood",
      restaurantNumbers: "21",
    },
    {
      image: "assets/Images/Food_Tile_Images//saladDish.png",
      foodType: "Salad",
      restaurantNumbers: "15",
    },
    {
      image: "assets/Images/Food_Tile_Images//pasta.png",
      foodType: "pasta",
      restaurantNumbers: "21",
    },
    {
      image: "assets/Images/Food_Tile_Images//pizza.png",
      foodType: "pizza",
      restaurantNumbers: "21",
    },
    {
      image: "assets/Images/Food_Tile_Images//breakfast.png",
      foodType: "breakfast",
      restaurantNumbers: "21",
    },
    {
      image: "assets/Images/Food_Tile_Images//soup.png",
      foodType: "Soup",
      restaurantNumbers: "21",
    },
  ];

  const cardsInfoPopularrestaurants = [
    {
      image: "assets/Images/restaurants//MacD.png",
      classNameChange: style.popularRestaurants,
      restaurantName: "Mac Donald's London",
    },
    {
      image: "assets/Images/restaurants//PAPA Jhons.png",
      classNameChange: style.popularRestaurants,
      restaurantName: "PAPA Jhons",
    },
    {
      image: "assets/Images/restaurants//KFC.png",
      classNameChange: style.popularRestaurants,
      restaurantName: "KFC West London",
    },
    {
      image: "assets/Images/restaurants//TexasChicken.png",
      classNameChange: style.popularRestaurants,
      restaurantName: "TexasChicken",
    },
    {
      image: "assets/Images/restaurants//BurgerKing.png",
      classNameChange: style.popularRestaurants,
      restaurantName: "Burger King",
    },
    {
      image: "assets/Images/restaurants//Shaurma.png",
      classNameChange: style.popularRestaurants,
      restaurantName: "No.1 Shaurma",
    },
  ];
  return (
    <div className={homeStyle.main}>
      <div className={homeStyle.container}>
        <PreHeader />
        <HeaderNav />
        <HeroSection />
        <Discountcards />
        <PopularCards
          title={"Order.uk Popular Categories 🤩"}
          cardsInfoKeys={cardsInfoPopularcatagories}
        />
        <PopularCards
          title={"Popular Restaurants"}
          cardsInfoKeys={cardsInfoPopularrestaurants}
        />
        <DownloadApp />
        <PartnerWithUs />
        <KnowMore />
        <div className={homeStyle.countDisplay}>
          <div className={homeStyle.countWrapper}>
            <h1>546+</h1>
            <p>Registered Riders</p>
          </div>
          <div className={homeStyle.bar}></div>
          <div className={homeStyle.countWrapper}>
            <h1>789,900+</h1>
            <p>Orders Delivered</p>
          </div>
          <div className={homeStyle.bar}></div>
          <div className={homeStyle.countWrapper}>
            <h1>960+</h1>
            <p>Restaurants Partnered</p>
          </div>
          <div className={homeStyle.bar}></div>
          <div className={homeStyle.countWrapper}>
            <h1>17,457+s</h1>
            <p>Food item</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
