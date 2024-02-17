import { useContext } from "react";
import { qrCodeScannerContext } from "../context/qrCodeScannerContext";
import { styles } from "../styles/styles";
import OperateQrScanner from "./OperateQrScanner";

import { formFieldAnimation } from "../animation";
import { motion } from "framer-motion";
import { Form } from "react-router-dom";

const FormField = ({ children }) => {
  return (
    <motion.div
      variants={formFieldAnimation}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

const Scanner = () => {
  const { scanResult } = useContext(qrCodeScannerContext);

  return (
    <div>
      <FormField>
        <div
          id="reader"
          style={{ width: "300px", height: "250px" }}
          className="container bgimage"
        ></div>
        <OperateQrScanner />
      </FormField>
    </div>
  );
};

export default Scanner;
