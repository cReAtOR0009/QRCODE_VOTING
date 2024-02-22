import { useContext } from "react";
import { qrCodeScannerContext } from "../context/qrCodeScannerContext";
import { styles } from "../styles/styles";
import OperateQrScanner from "./OperateQrScanner";

const Scanner = () => {
  const { displaySize, handleSizeChange, handleSubmit } =
    useContext(qrCodeScannerContext);
  const { width, height } = displaySize;

  return (
    <div>
      <div
        id="reader"
        style={{ width: `${width}px`, height: `${height}px` }}
        // className="container bgimage"
      >
        click startscan to show scanner here
      </div>
      <div className="flex justify-center">
        <button
          className={`${styles.buttonPadding} bg-Purple-60 text-[white] my-[20px]`}
          onClick={handleSubmit}
        >
          cast Vote
        </button>
      </div>
      <p className="text-center text-Purple-60">Adjust Scanner Size Here</p>
      <div className="flex justify-center items-center text-Purple-60 py-[10px] px-[20px]">
        <input
          type="range"
          id="volume"
          name="width"
          min="100"
          max="250"
          value={displaySize.width}
          onChange={handleSizeChange}
        />
      </div>
    </div>
  );
};

export default Scanner;
