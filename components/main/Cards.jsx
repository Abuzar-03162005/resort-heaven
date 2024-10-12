import React from "react";
import Image from "next/image";
import { OurQualities } from "@/constants";

const Cards = () => {
  return (
    <>
      <div
        className="container_card flex flex-row justify-evenly items-center text-center my-[6rem] w-full"
        id="services"
      >
        {OurQualities.map((quality, index) => {
          return (
            <div
              key={index}
              className="card_item w-[30%] flex flex-col gap-6 justify-center items-center"
            >
              <Image src={quality.image} width={120} height={100} alt="image" />
              <h2 className="text-3xl font-normal">{quality.title}</h2>
              <p className="w-[65%] font-extralight text-xl">
                {quality.description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
