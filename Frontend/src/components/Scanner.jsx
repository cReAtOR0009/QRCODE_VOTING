import { useEffect, useState, useContext } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { qrCodeScannerContext } from "../context/qrCodeScannerContext";

const Scanner = () => {
  const { scanResult, startScan, stopScan } = useContext(qrCodeScannerContext);

  return (
    <div>
      <div id="reader" width="600px"></div>
      <button onClick={startScan}>StartScan</button>
      <button onClick={stopScan}>StopScan</button>
      <p>{scanResult}</p>
    </div>
  );
};

export default Scanner;
