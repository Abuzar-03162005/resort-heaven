import React from "react";

const Footer = () => {
  return (
    <div className="footer_container flex flex-col flex-wrap py-8 px-10 ">
      <div className="flex justify-between items-start pb-4 border-black border-b-4">
        <div className="">
          <h2 className="text-4xl">ZEESHU</h2>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-light">Z6 Gulshan-e-Maymar, Karachi</h3>
          <h3 className="text-xl font-light">Open: 05:00 PM - 12:00 AM</h3>
        </div>
      </div>
      <div className="flex justify-between items-start pt-4">
        <div className="">
          <h2 className="text-xl font-light">Developed By ABU_BAKKAR.io</h2>
        </div>
        <div>
          <h2 className="text-xl font-light">
            All Rights Reserved By ABU_BAKKAR.io.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
