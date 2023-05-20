"use client";

import Link from "next/link";
import React from "react";

const signIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex justify-center pt-[40px]">
      <form
        onSubmit={() => handleSubmit(e)}
        className="flex flex-col items-center border-[2px] border-black rounded-[10px] p-[20px]"
      >
        <h1 className="text-[2rem] font-bold">Hi Basit👋</h1>
        <p>Welcome back! please enter your details</p>
        <input
          type="email"
          placeholder="Email"
          required
          className="block border-[1px] border-black p-[5px] rounded-[10px] w-full mt-[40px] mb-[20px]"
        />
        <input
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
