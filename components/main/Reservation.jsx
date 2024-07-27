import React from "react";
import ReservationForm from "../sub/ReservationForm";
import Image from "next/image";

const Reservation = () => {
  return (
    <div
      id="reservation"
      className="flex flex-row justify-center items-center py-16 "
    >
      <div className="Res_container rounded-3xl flex justify-center py-20 px-28 gap-[9rem] items-center bg-[#f5cac3]">
        <div className="image_container">
          <Image src="/reservation.png" alt="image" width={480} height={480} />
        </div>
        <ReservationForm />
      </div>
    </div>
  );
};

export default Reservation;
