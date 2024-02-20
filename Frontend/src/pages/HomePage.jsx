import React from "react";
import Scanner from "../components/Scanner";
import VoterForm from "../components/VoterForm.jsx";
import Header from "../components/Header";
import programFlier from "../assets/melodyofthespiritBig.jpg";
import programFlier2 from "../assets/melodyofthespirit.jpg";
import serviceFlier from "../assets/serviceflier.jpg";

import { formFieldAnimation } from "../animation";
import { motion } from "framer-motion";

const FormField = ({ children }) => {
  return (
    <motion.div
      variants={formFieldAnimation}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <>
      {/* <Header /> */}
      <div>
        <FormField>
          <div className="flex justify-center w-[100vw] self-strecth">
            <img
              src={programFlier}
              alt="program flier"
              className="mt-[85px]  w-[100vw]"
            />
          </div>
        </FormField>
        <VoterForm />
        <Scanner />
        <div className="flex justify-center w-[100vw] self-strecth">
          <FormField>
            <img src={serviceFlier} alt="service flier" className="w-[100vw]" />
          </FormField>
        </div>
      </div>
    </>
  );
};

export default HomePage;
