"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="nav flex flex-row justify-between items-center px-10 py-10">
      <div className="logo text-[2rem] font-normal">
        <Link href="/">ZEESH</Link>
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links flex flex-row justify-evenly items-center gap-6 ">
          <Link href="#landingpage" className="font-light text-xl">
            HOME
          </Link>
          <Link href="#aboutUs" className="font-light text-xl">
            ABOUT US
          </Link>
          <Link href="#services" className="font-light text-xl">
            SERVICES
          </Link>
          <Link href="#team" className="font-light text-xl">
            TEAM
          </Link>
          <Link href="#reservation" className="font-light text-xl">
            RESERVATION
          </Link>
        </div>
      </div>
      <div className="menu-Btn hamburger" onClick={() => setShow(!show)}>
        <Image
          className="cursor-pointer"
          src="/menu.png"
          width={40}
          height={40}
        ></Image>
      </div>
    </div>
  );
};

export default Navbar;
