import { useContext } from "react";
import { qrCodeScannerContext } from "../context/qrCodeScannerContext";
import { styles } from "../styles/styles";
import OperateQrScanner from "./OperateQrScanner";

const Scanner = () => {
  const { displaySize, handleSizeChange } = useContext(qrCodeScannerContext);
  const { width, height } = displaySize;

  return (
    <div>
      <div
        id="reader"
        style={{ width: `${width}px`, height: `${width - 50}px` }}
        className="container bgimage"
      ></div>
      <OperateQrScanner />
      <p className="text-center text-Purple-60">Adjust Scanner Size Here</p>
      <div className="flex justify-center items-center text-Purple-60 py-[10px] px-[20px]">
        <input
          // className=" h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          type="range"
          id="volume"
          name="width"
          min="100"
          max="250"
          value={displaySize.width}
          onChange={handleSizeChange}
        />
      </div>
      {/* <input
        className=""
        type="range"
        id="volume"
        name="height"
        min="100"
        max="500"
        value={displaySize.height}
        onChange={handleSizeChange}
      /> */}
    </div>
  );
};

export default Scanner;