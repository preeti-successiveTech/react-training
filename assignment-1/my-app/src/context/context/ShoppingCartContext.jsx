"use client";

import { createContext, useState } from "react";
const ShoppingContext = createContext();

function ShoppingCartContext({ children }) {
  const [cartItem, setCartItem] = useState([
    {
      id: 1,
      img: "https://exclusivelane.com/cdn/shop/products/EL-002-140_A.jpg?v=1581072566",
      price: 2000,
      quantity: 1
    },
  ]);
  function AddToCart(items) {
    setCartItem((prev) => {
      const isItemExist = prev.find((item) => item.id === items.id);
      if (isItemExist) {
        return prev.map((item) =>
          item.id === items.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...items, quantity: 1 }];
      }
    });
  }
  function removeFromCart(items) {
    setCartItem((prev) => {
      const existing = prev.find((item) => item.id === items.id);
      if (existing.quantity === 1) {
        return prev.filter((item) => item.id !== items.id);
      } else {
        return prev.map((item) =>
          item.id === items.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };
   const totalPrice = cartItem.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <ShoppingContext.Provider value={{ cartItem, AddToCart, removeFromCart , totalPrice}}>
        {children}
      </ShoppingContext.Provider>
    </>
  );
}

export {ShoppingContext, ShoppingCartContext}