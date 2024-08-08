import React from "react";
import Anna from "/images/home/anna-show.webp";
import { Link } from "react-router-dom";
const Showcase = () => {
  return (
    <div className="main">
      <div className="relative top-16">
        <div className="abolute rounded-tl-[100px] rounded-br-[100px] top-20 ml-auto border border-gray-200 w-[90%]  h-[80vh]"></div>
        <div className="showcase grid grid-cols-2 gap-6 absolute top-0 h-[60vh]">
          <div className="text-content flex flex-col gap-4 justify-center mt-auto">
            <h3 className="text-xl text-secondary">
              Your Doctor in Copenhagen
            </h3>
            <h1 className="text-7xl leading-tight text-black">
              Your Health is my Top Priority
            </h1>
            <p className="text-gray-500 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="buttons flex gap-4">
              <Link
                className="bg-primary py-2 px-6 text-white rounded-full"
                to={"mailto:iam@rizwanansari.in"}
              >
                Book an Appointment
              </Link>
              <Link
                className="bg-light py-2 px-6 text-gray-600 rounded-full"
                to={"tel:+966536317438"}
              >
                +966 536 317 438
              </Link>
            </div>
          </div>
          <div className="image flex justify-center relative">
            <img
              src={Anna}
              alt=""
              className="w-[80%] rounded-tl-[100px] rounded-br-[100px] absolute -top-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
