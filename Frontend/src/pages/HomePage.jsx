import React from "react";
import Scanner from "../components/Scanner";
import VoterForm from "../components/VoterForm.jsx";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div>
        <VoterForm />
        <Scanner />
      </div>
    </>
  );
};

export default HomePage;
