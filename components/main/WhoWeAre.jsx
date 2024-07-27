import React from "react";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="who_we_areContainer flex justify-evenly my-[8rem]">
      <div className="text_1 flex flex-col justify-evenly">
        <div className="text text-center">
          <h2 className="text-7xl font-light pb-4">14</h2>
          <p className="text-2xl font-extralight tracking-wide">Restaurants</p>
        </div>
        <div className="text text-center">
          <h2 className="text-7xl font-light pb-4">20</h2>
          <p className="text-2xl font-extralight tracking-wide">
            Chef In Kitchen
          </p>
        </div>
      </div>
      <div className="image">
        <Image src="/whoweare.png" alt="image" width={510} height={100} />
      </div>
      <div className="text_2 flex flex-col justify-evenly">
        <div className="text text-center">
          <h2 className="text-7xl font-light pb-4">08</h2>
          <p className="text-2xl font-extralight tracking-wide">
            Years Of Experience
          </p>
        </div>
        <div className="text text-center">
          <h2 className="text-7xl font-light pb-4">200</h2>
          <p className="text-2xl font-extralight tracking-wide">Food Dishes</p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
