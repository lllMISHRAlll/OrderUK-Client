import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import NavStyle from "../styles/NavBar.module.css";

export default function NavigationBar({
  navs,
  KnowMoreNav,
  KnowMoreNavList,
  KnowMoreNavItem,
  KnowMoreNavLink,
  KnowMoreInnerNav,
  KnowMoreInnerNavList,
  KnowMoreInnerNavItem,
  KnowMoreInnerNavLink,
  productPageNav,
  productPageNavList,
  productPageNavItem,
  productPageNavLink,
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getInitialActiveIndex = () => {
      switch (location.pathname) {
        case "/":
          return navs.indexOf("Home");
        case "/productPage":
          return navs.indexOf("Restaurants");
        default:
          return null;
      }
    };

    setActiveIndex(getInitialActiveIndex());
  }, [location.pathname, navs]);

  const handleClick = (navItem, index) => {
    setActiveIndex(index);
    if (navItem === "Restaurants") {
      navigate("/productPage");
    }
  };

  const getNavigationPath = (navItem) => {
    switch (navItem) {
      case "Home":
        return "/";
      case "Restaurants":
        return "/";
      default:
        return "#";
    }
  };

  return (
    <nav
      className={
        productPageNav || KnowMoreInnerNav || KnowMoreNav || NavStyle.nav
      }
    >
      <ul
        className={
          productPageNavList ||
          KnowMoreInnerNavList ||
          KnowMoreNavList ||
          NavStyle.navList
        }
      >
        {navs.map((navItem, index) => (
          <li
            key={index}
            className={`${
              productPageNavItem ||
              KnowMoreInnerNavItem ||
              KnowMoreNavItem ||
              NavStyle.navItem
            }`}
          >
            <NavLink
              to={getNavigationPath(navItem)}
              onClick={(e) => {
                if (navItem !== "Home") {
                  e.preventDefault();
                  handleClick(navItem, index);
                } else {
                  handleClick(navItem, index);
                }
              }}
              className={`${
                productPageNavLink ||
                KnowMoreInnerNavLink ||
                KnowMoreNavLink ||
                NavStyle.navLink
              } ${activeIndex === index ? NavStyle.activeLink : ""}`}
            >
              {navItem}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
