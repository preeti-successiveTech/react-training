"use client";

import { createContext, useState } from "react";
const ShoppingContext = createContext();

function ShoppingCartContext({ children }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItem, setCartItem] = useState([
    {
      id: 1,
      img: "https://exclusivelane.com/cdn/shop/products/EL-002-140_A.jpg?v=1581072566",
      price: 2000,
    },
  ]);
  function AddToCart(items) {
    setCartItem((prev) => {
      const isItemExist = prev.find((item) => item.id === items.id);
      if (isItemExist) {
        return prev.map((item) =>
          item.id === items.id ? { ...item, quanity: item.quanity + 1 } : item
        );
      } else {
        return [...prev, { ...items, quanity: 1 }];
      }
    });
  }
  function removeFromCart(itemChildId) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (existing.qty === 1) {
        return prev.filter((item) => item.id !== productId);
      } else {
        return prev.map((item) =>
          item.id === productId ? { ...item, qty: item.qty - 1 } : item
        );
      }
    });
  }
  return (
    <>
      <ShoppingContext.Provider value={{ cartItem, AddToCart, removeFromCart }}>
        {children}
      </ShoppingContext.Provider>
    </>
  );
}

export {ShoppingContext, ShoppingCartContext}