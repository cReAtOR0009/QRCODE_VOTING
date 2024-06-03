import React from "react";
import Scanner from "../components/Scanner";
import VoterForm from "../components/VoterForm.jsx";
import Header from "../components/Header";
import programFlier from "../assets/melodyofthespiritBig.jpg";
import programFlier2 from "../assets/melodyofthespirit.jpg";
import serviceFlier from "../assets/serviceflier.jpg";

import { formFieldAnimation } from "../animation";
import { motion } from "framer-motion";


const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <VoterForm />
        <Scanner />
      </div>
    </>
  );
};

export default HomePage;
