// import React, { useState, useEffect, createContext } from "react";
// import QrScanner from "qr-scanner";

// export const QrScannerContext = createContext();

// export const QrScannerProvider = ({ children }) => {
//   const [scanner, setScanner] = useState(null);
//   const [scanning, setScanning] = useState(false);
//   const [result, setResult] = useState(null);
//   let qrScanner;

//     // Success
//     const onScanSuccess = (result) => {
//         // 🖨 Print the "result" to browser console.
//         console.log(result);
        
//         setScannedResult(result?.data);
//       };
    
//       // Fail
//       const onScanFail = (err) => {
//         // 🖨 Print the "err" to browser console.
//         console.log(err);
//       };
    

//   useEffect(() => {
//     qrScanner = new QrScanner(document.getElementById("qr-video",  onScanSuccess, {
//         onDecodeError: onScanFail,
//         // 📷 This is the camera facing mode. In mobile devices, "environment" means back camera and "user" means front camera.
//         preferredCamera: "environment",
//         // 🖼 This will help us position our "QrFrame.svg" so that user can only scan when qr code is put in between our QrFrame.svg.
//         highlightScanRegion: true,
//         // 🔥 This will produce a yellow (default color) outline around the qr code that we scan, showing a proof that our qr-scanner is scanning that qr code.
//         highlightCodeOutline: true,
//         // 📦 A custom div which will pair with "highlightScanRegion" option above 👆. This gives us full control over our scan region.
//         // overlay: qrBoxEl?.current || undefined,
//       }));

//     // // Handle scan success
//     // qrScanner.onScan((scannedResult) => {
//     //   setResult(scannedResult);
//     //   setScanning(false);
//     // });

//     return () => {
//       if (qrScanner) {
//         qrScanner.stop();
//       }
//     };
//   }, []);

//   const startScanning = () => {
//     qrScanner = new QrScanner(document.getElementById("qr-video"));
//     if (!scanner) {
//       qrScanner.start();
//       setScanner(qrScanner);
//       setScanning(true);
//     }
//   };

//   const stopScanning = () => {
//     if (scanner) {
//       scanner.stop();
//       setScanner(null);
//       setScanning(false);
//     }
//   };

//   return (
//     <QrScannerContext.Provider value={{ startScanning, stopScanning, result }}>
//       {children}
//     </QrScannerContext.Provider>
//   );
// };
