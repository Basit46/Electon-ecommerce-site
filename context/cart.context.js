"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "update":
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            rate: action.payload.rate,
            amount: action.payload.rate * product.price,
          };
        } else {
          return product;
        }
      });
    case "clear":
      return [];
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(reducer, []);
  const [subTotal, setSubTotal] = useState();

  const [info, setInfo] = useState("Product was added succesfully mate");
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    setSubTotal(
      cartItems
        .reduce((accumulator, product) => accumulator + product.amount, 0)
        .toFixed(2)
    );
  }, [cartItems]);

  const handleAddToCart = (product) => {
    dispatch({
      type: "add",
      payload: { ...product, rate: 1, amount: product.price },
    });

    setInfo("Item successfully added to cart");
    setShowInfo(true);
  };

  const clearCart = () => {
    setSubTotal();
    dispatch({ type: "clear" });
    setInfo("Cart cleared");
    setShowInfo(true);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        dispatch,
        handleAddToCart,
        subTotal,
        clearCart,
        info,
        setInfo,
        showInfo,
        setShowInfo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCartContext = () => {
  return useContext(CartContext);
};
