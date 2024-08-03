import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div
        className="flex flex-row justify-center w-full z-20 pb-10"
        id="heroSection"
      >
        <div className="flex flex-row justify-between w-4/5 ">
          <div className="firstRow">
            <h1 className="text-[9rem] font-extralight">Delicious</h1>
            <Image src="/hero1.png" alt="image" width={300} height={300} />
          </div>
          <div className="secondRow flex flex-col justify-end items-center relative -left-6 gap-2">
            <Image
              className="relative left-24"
              src="/threelines.svg"
              alt="image"
              width={30}
              height={30}
            />
            <h1 className="text-[9rem] font-extralight ">Food</h1>
            <Image src="/logo.svg" alt="image" width={150} height={150} />
          </div>
          <div className="thirdRow flex flex-col items-end justify-between">
            <Image src="/hero2.png" alt="image" width={300} height={300} />
            <h1 className="text-[9rem] font-extralight">Dishes</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
