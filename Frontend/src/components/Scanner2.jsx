import React, { useContext } from "react";
import { QrScannerContext } from "../context/scanner2Context";

const Scanner2 = () => {
  //   const useQrScanner = () => {
  //     return useContext(QrScannerContext);
  //   };
  const { startScanning, stopScanning, result } = useContext(QrScannerContext);

  return (
    <div>
      <video id="qr-video" style={{ width: "200px", height: "200" }}></video>
      <button onClick={startScanning}>Start Scanning</button>
      <button onClick={stopScanning}>Stop Scanning</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default Scanner2;
