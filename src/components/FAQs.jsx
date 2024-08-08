import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import gsap from "gsap";
const FAQs = () => {
  const [activeId, setActiveId] = useState(null);
  const accrodion = [
    {
      id: 1,
      title: "Magnam Sint",
      content:
        "Incidunt beatae provident. Qui dolorem mollitia quam veniam quia accusamus. Id iste nulla omnis quo quas. Aut minima doloribus. Reiciendis et dolorem corrupti necessitatibus deleniti occaecati dolor. Officia officia iste voluptatem eos quia aliquam. Est et amet necessitatibus sed incidu",
    },
    {
      id: 2,
      title: "Est Maiores",
      content:
        "Consectetur dolores quam necessitatibus illo blanditiis sed blanditiis aliquam. Assumenda dolorem rerum vel",
    },
    {
      id: 3,
      title: "Voluptas Labore Laudantium",
      content:
        "Id quod quia animi sed. Fugiat non minus totam ipsa sit. Consequuntur quis aspernatur magni. Ipsa id ullam nemo ut ut ea error. Inventore",
    },
    {
      id: 4,
      title: "Neque Omnis",
      content:
        "Atque ab quia praesentium architecto non quo temporibus. Laboriosam pariatur debitis nihil perspiciatis. Et facilis est labore dolor nemo rerum sequi ratione. Aut ex id distinctio sit quae ut omnis. Nobis qui dolorem ut minima. Eligendi nobis vero explicabo. Repellat",
    },
    {
      id: 5,
      title: "Quis Ut",
      content:
        "Corporis nihil tenetur quis adipisci excepturi aut fugiat. Enim quia et alias aut rerum",
    },
  ];

  const toggleAccordion = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return (
    <>
      <div className="faqs md:flex gap-10 md:py-16">
        <div className="help md:w-[40%] pr-2">
          <h3 className="text-secondary text-xl">FAQ</h3>
          <h1 className="text-gray-700 text-6xl leading-tight">
            Do you need some help?
          </h1>
          <p className="text-gray-500 my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <div className="contact flex flex-col gap-4">
            <div className="phone flex items-center gap-2">
              <span className="w-8 h-8 rounded-full flex justify-center bg-veryLightBlue text-primary items-center">
                <FaPhoneAlt className="text-primary" />
              </span>
              <Link to={"tel:+966 536317438"} className="hover:underline">
                +966 536317438
              </Link>
            </div>
            <div className="email flex items-center gap-2">
              <span className="w-8 h-8 rounded-full flex justify-center bg-veryLightBlue text-primary items-center">
                <MdOutlineMail className="text-primary" />
              </span>
              <Link
                className="hover:underline"
                to={"mailto:iam@rizwanansari.in"}
              >
                iam@rizwanansari.in
              </Link>
            </div>
          </div>
        </div>
        <div className="accrodions md:w-[60%] pl-8 flex flex-col gap-8">
          {accrodion.map((accrod) => (
            <div
              key={accrod.id}
              className="border rounded-tl-[20px] rounded-br-[20px] p-5"
            >
              <div
                onClick={() => toggleAccordion(accrod.id)}
                className="title group flex justify-between items-center cursor-pointer"
              >
                <h2 className="text-xl transition-all duration-150 ease-in group-hover:translate-x-1 text-gray-800">
                  {accrod.title}
                </h2>
                <span className="text-xl">
                  <IoMdAdd
                    className={`trasnsition-all duration-150 ease-in ${
                      activeId === accrod.id
                        ? "rotate-45"
                        : ""
                    }`}
                  />
                </span>
              </div>
              <div
                className={`body ${activeId === accrod.id ? "active" : ""}`}
                style={{ transition: "height 200ms ease-in" }}
              >
                <div
                  ref={(el) =>
                    activeId === accrod.id
                      ? gsap.to(el, { height: "auto", stagger: 0.1 })
                      : gsap.to(el, { height: "0", stagger: 0.1 })
                  }
                  className="text-gray-500 overflow-hidden"
                >
                  <p className="pt-4">{accrod.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQs;
