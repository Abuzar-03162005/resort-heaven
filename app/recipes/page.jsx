"use client"
import React from "react";
import { recipes } from "@/constants";
import RecipesCard from "@/components/sub/RecipesCard";
import Image from "next/image";

const page = () => {
  return (
    <div className="grid grid-cols-3 justify-evenly items-center">
      <div className="grid grid-cols-3">
        {recipes.map((item, index) => {
          return (
            <>
              <div className="flex flex-col justify-evenly items-center" key={index}>
                <div className="imageContainer">
                  <Image src={item.image} alt="image" width={100} height={100} />
                </div>
                <div className="DetailsContainer">
                  <h2 className="">{item.name}</h2>
                  <p className="line-clamp-3">{item.method}</p>``
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* <div className=""></div> */}
    </div>
  );
};

export default page;
