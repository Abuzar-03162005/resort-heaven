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
      <div>
        <div className="links flex flex-row justify-evenly items-center gap-6 ">
          <ul className="flex flex-row justify-evenly items-center gap-6 ">
            <li>
              <Link href="#landingpage" className="font-light text-xl">
                HOME
              </Link>
            </li>
            <li>
              <Link href="#aboutUs" className="font-light text-xl">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="#services" className="font-light text-xl">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="#team" className="font-light text-xl">
                TEAM
              </Link>
            </li>
            <li>
              <Link href="#reservation" className="font-light text-xl">
                RESERVATION
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="menu-Btn flex items-center justify-center gap-4 "
        onClick={() => setShow(!show)}
      >
        <div className="text-white px-6 py-1 rounded-full text-xl font-extralight tracking-wide bg-black hover:bg-transparent hover:text-black hover:border border-black hover:font-light transition-all">
          <Link href="/register">Login</Link>
        </div>
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
