import React from "react";
import Heart from "/icons/heart.svg";
import AnnaServices from "/images/home/anna-inservices.webp";
const Services = () => {
  return (
    <>
      <div className="home-section-services flex gap-4 justify-center mt-32">
        <div className="text-contents md:w-[60%] flex flex-col gap-4 pr-4 mt-8">
          <h3 className="text-md text-secondary">Services</h3>
          <h1 className="text-6xl text-blank md:w-[60%] leading-tight">
            My services for your Health
          </h1>
          <div className="services grid grid-cols-2 gap-6 mt-6">
            <div className="service flex gap-4 items-start">
              <div className="flex items-start">
                <img className="w-16" src={Heart} alt="" />
              </div>
              <div className="">
                <h1 className="text-3xl">Cardiology</h1>
                <p className="text-gray-500 text-sm leading-6 mt-4 pr-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
            <div className="service flex gap-4 items-start">
              <div className="flex items-start">
                <img className="w-16" src={Heart} alt="" />
              </div>
              <div className="">
                <h1 className="text-3xl">Dental Care</h1>
                <p className="text-gray-500 text-sm leading-6 mt-4 pr-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
            <div className="service flex gap-4 items-start">
              <div className="flex items-start">
                <img className="w-16" src={Heart} alt="" />
              </div>
              <div className="">
                <h1 className="text-3xl">Mental Health</h1>
                <p className="text-gray-500 text-sm leading-6 mt-4 pr-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
            <div className="service flex gap-4 items-start">
              <div className="flex items-start">
                <img className="w-16" src={Heart} alt="" />
              </div>
              <div className="">
                <h1 className="text-3xl">Opthalmology</h1>
                <p className="text-gray-500 text-sm leading-6 mt-4 pr-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="image md:w-[40%] flex justify-center">
          <img
            src={AnnaServices}
            alt=""
            className="rounded-tl-[100px] h-[600px] rounded-br-[100px]"
          />
        </div>
      </div>
    </>
  );
};

export default Services;
