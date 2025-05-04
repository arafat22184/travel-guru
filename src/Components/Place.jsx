import React, { useState } from "react";

const Place = ({ places }) => {
  const [activeId, setActiveId] = useState(1);
  const activePlace = places.find((place) => place.id == activeId);

  const { id, placeName, title, image } = activePlace;

  const uppercaseName = placeName.toUpperCase();

  return (
    <div className="grid grid-cols-2 mt-40">
      <div className="space-y-6 ">
        <h1 className="text-8xl">{uppercaseName}</h1>
        <h3 className="max-w-[650px]">{title}</h3>
        <button className="bg-[#F9A51A] py-3 px-7 text-black font-semibold rounded-md hover:bg-amber-200 cursor-pointer">
          Booking
        </button>
      </div>

      {/* Carousel */}
    </div>
  );
};

export default Place;
