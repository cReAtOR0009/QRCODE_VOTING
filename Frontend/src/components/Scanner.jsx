import { useContext } from "react";
import { qrCodeScannerContext } from "../context/qrCodeScannerContext";
import { styles } from "../styles/styles";
import OperateQrScanner from "./OperateQrScanner";

const Scanner = () => {
  const { scanResult} = useContext(qrCodeScannerContext);

  return (
    <div>
      <div
        id="reader"
        style={{ width: "300px", height: "250px" }}
        className="container"
      ></div>
      <OperateQrScanner />
    </div>
  );
};

export default Scanner;
