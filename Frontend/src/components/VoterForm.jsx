import React, { useContext, useState } from "react";
import axios from "axios"; // For making HTTP requests
import { styles } from "../styles/styles";
// import { FormContext } from "../context/formContext";
import { qrCodeScannerContext } from "../context/qrCodeScannerContext";

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
    <form
      // onSubmit={handleSubmit}
      className={` container flex flex-col justify-center items-center gap-[20px]`}
    >
      <h1>Vote For your Favourite Performance!</h1>
      <div className="flex-col justify-between self-stretch gap-[30px]">
        <div className={`${""} flex flex-col flex-1  gap-[10px] md:gap-[16px]`}>
          <label htmlFor="fullName" className="text-[16px] text-black">
            Full Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={`${""} flex flex-col flex-1  gap-[10px] md:gap-[16px]`}>
          <label htmlFor="phone" className="text-[16px] text-black">
            Phone:
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col mt-[15px] flex-1 gap-[10px] md:gap-[16px] ">
          <label htmlFor="faculty" className="text-[16px]">
            Faculty:
          </label>
          <select
            className="form-select"
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
            <option value="Faculty of Agriculture">Faculty of Agriculture</option>
            <option value="Faculty of Art">Faculty of Art</option>
            <option value="Faculty of Education">Faculty of Education</option>
            <option value="Faculty of Environmental Design and Management">Faculty of Environmental Design and Management</option>
            <option value="Faculty of Law">Faculty of Law</option>
            <option value="Faculty of Science">Faculty of Science</option>
            <option value="Faculty of The Social Sciences">Faculty of The Social Sciences</option>
            <option value="Faculty of Administration and Management Sciences">Faculty of Administration and Management Sciences</option>
          </select>
        </div>
        <div className="flex flex-col  mt-[15px] flex-1 gap-[10px] md:gap-[16px] ">
          <label htmlFor="level" className="text-[16px]">
            Level:
          </label>
          <select
            className="form-select"
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
        <div className="flex flex-col mt-[15px]  flex-1 gap-[10px] md:gap-[16px] ">
          <label htmlFor="bestFacultyPerformance" className="text-[16px]">
            Best Faculty Performance:
          </label>
          <select
            className="form-select"
            id="bestFacultyPerformance"
            name="bestFacultyPerformance"
            value={formData.bestFacultyPerformance}
            onChange={handleChange}
            required
          >
            <option value="">Vote Your Best Faculty Performance</option>
            <option value="Faculty of Agriculture">Faculty of Agriculture</option>
            <option value="Faculty of Art">Faculty of Art</option>
            <option value="Faculty of Education">Faculty of Education</option>
            <option value="Faculty of Environmental Design and Management">Faculty of Environmental Design and Management</option>
            <option value="Faculty of Law">Faculty of Law</option>
            <option value="Faculty of Science">Faculty of Science</option>
            <option value="Faculty of The Social Sciences">Faculty of The Social Sciences</option>
            <option value="Faculty of Administration and Management Sciences">Faculty of Administration and Management Sciences</option>
          </select>
        </div>
        <div className="flex flex-col mt-[15px]  flex-1 gap-[10px] md:gap-[16px] ">
          <label htmlFor="bestIndividualPerformance" className="text-[16px] ">
            Best Individual Performance:
          </label>
          <select
            className="form-select"
            id="bestIndividualPerformance"
            name="bestIndividualPerformance"
            value={formData.bestIndividualPerformance}
            onChange={handleChange}
            required
          >
            <option value="">Vote Your Best individual performance</option>
            <option value="contestant 1">Contestant 1</option>
            <option value="contestant 2">Contestant 2</option>
            <option value="contestant 3">Contestant 3</option>
            <option value="contestant 4">Contestant 4</option>
            <option value="contestant 5">Contestant 5</option>
            <option value="contestant 6">Contestant 6</option>
            <option value="contestant 7">Contestant 7</option>
            <option value="contestant 8">Contestant 8</option>
            <option value="contestant 9">Contestant 9</option>
            <option value="contestant 10">Contestant 10</option>
            <option value="contestant 11">Contestant 11</option>
            <option value="contestant 12">Contestant 12</option>
            <option value="contestant 13">Contestant 13</option>
            <option value="contestant 14">Contestant 14</option>
            <option value="contestant 15">Contestant 15</option>
            <option value="contestant 16">Contestant 16</option>
            <option value="contestant 17">Contestant 17</option>
            <option value="contestant 18">Contestant 18</option>
            <option value="contestant 19">Contestant 19</option>
            <option value="contestant 20">Contestant 20</option>
           
          </select>
        </div>
        <p className={`container whitespace-wrap  text-center `}>
          QR CODE:
          {scanResult}
        </p>
        <div className="flex mt-[15px] flex-col sm:flex-z justify-end md:justify-center text-[right] my-[10px]">
          <button
            className={`${styles.buttonPadding} bg-Purple-60 text-[white] `}
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </div>
      {loading && <div className="loadingAnimation"></div>}
    </form>
  );
}

export default VoterForm;
