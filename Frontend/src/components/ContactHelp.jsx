// ContactHelp.js
import React from "react";
import { animateFormFields, animateButtonHover } from "../animations";
import { styles } from "../styles/styles";
import Feedback from "./Feedback";

const ContactHelp = () => {
  return (
    <div
      className={`${styles.container} min-h-screen flex items-center justify-center py-12`}
    >
      <div className="w-full  mx-auto flex flex-wrap md:flex-nowrap">
        {/* Contact Form */}
        <div className="w-full md:w-1/2  p-4 rounded-lg shadow-lg ">
          <h2 className="text-3xl font-bold text-midnight-navy mb-6">
            Get in Touch
          </h2>
          <form id="contactForm" className="space-y-6">
            <div className="">
              <label className=" left-2 top-0 text-muted-lavender transition-transform duration-300 transform -translate-y-6 scale-75 origin-top-left">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border-2 border-muted-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-royal-blue"
                onFocus={() => animateFormFields()}
              />
            </div>
            <div className="">
              <label className=" left-2 top-0 text-muted-lavender transition-transform duration-300 transform -translate-y-6 scale-75 origin-top-left">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border-2 border-muted-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-royal-blue"
                onFocus={() => animateFormFields()}
              />
            </div>
            <div className="">
              <label className="absolute left-2 top-0 text-muted-lavender transition-transform duration-300 transform -translate-y-6 scale-75 origin-top-left">
                Message
              </label>
              <textarea
                name="message"
                className="w-full h-32 px-4 py-2 border-2 border-muted-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-royal-blue"
                onFocus={() => animateFormFields()}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-vibrant-royal-blue text-white rounded-lg shadow-lg hover:bg-deep-indigo transition duration-300"
              onMouseEnter={() => animateButtonHover()}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Help Links */}
        <div className="w-full md:w-1/2  flex flex-col ">
        <Feedback />
          <ul className="flex items-center space-y-4 text-lg text-midnight-navy">
          <h2 className="text-2xl font-bold text-midnight-navy">
            Help Center:
          </h2>
            <li>
              <a href="#faq" className="hover:text-vibrant-royal-blue">
                FAQ
              </a>
            </li>
            <li>
              <a href="#support" className="hover:text-vibrant-royal-blue">
                Support
              </a>
            </li>
            <li>
              <a href="#guides" className="hover:text-vibrant-royal-blue">
                User Guides
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-vibrant-royal-blue">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactHelp;
