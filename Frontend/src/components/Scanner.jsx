import { useContext } from "react";
import { qrCodeScannerContext } from "../context/qrCodeScannerContext";
import { styles } from "../styles/styles";
import OperateQrScanner from "./OperateQrScanner";

const Scanner = () => {
  const { displaySize, handleSizeChange, handleSubmit, display } =
    useContext(qrCodeScannerContext);
  const { width, height } = displaySize;

  return (
    <div className="bg-VoterFormbg">
      <div
        id="reader"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          display: display ? "flex" : "none",
        }}
      >
        click startscan to show scanner here
      </div>
      <div className="flex justify-center">
        <button
        className={`${styles.buttonPadding}   bg-[#6636e0] text-[white]`}
          onClick={handleSubmit}
        >
          Cast Vote
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
