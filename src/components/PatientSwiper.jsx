import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Lisa from "/images/home/lisa.webp";
import James from "/images/home/james.webp";
import "swiper/css";
import "swiper/css/navigation";
import "../css/NavigationButtons.css";
const PatientSwiper = ({ data }) => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation={true}
        spaceBetween={50}
        className="mySwiper"
      >
        <SwiperSlide className=" flex justify-center w-full">
          <div className="contetns md:w-[70%] mx-auto flex flex-col items-center h-full">
            <img src={data?.Lisa} alt="" className="w-24 h-24 rounded-full" />
            <h2 className="text-2xl text-gray-900 text-center mt-6 mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique."
            </h2>
            <p className="text-gray-500 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <span className="text-md text-gray-600 font-bold mt-8">Lisa</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contetns md:w-[70%] mx-auto flex flex-col items-center h-full">
            <img src={data?.James} alt="" className="w-24 h-24 rounded-full" />
            <h2 className="text-2xl text-gray-900 text-center mt-6 mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique."
            </h2>
            <p className="text-gray-500 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <span className="text-md text-gray-600 font-bold mt-8">James</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PatientSwiper;
