import React, { useContext, useState } from "react";
import axios from "axios"; // For making HTTP requests
import { styles } from "../styles/styles";
import { FormContext } from "../context/formContext";

function VoterForm() {
  const { formData, handleChange, handleSubmit } = useContext(FormContext);

  return (
    <form
      // onSubmit={handleSubmit}
      className={`${styles.container} flex flex-col gap-[20px]`}
    >
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
            type="text"
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
            <option value="">Select your faculty</option>
            <option value="faculty1">Faculty 1</option>
            <option value="faculty2">Faculty 2</option>
            <option value="faculty3">Faculty 3</option>
            <option value="faculty4">Faculty 4</option>
            <option value="faculty5">Faculty 5</option>
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
            <option value="">Select best faculty Performance</option>
            <option value="faculty1">Faculty 1</option>
            <option value="faculty2">Faculty 2</option>
            <option value="faculty3">Faculty 3</option>
            <option value="faculty4">Faculty 4</option>
            <option value="faculty5">Faculty 5</option>
          </select>
        </div>
        <div className="flex flex-col mt-[15px]  flex-1 gap-[10px] md:gap-[16px] ">
          <label htmlFor="bestinduvidualPerformance" className="text-[16px] ">
            Best Individual Performance:
          </label>
          <select
            className="form-select"
            id="bestIndividualPerformance"
            name="bestinduvidualPerformance"
            value={formData.bestinduvidualPerformance}
            onChange={handleChange}
            required
          >
            <option value="">Select best individual performance</option>
            <option value="contestant A">Contestant A</option>
            <option value="contestant B">Contestant B</option>
            <option value="contestant C">Contestant C</option>
            <option value="contestant D">Contestant D</option>
            <option value="contestant E">Contestant E</option>
            <option value="contestant F">Contestant E</option>
          </select>
        </div>
        <div className="flex mt-[15px] flex-col sm:flex-z justify-end md:justify-center text-[right] my-[10px]">
          <button
            className={`${styles.buttonPadding} bg-Purple-60 text-[white] `}
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default VoterForm;
