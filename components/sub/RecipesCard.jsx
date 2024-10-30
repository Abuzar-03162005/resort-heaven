import Image from "next/image";
import React from "react";

const RecipesCard = ({ src, name, desc }) => {
  return (
    // <div className="group flex flex-col justify-between items-center bg-white shadow-lg rounded-lg overflow-hidden w-96 p-4 transform transition duration-300 hover:shadow-xl hover:scale-105">
    //   <div className="w-full h-48 relative overflow-hidden">
    //     <Image
    //       src={src}
    //       alt={name}
    //       layout="fill"
    //       objectFit="cover"
    //       className="rounded-t-lg transform transition duration-300 group-hover:scale-105"
    //     />
    //   </div>
    //   <div className="flex flex-col justify-between items-center w-full p-4">
    //     <h2 className="text-lg font-semibold mb-2 text-center group-hover:text-blue-600 transition duration-300">
    //       {name}
    //     </h2>
    //     <p className="text-gray-600 text-sm text-center line-clamp-3 group-hover:text-gray-800 transition duration-300">
    //       {desc}
    //     </p>
    //   </div>
    // </div>
    <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <Image
          src={src}
          alt="card-image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg transform transition duration-300 group-hover:scale-105"
        />
      </div>
      <div class="p-4">
        <h6 class="mb-2 text-slate-800 text-xl font-semibold">
          Website Review Check
        </h6>
        <p class="text-slate-600 leading-normal font-light">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </p>
      </div>
      <div class="px-4 pb-4 pt-0 mt-2">
        <button
          class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default RecipesCard;
