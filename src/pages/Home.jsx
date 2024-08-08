import React from "react";
import Showcase from "../components/Showcase";
import AnnaCopenhagen from "../components/AnnaCopenhagen";
import Services from "./Services";
import PatientCheckup from "../components/PatientCheckup";
import SayAboutMe from "../components/SayAboutMe";
import FAQs from "../components/FAQs";
import ScheduleAppointment from "../components/ScheduleAppointment";

const Home = () => {
  return (
    <>
      <Showcase />
      <AnnaCopenhagen />
      <Services />
      <PatientCheckup />
      <SayAboutMe />
      <FAQs />
      <ScheduleAppointment />
    </>
  );
};

export default Home;
