import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Lisa from "/images/home/lisa.webp";
import James from "/images/home/james.webp";
import "swiper/css";
import "swiper/css/navigation";
import PatientSwiper from "./PatientSwiper";
const SayAboutMe = () => {
  return (
    <>
      <div className="md:py-32">
        <div className="sayaboutme mb-6">
          <div className="heading text-6xl mx-auto md:w-[50%] text-gray-700 font-light">
            <h1 className="leading-tight text-center">
              This is what my great patients say about me
            </h1>
          </div>
        </div>
        <PatientSwiper data={{ Lisa, James }} />
      </div>
    </>
  );
};

export default SayAboutMe;
