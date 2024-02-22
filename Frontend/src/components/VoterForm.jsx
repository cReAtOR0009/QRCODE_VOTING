import React, { useContext, useState } from "react";
import axios from "axios"; // For making HTTP requests
import { styles } from "../styles/styles";
// import { FormContext } from "../context/formContext";
import { qrCodeScannerContext } from "../context/qrCodeScannerContext";
import OperateQrScanner from "./OperateQrScanner";

const VoterForm = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    scanResult,
    loading,
    setLoading,
  } = useContext(qrCodeScannerContext);

  return (
    <div
      // onSubmit={handleSubmit}
      className={` container flex flex-col justify-center items-center gap-[20px] md:gap-[50px] `}
    >
      <h1 className="text-[20px] md:text-[50px] text-Purple-60 font-medium">
        VOTE FOR YOUR FAVOURITE FACULTY PERFORMANCE!
      </h1>
      <div className="flex-col  justify-between self-stretch gap-[50px] md:gap-[40px]">
        <div
          className={`${""} flex flex-col flex-1 mb-[10px] gap-[5px] md:gap-[16px]`}
        >
          <label
            htmlFor="fullName"
            className="text-[20px] text-Purple-60 text-italic "
          >
            Full Name:
          </label>
          <input
            type="text"
            className="h-[40px]  text-[#4e52b9]  focus:text-[#605ce8] focus:border focus:shadow-lg outline-none focus:border-Purple-60 px-[5px] bg-[white] border border-Purple-60 rounded"
            id="fullName"
            name="fullName"
            placeholder="kindly fill your full name here"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div
          className={`${""} flex flex-col flex-1 mb-[10px] gap-[5px] md:gap-[16px]`}
        >
          <label htmlFor="phone" className="text-[20px] text-Purple-60">
            Phone:
          </label>
          <input
            type="number"
            className="h-[40px] focus:border  text-[#4e52b9]  focus:text-[#605ce8] focus:shadow-lg outline-none focus:border-Purple-60 px-[5px] bg-[white] border border-Purple-60 rounded"
            id="phone"
            name="phone"
            placeholder="kindly fill your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col mt-[15px] flex-1 mb-[10px] gap-[5px] md:gap-[16px]">
          <label htmlFor="faculty" className="text-[20px] text-Purple-60">
            Faculty:
          </label>
          <select
            className="h-[40px] focus:border text-[#4e52b9]  focus:text-[#605ce8] focus:shadow-lg outline-none focus:border-Purple-60 px-[5px] bg-[white] border border-Purple-60 rounded"
            id="faculty"
            name="faculty"
            value={formData.faculty}
            onChange={handleChange}
            required
          >
            {/* "Faculty of Agriculture",
        "Faculty of Art",
        "Faculty of Education",
        "Faculty of Environmental Design and Management",
        "Faculty of Law",
        "Faculty of Science",
        "Faculty of The Social Sciences",
        "Faculty of Administration and Management Sciences", */}
            <option value="">Select Your Faculty</option>
            <option value="Faculty of Agriculture">
              Faculty of Agriculture
            </option>
            <option value="Faculty of Art">Faculty of Art</option>
            <option value="Faculty of Education">Faculty of Education</option>
            <option value="Faculty of Environmental Design and Management">
              Faculty of Environmental Design and Management
            </option>
            <option value="Faculty of Law">Faculty of Law</option>
            <option value="Faculty of Science">Faculty of Science</option>
            <option value="Faculty of The Social Sciences">
              Faculty of The Social Sciences
            </option>
            <option value="Faculty of Administration and Management Sciences">
              Faculty of Administration and Management Sciences
            </option>
          </select>
        </div>
        <div className="flex flex-col  mt-[15px] flex-1 mb-[10px] gap-[5px] md:gap-[16px]">
          <label htmlFor="level" className="text-[20px] text-Purple-60">
            Level:
          </label>
          <select
            className="h-[40px] focus:border  text-[#4e52b9]  focus:text-[#605ce8] focus:shadow-lg outline-none focus:border-Purple-60 px-[5px] bg-[white] border border-Purple-60 rounded"
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
          >
            <option value="">Select Your Level</option>
            <option value="100">100 Level</option>
            <option value="200">200 Level</option>
            <option value="300">300 Level</option>
            <option value="400">400 Level</option>
            <option value="500">500 Level</option>
          </select>
        </div>
        <div className="flex flex-col mt-[15px]  flex-1 mb-[10px] gap-[5px] md:gap-[16px]">
          <label
            htmlFor="bestFacultyPerformance"
            className="text-[20px] text-Purple-60"
          >
            Best Faculty Performance:
          </label>
          <select
            className="h-[40px] focus:border  text-[#4e52b9]  focus:text-[#605ce8] focus:shadow-lg outline-none focus:border-Purple-60 px-[5px] bg-[white] border border-Purple-60 rounded"
            id="bestFacultyPerformance"
            name="bestFacultyPerformance"
            value={formData.bestFacultyPerformance}
            onChange={handleChange}
            required
          >
            <option value="">Vote Your Best Faculty Performance</option>
            <option value="Faculty of Agriculture">
              Faculty of Agriculture
            </option>
            <option value="Faculty of Art">Faculty of Art</option>
            <option value="Faculty of Education">Faculty of Education</option>
            <option value="Faculty of Environmental Design and Management">
              Faculty of Environmental Design and Management
            </option>
            <option value="Faculty of Law">Faculty of Law</option>
            <option value="Faculty of Science">Faculty of Science</option>
            <option value="Faculty of The Social Sciences">
              Faculty of The Social Sciences
            </option>
            <option value="Faculty of Administration and Management Sciences">
              Faculty of Administration and Management Sciences
            </option>
          </select>
        </div>

        <div className="w-full max-w-[100vw]  flex-0 text-wrap">
          <input
            className="h-[40px] w-[100%]  text-[#4e52b9]  focus:text-[#605ce8] focus:border focus:shadow-lg outline-none focus:border-Purple-60 px-[5px] bg-[white] border border-Purple-60 rounded"
            type="text"
            value={scanResult}
            readOnly
            // className="container"
            placeholder="kindly scan a qrcode to fill here, you cant fill manually"
          />
        </div>

        <div className="flex mt-[15px] flex-col sm:flex-z justify-end md:justify-center text-[right] my-[10px]">
          <OperateQrScanner />
        </div>
      </div>
      {loading && <div className="loadingAnimation"></div>}
    </div>
  );
};

export default VoterForm;
