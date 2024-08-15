import React from "react";
import Scanner from "../components/Scanner";
import VoterForm from "../components/VoterForm.jsx";
import Header from "../components/Header";
import programFlier from "../assets/melodyofthespiritBig.jpg";
import programFlier2 from "../assets/melodyofthespirit.jpg";
import serviceFlier from "../assets/serviceflier.jpg";

// import { formFieldAnimation } from "../animation";
import { motion } from "framer-motion";
import VotingSteps from "../components/VotingSteps.jsx";
import ContactHelp from "../components/ContactHelp.jsx";


const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <VotingSteps />
        <VoterForm />
        <Scanner />
      </div>
        <ContactHelp />
    </>
  );
};

export default HomePage;
