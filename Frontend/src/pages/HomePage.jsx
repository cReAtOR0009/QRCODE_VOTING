import React from "react";
import Scanner from "../components/Scanner";
import GenerateQR from "../components/generateQR";
import VoterForm from "../components/VoterForm.jsx";
//C:\WEB-DEVELOPMENT\QRCODE_VOTING\Frontend\src\components\VoteForm.jsx
//Frontend\src\components\VoteForm.jsx
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { urls } from "../qrCodes";

const HomePage = () => {
  return (
    <>
      <Header />
      <div>
        <VoterForm />
        <Scanner />
        <div className="container qrcodeContainer">
          {urls.map((url, index) => (
            <GenerateQR key={index} value={url.url} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
