import React, { createContext, useState } from "react";

export const cartContext = createContext();

export const CartInfoProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (newItem) => {
    setCartItem((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.itemname === newItem.itemname
      );

      if (existingItemIndex !== -1) {
        return prevItems.map((item, index) =>
          index === existingItemIndex
            ? {
                ...item,
                itemQuantity: item.itemQuantity + newItem.itemQuantity,
              }
            : item
        );
      } else {
        console.log(newItem);
        return [...prevItems, newItem];
      }
    });
  };

  const handleReduceQuantity = (itemToReduce) => {
    setCartItem((prevItems) => {
      return prevItems.map((item) =>
        item.itemname === itemToReduce.itemname
          ? {
              ...item,
              itemQuantity: item.itemQuantity > 1 ? item.itemQuantity - 1 : 0,
            }
          : item
      );
    });
  };

  //Delivery Address
  const [address, setAddress] = useState("Enter your address here");
  return (
    <cartContext.Provider
      value={{
        cartItem,
        setCartItem,
        addToCart,
        handleReduceQuantity,
        address,
        setAddress,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
