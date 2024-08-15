// Feedback.js
import React from "react";
import { animateFeedbackForm } from "../animations";

const Feedback = () => {
  return (
    <div className=" ">
      <div className="w-full  p-4 sm:p-4 rounded-lg shadow-lg ">
        <h2 className="text-3xl font-bold text-midnight-navy mb-6">
          We Value Your Feedback
        </h2>
        <form id="feedbackForm" className="space-y-6">
          <div className="">
            <label className=" left-2 top-0 text-muted-lavender transition-transform duration-300 transform -translate-y-6 scale-75 origin-top-left">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border-2 border-muted-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-royal-blue"
              onFocus={() => animateFeedbackForm()}
            />
          </div>
          <div className="">
            <label className=" left-2 top-0 text-muted-lavender transition-transform duration-300 transform -translate-y-6 scale-75 origin-top-left">
              Feedback
            </label>
            <textarea
              name="feedback"
              className="w-full h-32 px-4 py-2 border-2 border-muted-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-royal-blue"
              onFocus={() => animateFeedbackForm()}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-vibrant-royal-blue text-white rounded-lg shadow-lg hover:bg-deep-indigo transition duration-300"
            onMouseEnter={() => animateButtonHover()}
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
