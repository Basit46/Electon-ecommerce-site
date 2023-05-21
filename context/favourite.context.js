"use client";

import React, { useState, createContext, useContext, useEffect } from "react";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "@/firebase";
import { useAuthContext } from "./auth.context";

const favouriteContext = createContext();
const colRef = collection(db, "favourites");

const FavouriteContextProvider = ({ children }) => {
  const { user } = useAuthContext();

  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    getDocs(colRef).then((snapshot) => {
      setLikedProducts(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);

  const addProductToFavourites = (product) => {
    const id = product.id;
    console.log(id, user.email);
    updateDoc(doc(db, "favourites", user.email), {
      likedProducts: arrayUnion({
        id,
      }),
    });
  };
  return (
    <favouriteContext.Provider
      value={{ likedProducts, addProductToFavourites }}
    >
      {children}
    </favouriteContext.Provider>
  );
};

export default FavouriteContextProvider;

export const useFavouriteContext = () => {
  return useContext(favouriteContext);
};
