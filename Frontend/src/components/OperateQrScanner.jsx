import { useContext } from "react";
import { styles } from "../styles/styles";
import { qrCodeScannerContext } from "../context/qrCodeScannerContext";

const OperateQrScanner = () => {
  const { startScan, stopScan } = useContext(qrCodeScannerContext);
  return (
    <div className={`  flex justify-center items-center gap-[20px]`}>
      <button
        type="button"
        onClick={startScan}
        className={`${styles.buttonPadding}  bg-Purple-60 text-[white] `}
      >
        StartScanner
      </button>
      <button
        type="button"
        onClick={stopScan}
        className={`${styles.buttonPadding}  bg-Purple-60 text-[white] `}
      >
        StopScanner
      </button>
    </div>
  );
};

export default OperateQrScanner;
