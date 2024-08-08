import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="app-container md:w-[85%] mx-auto font-spaceGrotest">
        <div className="app">
          <Navbar />
          <div className="container relative top-32 py-4">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
