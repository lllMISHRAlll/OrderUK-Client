import React from "react";
import style from "../styles/KnowMore.module.css";
import NavStyle from "../styles/NavBar.module.css";
import NavigationBar from "./NavigationBar";
import GreyCards from "./GreyCards";

export default function KnowMore() {
  const knowMoreNavigations = {
    KnowMoreNav: NavStyle.KnowMoreNav,
    KnowMoreNavList: NavStyle.KnowMoreNavList,
    KnowMoreNavItem: NavStyle.KnowMoreNavItem,
    KnowMoreNavLink: NavStyle.KnowMoreNavLink,
  };

  const InnerNavigations = {
    KnowMoreInnerNav: NavStyle.KnowMoreInnerNav,
    KnowMoreInnerNavList: NavStyle.KnowMoreInnerNavList,
    KnowMoreInnerNavItem: NavStyle.KnowMoreInnerNavItem,
    KnowMoreInnerNavLink: NavStyle.KnowMoreInnerNavLink,
  };

  const innerCardTiles = [
    {
      text1: "Place an Order!",
      text2: "Place order through our website or Mobile app",
      img: "assets/Images/Card icons/cupBell.png",
    },
    {
      text1: "Track Progress",
      text2: "Your can track your order status with delivery time",
      img: "assets/Images/Card icons/food.png",
    },
    {
      text1: "Get your Order!",
      text2: "Receive your order at a lighting fast speed!",
      img: "assets/Images/Card icons/get your order.png",
    },
  ];

  return (
    <div className={style.knowMoreContainer}>
      <div className={style.knowMoreheader}>
        <h1>Know more about us!</h1>
        <NavigationBar
          navs={[
            "Frequent Questions",
            "Who we are?",
            "Partner Program",
            "Help & Support",
          ]}
          {...knowMoreNavigations}
        />
      </div>
      <div className={style.knowMoreBody}>
        <div className={style.navLinksInner}>
          <nav>
            <NavigationBar
              navs={[
                "How does Order.UK work?",
                <>
                  <span className={style.spanText}>
                    What payment methods are accepted?
                  </span>
                </>,
                "Can I track my order in real-time?",
                <>
                  <span className={style.spanText}>
                    Are there any special discounts or <br /> promotions
                    available?
                  </span>
                </>,
                "Is Order.UK available in my area?",
              ]}
              {...InnerNavigations}
            />
          </nav>
        </div>
        <div className={style.cardsDisplay}>
          <div className={style.cardsPreview}>
            {innerCardTiles.map((content, index) => (
              <GreyCards
                key={index}
                text1={content.text1}
                text2={content.text2}
                img={content.img}
              />
            ))}
          </div>
          <div className={style.rightBodyText}>
            <p>
              Order.UK simplifies the food ordering process. Browse through our
              diverse menu, select your favorite dishes, and proceed to
              checkout. Your delicious meal will be on its way to your doorstep
              in no time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
