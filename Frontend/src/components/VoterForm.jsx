import React, { useContext, useState } from "react";
import axios from "axios"; // For making HTTP requests
import { styles } from "../styles/styles";
// import { FormContext } from "../context/formContext";
import { qrCodeScannerContext } from "../context/qrCodeScannerContext";
// import programFlier2 from "../assets/melodyofthespirit.jpg";
import { formFieldAnimation } from "../animation";
import { motion } from "framer-motion";

const VoterForm = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    scanResult,
    loading,
    setLoading,
  } = useContext(qrCodeScannerContext);

 const FormField = ({ children }) => {
    return (
      <motion.div
        variants={formFieldAnimation}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    );
  };
  return (
    <form
      // onSubmit={handleSubmit}
      className={` container flex flex-col justify-center items-center gap-[20px] md:gap-[50px] `}
    >
      <FormField>
        <h1 className="text-[20px] md:text-[50px] ">
          Vote For your Favourite Performance!
        </h1>
      </FormField>

      <div className="flex-col  justify-between self-stretch gap-[50px] md:gap-[40px]">
        <FormField>
          <div
            className={`${""} flex flex-col flex-1 mb-[10px] gap-[5px] md:gap-[16px]`}
          >
            <label
              htmlFor="fullName"
              className="text-[20px] text-Purple-60 text-italic"
            >
              Full Name:
            </label>
            <input
              type="text"
              className="h-[40px] focus:border focus:text-Grey-08 focus:shadow-lg outline-none focus:border-Purple-60 px-[5px] bg-[white] border border-Purple-60 rounded"
              id="fullName"
              name="fullName"
              placeholder="kindly fill your full name here"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
        </FormField>
        <FormField>
          <div
            className={`${""} flex flex-col flex-1 mb-[10px] gap-[5px] md:gap-[16px]`}
          >
            <label htmlFor="phone" className="text-[20px] text-Purple-60">
              Phone:
            </label>
            <input
              type="number"
              className="h-[40px] focus:border focus:text-Grey-08 focus:shadow-lg outline-none focus:border-Purple-60 px-[5px] bg-[white] border border-Purple-60 rounded"
              id="phone"
              name="phone"
              placeholder="kindly fill your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </FormField>
        <FormField>
          <div className="flex flex-col mt-[15px] flex-1 mb-[10px] gap-[5px] md:gap-[16px]">
            <label htmlFor="faculty" className="text-[20px] text-Purple-60">
              Faculty:
            </label>
            <select
              className="h-[40px] focus:border focus:text-Grey-08 focus:shadow-lg outline-none focus:border-Purple-60 px-[5px] bg-[white] border border-Purple-60 rounded"
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
        </FormField>
        <FormField>
          <div className="flex flex-col  mt-[15px] flex-1 mb-[10px] gap-[5px] md:gap-[16px]">
            <label htmlFor="level" className="text-[20px] text-Purple-60">
              Level:
            </label>
            <select
              className="h-[40px] focus:border focus:text-Grey-08 focus:shadow-lg outline-none focus:border-Purple-60 px-[5px] bg-[white] border border-Purple-60 rounded"
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
        </FormField>
        <FormField>
          <div className="flex flex-col mt-[15px]  flex-1 mb-[10px] gap-[5px] md:gap-[16px]">
            <label
              htmlFor="bestFacultyPerformance"
              className="text-[20px] text-Purple-60"
            >
              Best Faculty Performance:
            </label>
            <select
              className="h-[40px] focus:border focus:text-Grey-08 focus:shadow-lg outline-none focus:border-Purple-60 px-[5px] bg-[white] border border-Purple-60 rounded"
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
        </FormField>
        <FormField>
          <div className="flex flex-col mt-[15px]  flex-1 mb-[10px] gap-[5px] md:gap-[16px]">
            <label
              htmlFor="bestIndividualPerformance"
              className="text-[20px] text-Purple-60"
            >
              Best Individual Performance:
            </label>
            <select
              className="h-[40px] focus:border focus:text-Grey-08 focus:shadow-lg outline-none focus:border-Purple-60 px-[5px] bg-[white] border border-Purple-60 rounded"
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
        </FormField>
        <FormField>
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
        </FormField>
      </div>
      {loading && <div className="loadingAnimation"></div>}
    </form>
  );
};

export default VoterForm;
