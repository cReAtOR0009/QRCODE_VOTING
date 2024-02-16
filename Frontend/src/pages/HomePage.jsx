import React from "react";
import Scanner from "../components/Scanner";
import GenerateQR from "../components/generateQR";
import VoterForm from "../components/VoteForm";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { urls } from "../qrCodes";

const HomePage = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Header />
      <div>
        <VoterForm />
        <Scanner />
        {/* <GenerateQR /> */}
        <div className="qrcodeContainer">
          {urls.map((url, index) => (
            <GenerateQR key={index} value={url.url} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
