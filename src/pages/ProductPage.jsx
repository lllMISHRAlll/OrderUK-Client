import React, { useContext } from "react";
import PreHeader from "../component/PreHeader";
import productPageStyle from "../styles/ProductPage.module.css";
import HeaderNav from "../component/HeaderNavigation";
import NavigationBar from "../component/NavigationBar";
import NavStyle from "../styles/NavBar.module.css";
import Discountcards from "../component/Discountcards";
import Footer from "../component/Footer";
import Menu from "../component/Menu";
import TimeInfo from "../component/TimeInfo";
import MapInfo from "../component/MapInfo";
import CustomerReviews from "../component/CustomerReviews";
import cartStyle from "../styles/Cart.module.css";
import { UserInfoContext } from "../context/UserInfo";
import Cart from "../component/Cart";
import HeroSectionProduct from "../component/HeroSectionPoduct";

export default function ProductPage() {
  const { cartToggle } = useContext(UserInfoContext);
  const productPageNavigations = {
    productPageNav: NavStyle.productPageNav,
    productPageNavList: NavStyle.productPageNavList,
    productPageNavItem: NavStyle.productPageNavItem,
    productPageNavLink: NavStyle.productPageNavLink,
  };

  const dishesInfo = [
    {
      category: "Burgers",
      dishes: [
        {
          image: "/public/assets/Images/Dishes/burgerDish.png",
          dishName: "Royal Cheese Burger with extra Fries",
          dishQuantity:
            "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
          price: "150",
        },
        {
          image: "/public/assets/Images/Dishes/burgerDish.png",
          dishName: "Royal Cheese Burger with extra Fries",
          dishQuantity:
            "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
          price: "150",
        },
        {
          image: "/public/assets/Images/Dishes/burgerDish.png",
          dishName: "Royal Cheese Burger with extra Fries",
          dishQuantity:
            "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
          price: "150",
        },
      ],
    },
    {
      category: "Fries",
      dishes: [
        {
          image: "/public/assets/Images/Dishes/Fries.png",
          dishName: "Classic Fries",
          dishQuantity: "3 medium packs of fries",
          price: "70",
        },
        {
          image: "/public/assets/Images/Dishes/Fries.png",
          dishName: "Classic Fries",
          dishQuantity: "3 medium packs of fries",
          price: "70",
        },
        {
          image: "/public/assets/Images/Dishes/Fries.png",
          dishName: "Classic Fries",
          dishQuantity: "3 medium packs of fries",
          price: "70",
        },
      ],
    },
    {
      category: "Cold Drinks",
      dishes: [
        {
          image: "/public/assets/Images/Dishes/coldDrinks.png",
          dishName: "Coca-Cola",
          dishQuantity: "500ml",
          price: "40",
        },
        {
          image: "/public/assets/Images/Dishes/coldDrinks.png",
          dishName: "Coca-Cola",
          dishQuantity: "500ml",
          price: "40",
        },
        {
          image: "/public/assets/Images/Dishes/coldDrinks.png",
          dishName: "Coca-Cola",
          dishQuantity: "500ml",
          price: "40",
        },
      ],
    },
  ];

  return (
    <div className={productPageStyle.main}>
      <div className={productPageStyle.container}>
        <PreHeader />
        <HeaderNav />
        <HeroSectionProduct />
        <NavigationBar
          navs={[
            "Offers",
            "Burgers",
            "Fries",
            "Snacks",
            "Salads",
            "Cold drinks",
            "Happy Meal®",
            "Desserts",
            "Hot drinks",
            "Sauces",
            "Orbit®",
          ]}
          {...productPageNavigations}
        />
        {
          <>
            <div className={cartStyle.bodyWrapWithCart}>
              <div className={cartStyle.bodyWrapProducts}>
                <Discountcards />
                {dishesInfo.map((menu, index) => (
                  <Menu
                    key={index}
                    title={menu.category}
                    dishes={menu.dishes}
                  />
                ))}
              </div>
              {cartToggle && <Cart />}
            </div>
          </>
        }

        <TimeInfo />
        <MapInfo />
        <CustomerReviews />
      </div>
      <Footer />
    </div>
  );
}
