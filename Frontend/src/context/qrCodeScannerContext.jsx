// Importing necessary modules from React, HTML5-QRCode, axios, and react-toastify
import { useState, useEffect, createContext, useContext } from "react";
import { Html5Qrcode } from "html5-qrcode";
import axios from "axios";
import { toast } from "react-toastify";

// Creating a context for QR code scanner
export const qrCodeScannerContext = createContext();

// Creating a provider component for the QR code scanner context
export const QrCodeScannerProvider = ({ children }) => {
  // State variables for managing camera, scan result, display, scanner state, vote value, loading state, display size, and form data
  const [cameraId, setCameraId] = useState(null);
  const [scanResult, setScanResult] = useState("");
  const [display, setDisplay] = useState(false);
  const [html5QrCode, setScannerState] = useState("");
  const [voteValue, setVoteValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [displaySize, setDisplaySize] = useState({
    width: 300,
    height: 200,
  });

  // Function to handle changes in display size
  const handleSizeChange = (e) => {
    setDisplaySize({ ...displaySize, [e.target.name]: e.target.value });
  };

  // State variable and function for managing form data
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    faculty: "",
    level: "",
    bestFacultyPerformance: "",
    voteUrl: "",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    // Prevent default form submission behavior
    if (e) {
      e.preventDefault();
    }

    // Set loading state to true when form submission starts
    setLoading(true);

    // Update form data with scan result
    const updatedFormData = { ...formData, voteUrl: scanResult };

    // Validate form fields
    if (
      !updatedFormData.fullName ||
      !updatedFormData.phone ||
      !updatedFormData.faculty ||
      !updatedFormData.level ||
      !updatedFormData.bestFacultyPerformance ||
      !updatedFormData.voteUrl
    ) {
      // Display error message if form fields are not filled
      toast.error(
        "Kindly ensure you fill all form fields correctly and scan a valid QR code to vote",
        {
          autoClose: 5000,
        }
      );
      setLoading(false); // Set loading state to false when form validation fails
      if (updatedFormData.voteUrl) {
        return;
      } else {
        return startScan();
      }
    }

    try {
      // Submit form data
      const response = await vote(
        updatedFormData,
        "https://qrvotingbackend.onrender.com/"
      );
      // Reset form data and loading state after successful submission
      setScanResult("");
      setFormData({
        fullName: "",
        phone: "",
        faculty: "",
        level: "",
        bestFacultyPerformance: "",
        voteUrl: "",
      });
      setLoading(false);
      console.log("response :", response);
    } catch (error) {
      // Handle submission error
      setLoading(false);
      console.error("Error submitting form:", error.response.data.Error);
      toast.error("An error occurred while attempting to vote", {
        autoClose: 5000,
      });
    }
  };

  // Function to retrieve available cameras
  async function getCameras() {
    await Html5Qrcode.getCameras()
      .then((devices) => {
        if (devices && devices.length) {
          const backCameraIndex = devices.findIndex(
            (device) =>
              device.label.includes("back") || device.label.includes("rear")
          );
          if (backCameraIndex != -1) {
            setCameraId(devices[backCameraIndex].id);
          } else {
            setCameraId(devices[0].id);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Function to handle successful QR code scan
  function onScanSuccess(decodedText, decodedResult) {
    setDisplay(false);
    setScanResult(decodedText);
    toast.warn(
      "Scan successful! Please ensure you click 'Cast Vote' to submit your vote",
      {
        autoClose: 5000,
      }
    );
    html5QrCode
      .stop()
      .then((ignore) => {
        console.log("QR Code scanning is stopped.", ignore);
      })
      .catch((err) => {
        console.log("QR Code scanning is not stopped.", err);
      });
    return;
  }

  // Function to handle QR code scan failure
  function onScanFailure(error) {
    console.warn(`Code scan error = ${error}`);
  }

  // Function to start QR code scanning
  function startScan() {
    setDisplay(true);
    html5QrCode
      .start(
        { deviceId: { exact: cameraId } },
        "",
        onScanSuccess,
        onScanFailure
      )
      .catch((err) => {
        console.log("Error starting scanner");
      });
  }

  // Function to stop QR code scanning
  function stopScan() {
    setDisplay(false);
    html5QrCode
      .stop()
      .then((ignore) => {
        console.log("QR Code scanning is stopped.", ignore);
      })
      .catch((err) => {
        console.log("Error stopping scanner", err);
      });
  }

  // Initialize scanner instance and retrieve available cameras on component mount
  useEffect(() => {
    if (!html5QrCode || html5QrCode == null) {
      let newScannerInstance = new Html5Qrcode("reader");
      setScannerState(newScannerInstance);
    } else {
      return html5QrCode;
    }
    if (!cameraId || cameraId == null) {
      getCameras();
    }
    return () => {
      return { html5QrCode, cameraId };
    };
  }, []);

  // Provide context values to children components
  return (
    <qrCodeScannerContext.Provider
      value={{
        cameraId,
        vote,
        setFormData,
        formData,
        handleChange,
        handleSubmit,
        setCameraId,
        scanResult,
        setScanResult,
        voteValue,
        setVoteValue,
        startScan,
        stopScan,
        loading,
        setLoading,
        setDisplaySize,
        displaySize,
        handleSizeChange,
        display,
      }}
    >
      {children}
    </qrCodeScannerContext.Provider>
  );
};

