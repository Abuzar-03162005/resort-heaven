import Image from "next/image";
import React from "react";

const DishesCardProvider = ({ src, width, height, title, category }) => {
  return (
    <div className="main_container_dishes flex justify-center">
      <div className="flex flex-col items-start">
        <h2 className="text-white rounded-full absolute bg-gradient-to-b from-neutral-900 to-zinc-500 px-4 py-2 mx-4 my-4">
          {category}
        </h2>
        <div className="ImageContainer">
          <Image src={src} alt={title} width={width} height={height} />
        </div>
        <h2 className="text-2xl font-medium tracking-wide pt-2">{title}</h2>
      </div>
    </div>
  );
};

export default DishesCardProvider;
