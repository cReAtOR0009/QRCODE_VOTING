import { useState, useEffect, createContext } from "react";
import { Html5Qrcode } from "html5-qrcode";

export const qrCodeScannerContext = createContext();

export const QrCodeScannerProvider = ({ children }) => {
  const [cameraId, setCameraId] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [voteValue, setVoteValue] = useState(null);
  const config = { fps: 10, qrbox: { width: 200, height: 200 } };
  let html5QrCode;

  async function getCameras() {
    // This method will trigger user permissions
    await Html5Qrcode.getCameras()
      .then((devices) => {
        /**
         * devices would be an array of objects of type:
         * { id: "id", label: "label" }
         */
        // if (devices && devices.length) {
        //   setCameraId(devices[0].id);
        //   console.log(cameraId);
        //   // .. use this to start scanning.
        // }

        if (devices && devices.length) {
          console.log(devices);
          // Find the index of the back camera (usually the first device)
          const backCameraIndex = devices.findIndex(
            (device) =>
              device.label.includes("back") || device.label.includes("rear")
          );
          if (backCameraIndex != -1) {
            console.log("backCameraIndex", backCameraIndex);
            setCameraId(devices[backCameraIndex].id);
          } else {
            // If back camera not found, use the first available camera
            setCameraId(devices[0].id);
          }
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
    // getCameras();
    html5QrCode
      .start(
        { deviceId: { exact: cameraId } },
        "",
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
  // getCameras();

  useEffect(() => {
    getCameras();
    html5QrCode = new Html5Qrcode(/* element id */ "reader");
    return () => {
      return html5QrCode;
    };
  });
  return (
    <qrCodeScannerContext.Provider
      value={{
        cameraId,
        setCameraId,
        scanResult,
        voteValue,
        setVoteValue,
        startScan,
        stopScan,
      }}
    >
      {children}
    </qrCodeScannerContext.Provider>
  );
};
