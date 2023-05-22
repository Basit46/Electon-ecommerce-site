"use client";

import { useAuthContext } from "@/context/auth.context";
import { useCartContext } from "@/context/cart.context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const signIn = () => {
  const router = useRouter();

  const { handleSignIn } = useAuthContext();
  const { setInfo, setShowInfo } = useCartContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleSignIn(email, password);
    router.push("/category");
    setInfo("Sign In Successful");
    setShowInfo(true);
  };

  return (
    <div className="w-full flex justify-center py-[40px]">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center border-[2px] border-black rounded-[10px] p-[20px]"
      >
        <h1 className="text-[2rem] font-bold">Hi Basit👋</h1>
        <p>Welcome back! please enter your details</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          required
          className="block border-[1px] border-black p-[5px] rounded-[10px] w-full mt-[40px] mb-[20px]"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
          className="block border-[1px] border-black p-[5px] rounded-[10px] w-full"
        />

        <button className="w-full p-[5px] rounded-[10px] bg-gold font-bold mt-[30px] mb-[10px]">
          SIGN IN
        </button>
        <p>
          Already have an account?{" "}
          <Link href="/auth/signup" className="text-blue underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default signIn;
