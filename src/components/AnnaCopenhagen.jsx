import React from "react";
import Anna from "/images/home/anna.webp";
import AnnaInframe from "/images/home/anna-inframe.webp";
const AnnaCopenhagen = () => {
  return (
    <>
      <div className="anna grid grid-cols-2 mt-24 pt-16">
        <div className="images relative">
          <img src={Anna} alt="" className="md:w-[75%] ml-auto rounded-tl-[100px] rounded-br-[100px]" />
          <img className="md:absolute bottom-6 w-[70%] h-[300px] rounded-tl-[100px] rounded-br-[100px]" src={AnnaInframe} alt="" />
        </div>
        <div className="text-contents flex flex-col gap-4 justify-center md:pl-16">
          <h3 className="text-md text-secondary">My name is Anna Copenhagen</h3>
          <h1 className="text-6xl leading-tight text-black font-[300]">I provide quality care that treat everyone</h1>
          <p className="text-gray-500 text-md mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor.
          </p>
          <div className="percents grid grid-cols-2 md:gap-6 md:mt-4">
            <div className="50-percent">
              <h1 className="text-6xl text-secondary">50%</h1>
              <p className="text-gray-500 text-xl mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="75-percent">
              <h1 className="text-6xl text-secondary">75%</h1>
              <p className="text-gray-500 text-xl mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnaCopenhagen;
