import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { QrCodeScannerProvider } from "./context/qrCodeScannerContext.jsx";
import { NavigationProvider } from "./context/navigationContext.jsx";
import { FormProvider } from "./context/formContext.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QrCodeScannerProvider>
      <FormProvider>
        <NavigationProvider>
          <App />
          <ToastContainer />
        </NavigationProvider>
      </FormProvider>
    </QrCodeScannerProvider>
  </React.StrictMode>
);
