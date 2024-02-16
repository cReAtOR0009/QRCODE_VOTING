import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QrCodeScannerProvider } from "./context/qrCodeScannerContext.jsx";
// import { QrScannerProvider } from "./context/scanner2Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <QrScannerProvider>
  <QrCodeScannerProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QrCodeScannerProvider>
  // </QrScannerProvider>
);
