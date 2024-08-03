import React from "react";
import { dishes } from "@/constants";
import Image from "next/image";
import DishesCardProvider from "../sub/DishesCardProvider";

const Dishes = () => {
  return (
    <div className="Dishes_container">
      <div className="text w-full text-center">
        <h2 className="text-7xl font-light py-8">POPULAR DISHES</h2>
        <p className="font-normal pb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto
          dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta pariatur
          eius et recusandae veritatis. Quasi, et molestias!
        </p>
      </div>
      <div className="grid grid-cols-4 gap-y-4 py-4">
        {dishes.map((dishe, index) => {
          return (
            <div key={index} className="hover:scale-[1.05] transition-all">
              <DishesCardProvider
                src={dishe.Image}
                width={dishe.width}
                height={dishe.height}
                category={dishe.category}
                title={dishe.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dishes;
