import { useContext } from "react";
import { styles } from "../styles/styles";
import { qrCodeScannerContext } from "../context/qrCodeScannerContext";

const OperateQrScanner = () => {
  const { startScan, stopScan, handleSubmit, loading } = useContext(qrCodeScannerContext);
  return (
    <div className={`  flex justify-center items-center gap-[20px]`}>
      <button
        type="button"
         disabled={loading}
        onClick={startScan}
        className={`${styles.buttonPadding} ${loading?"bg-[#6636e089]":"bg-[#6636e0]"}  bg-[#6636e0] text-[white]`}
      >
        StartScanner
      </button>
      <div className={` justify-center`}>
        <button
        disabled={loading}
        className={`${styles.buttonPadding} ${loading?"bg-[#6636e089]":"bg-[#6636e0]"}  text-[white]`}
          onClick={handleSubmit}
        >
         {loading?"Voting...":"Cast Vote"}
        </button>
      </div>
    </div>
  );
};

export default OperateQrScanner;
