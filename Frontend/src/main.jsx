import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QrCodeScannerProvider } from "./context/qrCodeScannerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QrCodeScannerProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </QrCodeScannerProvider>
);
