import React from "react";
import { Link } from "react-router-dom";
import Logo from "/icons/logo.svg";
const Navbar = () => {
  return (
    <>
      <div className="navbar relative bg-white z-10">
        <nav className="fixed top-6 z-10 bg-white flex justify-between w-[85%] py-4 px-8 shadow-2xl rounded-2xl items-center">
          <Link to={"/"} className="">
            <img src={Logo} alt="" className="w-[160px]" />
          </Link>
          <ul className="flex gap-4 items-center">
            <li>
              <Link to={"/aboutme"}>About me</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li className="flex">
              <Link
                to={"/book-appointment"}
                className="px-4 p-2 bg-primary text-white rounded-full hover:bg-secondary"
              >
                Book an Appointment
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
