"use client";
import React from "react";
import { recipes } from "@/constants";
import RecipesCard from "@/components/sub/RecipesCard";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-3 gap-10">
        {recipes.map((item, index) => {
          return (
            <>
              <div
                className="flex flex-col justify-evenly items-center"
                key={index}
              >
                <RecipesCard
                  src={item.image}
                  width={100}
                  height={100}
                  name={item.name}
                  desc={item.method}
                />
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
