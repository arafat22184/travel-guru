import React from "react";
import { useLoaderData, useParams } from "react-router";
import DatePickerWithIcon from "../Components/DatePickerWithIcon";

const Booking = () => {
  const places = useLoaderData();
  const { id } = useParams();
  const bookPlace = places.find((place) => place.id == id);

  const { placeName, description } = bookPlace;

  const uppercaseName = placeName.toUpperCase();
  return (
    <div className="w-11/12 max-w-8xl mx-auto grid grid-cols-12 mt-40 justify-center">
      <div className="space-y-6 col-span-7">
        <h1 className="text-8xl">{uppercaseName}</h1>
        <h3 className="max-w-[650px]">{description}</h3>
      </div>
      <form className="bg-white col-span-5 text-black p-7 rounded-xl space-y-4">
        <label>Origin</label>
        <br />
        <input
          className="bg-gray-200 w-full border border-black/20 pl-4 py-2 rounded mt-2"
          type="text"
          placeholder={"Dhaka"}
        />
        <br />
        <label>Destination</label>
        <br />
        <input
          className="bg-gray-200 w-full border border-black/20 pl-4 py-2 rounded mt-2"
          type="text"
          value={placeName}
        />
        <div className="flex items-center justify-between">
          <DatePickerWithIcon label={"Form"}></DatePickerWithIcon>
          <DatePickerWithIcon label={"To"}></DatePickerWithIcon>
        </div>

        <button className="btn bg-[#F9A51A] w-full rounded-xl py-5">
          Start Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;
