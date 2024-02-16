import { useContext, useState, createContext } from "react";
import { qrCodeScannerContext } from "./qrCodeScannerContext";


export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const { scanResult, setScanResult, formData, setFormData, handleSubmit, vote, handleChange } = useContext(qrCodeScannerContext);
  console.log("logging scan Result from form context", scanResult);
 
  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        handleChange,
        handleSubmit,
        vote,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
