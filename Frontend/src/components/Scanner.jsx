import { useContext } from "react";
import { qrCodeScannerContext } from "../context/qrCodeScannerContext";
import { styles } from "../styles/styles";
import OperateQrScanner from "./OperateQrScanner";

const Scanner = () => {
  const { displaySize, handleSizeChange, handleSubmit, display, setDisplay, startScan, stopScan } =
    useContext(qrCodeScannerContext);
  const { width, height } = displaySize;

  const handleClose = () => {
    stopScan()
    setDisplay(false)
  }


  return (
    <div className={`${ display ? "block" : "hidden"} bg-VoterFormbg h-[100vh] fixed top-0 left-0 bottom-0 right-0 z-[100]  w-full`}>
       <div
        onClick={handleClose}
        className="fixed z-50 right-0 top-2 p-2  mr-0 sm:mr-4 space-y-2 group group-hover:scale-[1.1] select-none cursor-pointer"
      >
        <span className="block h-1 w-6 sm:h-1 sm:w-10 origin-center rounded-full bg-[#6636e0] transition-transform ease-in-out rotate-45 translate-y-1.5 group-hover:bg-[#6636e09c]"></span>
        <span className="block h-1 w-6 sm:h-1 sm:w-10  origin-center rounded-full bg-[#6636e0] transition-transform ease-in-out -rotate-45  -translate-y-1.5 group-hover:bg-[#6636e09c]"></span>
      </div>
      <div className="my-[150px] mx-auto h-auto">

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
      {/* <div className="flex justify-center">
        <button
        className={`${styles.buttonPadding}   bg-[#6636e0] text-[white]`}
          onClick={handleSubmit}
        >
          Cast Vote
        </button>
      </div> */}
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
    </div>
  );
};

export default Scanner;
