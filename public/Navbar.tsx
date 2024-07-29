"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import menu from "@/public/menu.svg";

const Navbar = () => {
  const [Menu, setMenu] = useState(false);
  return (
    <nav className=" flex items-center justify-between px-6 py-5">
      <div className=" font-extrabold text-xl md:text-3xl">Serenity</div>
      <div className=" md:flex hidden items-center gap-6">
        <Link className=" text-xl" href={"/"}>
          Feature
        </Link>
        <Link className=" text-xl" href={"/"}>
          Pricing
        </Link>
        <button className=" rounded-lg bg-black text-white px-4 py-3">
          Get Started
        </button>
      </div>
      <div className=" flex md:hidden">
        <Image
          onClick={() => setMenu(true)}
          src={menu}
          alt="menu"
          className=" w-5 h-5"
        />
      </div>
      {Menu && (
        <div className=" fixed inset-0 backdrop-brightness-50 backdrop-blur-lg flex text-white flex-col gap-3 justify-center items-center">
          <div
            className=" absolute top-5 right-5 text-2xl"
            onClick={() => setMenu(false)}
          >
            ✖
          </div>
          <Link className="" href={"/"}>
            Feature
          </Link>
          <Link className="" href={"/"}>
            Pricing
          </Link>
          <button className=" rounded-lg bg-black px-2 py-1 text-xs">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
