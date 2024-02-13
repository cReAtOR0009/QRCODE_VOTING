import React, { useState } from "react";
import axios from "axios"; // For making HTTP requests

function VoterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    faculty: "",
    level: "",
    bestFaculty: "",
    bestIndividualPerformance: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the server
      const response = await axios.post("/submit-form", formData);
      console.log("Form submitted successfully:", response.data);
      // Optionally, reset the form fields after successful submission
      setFormData({
        fullName: "",
        phone: "",
        faculty: "",
        level: "",
        bestFaculty: "",
        bestIndividualPerformance: "",
        voteUrl:""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex mb-3">
        <label htmlFor="fullName" className="form-label">
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
      <div className="d-flex mb-3">
        <label htmlFor="phone" className="form-label">
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
      <div className="d-flex mb-3">
        <label htmlFor="faculty" className="form-label">
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
      <div className="d-flex mb-3">
        <label htmlFor="level" className="form-label">
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
      <div className="mb-3">
        <label htmlFor="bestFaculty" className="form-label">
          Best Faculty Performance:
        </label>
        <select
          className="form-select"
          id="bestFaculty"
          name="bestFaculty"
          value={formData.bestFaculty}
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
      <div className="mb-3">
        <label htmlFor="bestIndividualPerformance" className="form-label">
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
          <option value="">Select best individual performance</option>
          <option value="contestantA">Contestant A</option>
          <option value="contestantB">Contestant B</option>
          <option value="contestantC">Contestant C</option>
          <option value="contestantD">Contestant D</option>
          <option value="contestantE">Contestant E</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default VoterForm;
