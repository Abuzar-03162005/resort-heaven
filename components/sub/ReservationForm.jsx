import React from "react";

const ReservationForm = () => {
  return (
    <div
      className="form_container flex flex-col justify-center items-center px-2 py-2 rounded-se-3xl rounded-es-3xl bg-[#f7e1d7]
      shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]"
    >
      <div className="text_container text-center flex flex-col gap-1 ">
        <h2 className="text-[3rem] font-light">MAKE A RESERVATION</h2>
        <p className="text-[1.25rem] font-extralight">
          For Further Questions, Please Call
        </p>
      </div>
      <div className="input_container ">
        <form
          action=""
          className="reservation_form grid grid-cols-2 gap-y-4 gap-x-2 px-4 py-4"
        >
          <input
            className="text-[1.19rem] placeholder:text-black font-light outline-none border-black border-b px-2 py-2 bg-transparent"
            placeholder="First Name"
            type="text"
            name=""
            id=""
          />
          <input
            className="text-[1.19rem] placeholder:text-black font-light outline-none border-black border-b px-2 py-2 bg-transparent"
            placeholder="Last Name"
            type="text"
            name=""
            id=""
          />
          <input
            className="text-[1.19rem] placeholder:text-black font-light outline-none border-black border-b px-2 py-2 bg-transparent"
            placeholder="Date"
            type="date"
            name=""
            id=""
          />
          <input
            className="text-[1.19rem] placeholder:text-black font-light outline-none border-black border-b px-2 py-2 bg-transparent"
            placeholder="Time"
            type="time"
            name=""
            id=""
          />
          <input
            className="text-[1.19rem] placeholder:text-black font-light outline-none border-black border-b px-2 py-2 bg-transparent"
            placeholder="Email"
            type="email"
            name=""
            id=""
          />
          <input
            className="text-[1.19rem] placeholder:text-black font-light outline-none border-black border-b px-2 py-2 bg-transparent"
            placeholder="Phone Number"
            type="number"
            name=""
            id=""
          />
          <input className="bg-black text-white py-3 rounded-3xl hover:bg-white hover:text-black transition-all" type="submit" value="Reserve Now" />
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
