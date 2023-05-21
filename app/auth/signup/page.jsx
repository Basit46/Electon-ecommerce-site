"use client";

import { useAuthContext } from "@/context/auth.context";
import Link from "next/link";
import React, { useState } from "react";

const signUp = () => {
  const { handleSignUp } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSignUp(email, password);
  };

  return (
    <div className="w-full flex justify-center pt-[40px]">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center border-[2px] border-black rounded-[10px] p-[20px]"
      >
        <h1 className="text-[2rem] font-bold">Hello👋</h1>
        <p>Welcome! please enter your details</p>
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
          SIGN UP
        </button>
        <p>
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-blue underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default signUp;
