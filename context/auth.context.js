"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useFavouriteContext } from "./favourite.context";

const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setDoc(doc(db, "favourites", user.user.email), {
          likedProducts: [],
        }).then(() => {
          console.log("Added successfully");
        });
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };

  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {})
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };

  const handleSignOut = () => {
    signOut(auth).then(() => setUser(null));
  };
  return (
    <authContext.Provider
      value={{ handleSignUp, handleSignIn, handleSignOut, user }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return useContext(authContext);
};
