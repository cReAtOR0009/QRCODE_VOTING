import { useContext, useState, createContext } from "react";
import { qrCodeScannerContext } from "./qrCodeScannerContext";


export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const { formData, setFormData, handleSubmit, vote, handleChange } = useContext(qrCodeScannerContext);
 
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
