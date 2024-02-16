import "./App.css";
import { useContext } from "react";
import { Html5Qrcode } from "html5-qrcode";
// import VoterForm from "./components/VoteForm";
import VoterForm from "./components/VoteForm";
import Scanner from "./components/Scanner";
// import Scanner2 from "./components/Scanner2";
// import QrReader from "./components/Scanner3";
import "bootstrap/dist/css/bootstrap.min.css";
import GenerateQR from "./components/generateQR";
import { urls } from "./qrCodes";
// const { getDataArray } = require('.');

// const dataArray = getDataArray();

function App() {
  async function vote(url) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Assuming JSON data, adjust as needed
        },
        // body: JSON.stringify({ vote: voteValue }), // You can pass data to be sent in the body here
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json(); // Assuming the response is JSON, adjust as needed
      console.log("Success:", data.data);
      return data;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }

  return (
    <>
      <h1>QrCode Voting</h1>
      <div>
        <VoterForm />
        <Scanner />
        {/* <GenerateQR /> */}
        <div className="qrcodeContainer">
          {urls.map((url, index) => (
            <GenerateQR key={index} value={url.url} index={index} />
          ))}
        </div>
        {/* <Scanner2 /> */}
        {/* <QrReader /> */}
      </div>
    </>
  );
}

export default App;
