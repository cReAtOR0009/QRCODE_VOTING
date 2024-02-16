import { useContext } from "react";
import { qrCodeScannerContext } from "../context/qrCodeScannerContext";
import { styles } from "../styles/styles";

const Scanner = () => {
  const { scanResult, startScan, stopScan } = useContext(qrCodeScannerContext);

  return (
    <div>
      <div
        id="reader"
        style={{ width: "300px", height: "250px" }}
        className="container"
      ></div>
      <div
        className={`${styles.buttonPadding} ${styles.container} container flex justify-center items-center gap-[20px]`}
      >
        <button
          onClick={startScan}
          className={`${styles.buttonPadding}  bg-Purple-60 text-[white] `}
        >
          StartScan
        </button>
        <button
          onClick={stopScan}
          className={`${styles.buttonPadding}  bg-Purple-60 text-[white] `}
        >
          StopScan
        </button>
      </div>
      <p
        className={`${styles.container} container whitespace-wrap w-[90vw]  text-center `}
      >
        {scanResult}
      </p>
    </div>
  );
};

export default Scanner;
