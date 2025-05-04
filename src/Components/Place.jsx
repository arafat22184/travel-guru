import React, { useEffect, useState } from "react";

// Carousel
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const Place = ({ places }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePlace = places.find((place) => place.id == activeIndex);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  // console.log(activeIndex);

  const { id, placeName, title, image } = activePlace;

  const uppercaseName = placeName.toUpperCase();

  return (
    <div className="grid grid-cols-12 mt-40 justify-center">
      <div className="space-y-6 col-span-5">
        <h1 className="text-8xl">{uppercaseName}</h1>
        <h3 className="max-w-[650px]">{title}</h3>
        <Link
          to={`/booking/${id}`}
          className="bg-[#F9A51A] py-3 px-7 text-black font-semibold rounded-md hover:bg-amber-200 cursor-pointer flex items-center gap-2 w-fit"
        >
          Booking{" "}
          <span>
            {" "}
            <FaArrowRight />
          </span>
        </Link>
      </div>

      {/* Carousel */}
      <div className="col-span-7">
        <Swiper
          onSlideChange={handleSlideChange}
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {places.map((place) => (
            <SwiperSlide key={place.id}>
              <img src={place.image} alt={place.placeName} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Place;
