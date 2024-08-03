import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    // container
    <div className="flex items-center justify-center py-10" id="aboutUs" >
      <div className="container flex flex-row justify-evenly w-[95%] px-8 py-14 bg-[#e1e4d1] rounded-3xl">
        {/* text container */}
        <div className="text flex flex-col items-start justify-between w-2/4 pr-16">
          {/* headings */}
          <div className="Heading flex flex-col justify-start items-start">
            <h2 className="text-[7rem] font-extralight mb-2">ABOUT US </h2>
            <h2 className="text-xl tracking-wider">
              The only thing we're serious about is food.
            </h2>
          </div>
          {/* paragraph */}
          <div className="paragraph">
            <p className="font-light text-[19px] tracking-[1px] w-2/2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident possimus optio adipisci dolores impedit illum iusto
              perferendis, laudantium quod accusamus consequuntur consectetur,
              tempore nulla error iure reiciendis dolorem assumenda.
              Necessitatibus fugit asperiores totam rem esse exercitationem
              iusto ipsum qui dolore ex, accusantium repellat mollitia
              repellendus.
            </p>
          </div>
          {/* button */}
          <button className="explore_button border border-gray-950 rounded-full w-[28%] px-8 py-4 my-4 hover:bg-black hover:text-white transition-all">
            <Link href="/ExploreMore" className="explore_link">
              <div className="flex flex-row justify-between">
                <h1 className="tracking-wide inline-block">Explore Menu</h1>
                <span className="bg-white rounded-full inline-block">
                  <Image src="/next.png" alt="image" width={25} height={25} />
                </span>
              </div>
            </Link>
          </button>
        </div>
        {/* image container */}
        <div className="Image">
          <Image src="/about.png" alt="image" width={550} height={550} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
