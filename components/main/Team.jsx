import React from "react";
import { team } from "@/constants";
import Image from "next/image";

const Team = () => {
  return (
    <div className="flex flex-col gap-16 my-12" id="team">
      <div className="flex flex-col justify-center items-center  ">
        <h2 className="text-[4rem] font-light  ">OUR TEAM</h2>
        <p className="text-[1.2rem] font-extralight  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
          perferendis laborum.
        </p>
      </div>
      <div className="flex flex-row justify-evenly  ">
        {team.map((member, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-3 justify-center items-center  "
            >
              <Image src={member.image} alt="image" width={180} height={180} />
              <h2 className="text-[1.8rem] font-normal">{member.name}</h2>
              <p className="text-[1.1rem] font-light">{member.designation}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
