import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Html5Qrcode } from "html5-qrcode";
// import { Html5Qrcode } from "html5-qrcode";

function App() {
  const [cameraId, setCameraId] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [voteValue, setVoteValue] = useState(null);
  const config = { fps: 10, qrbox: { width: 250, height: 250 } };
  let html5QrCode;

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

  async function getCameras() {
    // This method will trigger user permissions
    await Html5Qrcode.getCameras()
      .then((devices) => {
        /**
         * devices would be an array of objects of type:
         * { id: "id", label: "label" }
         */
        if (devices && devices.length) {
          setCameraId(devices[0].id);
          console.log(cameraId);
          // .. use this to start scanning.
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code matched = ${decodedText}`, decodedResult);
    setScanResult(decodedText);
    html5QrCode
      .stop()
      .then((ignore) => {
        console.log("QR Code scanning is stopped.", ignore);
        vote("http://localhost:3000/");
      })
      .catch((err) => {
        console.log("QR Code scanning is nooootttt stopped.", err);
      });
    return;
  }

  function onScanFailure(error) {
    // console.log("scanning failed");
    console.warn(`Code scan error = ${error}`);
  }

  function startScan() {
    // html5QrCode = new Html5Qrcode(/* element id */ "reader");
    getCameras();
    html5QrCode
      .start(
        { deviceId: { exact: cameraId } },
        config,
        onScanSuccess,
        onScanFailure
      )
      .catch((err) => {
        // Start fa
      });
  }

  function stopScan() {
    html5QrCode
      .stop()
      .then((ignore) => {
        // QR Code scanning is stopped.
        console.log("something went wrong stoping scanner", ignore);

      })
      .catch((err) => {
        console.log("something went wrong stoping scanner", err);
        // Stop failed, handle it.
      });
  }
  getCameras();

  useEffect(() => {
    html5QrCode = new Html5Qrcode(/* element id */ "reader");
    return () => {
      return html5QrCode;
    };
  });

  return (
    <>
      <h1>Frontend Voting</h1>
      <div id="reader" width="600px"></div>
      <div>
        {/* <input type="file" id="qr-input-file" accept="image/*" /> */}
        {/* <input
          type="file"
          onChange={(e) => scanFile(e)}
          id="qr-input-file"
          accept="image/*"
          capture
        /> */}
      </div>
      <button onClick={startScan}>StartScan</button>
      <button onClick={stopScan}>StopScan</button>
      <p>{scanResult}</p>
    </>
  );
}

export default App;
