import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const PatientCheckup = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const container = useRef();
  const contents = [
    {
      id: 1,
      img: "/images/home/init-meet.webp",
      titel: "Initial Meeting",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      id: 2,
      img: "/images/home/checkup.webp",
      titel: "Checkup",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      id: 3,
      img: "/images/home/healthy.webp",
      titel: "Become Healthy",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
  ];

  

  const handleImageChange = (index) => {
    setCurrentImg(index);
  };
  return (
    <>
      <div className="md:flex gap-6 flex-1 md:mt-32" ref={container}>
        <div className="img md:w-[50%] relative">
          <img
            src={contents[currentImg].img}
            alt=""
            className={`img${[
              contents[currentImg].id,
            ]} md:w-[85%] ml-auto transition-all duration-150 ease-in rounded-tl-[100px] rounded-br-[100px]`}
          />
          <div className="absolute bottom-0 rounded-tl-[100px] rounded-br-[100px] -z-10 left-0 border border-gray-200 w-full h-[80%]"></div>
        </div>
        <div className="text-contents flex justify-center items-center gap-4 flex-col w-[50%] md:pl-12">
          {contents.map((item, index) => (
            <NavLink
              className={`pl-8 group hover:text-primary ${
                currentImg == index ? "border-l-2 border-primary" : ""
              }`}
              key={item.id}
              onClick={() => handleImageChange(index)}
            >
              <span className="flex flex-col gap-2 hover:translate-x-1 transition-transform duration-150 ease-linear">
                <span className="flex gap-2 text-[24px] font-[500]">
                  <span>{item.id}.</span>
                  <span>{item.titel}</span>
                </span>
                <span className="text-sm text-gray-500 group-hover:text-primary leading-6 ">
                  {item.text}
                </span>
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default PatientCheckup;
