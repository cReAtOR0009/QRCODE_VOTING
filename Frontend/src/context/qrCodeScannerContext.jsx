import { useState, useEffect, createContext, useContext } from "react";
import { Html5Qrcode } from "html5-qrcode";
import axios from "axios";
import { toast } from "react-toastify";

export const qrCodeScannerContext = createContext();

export const QrCodeScannerProvider = ({ children }) => {
  const [cameraId, setCameraId] = useState(null);
  const [scanResult, setScanResult] = useState("");
  const [voteValue, setVoteValue] = useState(null);
  const [loading, setLoading] = useState(false);
  let html5QrCode;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    faculty: "",
    level: "",
    bestFacultyPerformance: "",
    bestinduvidualPerformance: "",
    voteUrl: "",
  });
  const vote = async (formData, url) => {
    try {
      const response = await axios.post(url, formData);

      if (response.data.Error !== "") {
        console.log("Vote Unsuccessful:", response.data);
        return toast.error(response.data.Error, {
          autoClose: 3000,
        });
      }
      // Handle successful response
      console.log("Vote successful:", response.data);
      toast.success(response.data.message, {
        autoClose: 3000,
      });
      return response.data; // Optionally return data
    } catch (error) {
      // Handle errors
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log("Error message:", error.response.data);
        toast.error(error.response.data.message, {
          autoClose: 3000,
        });
      } else if (error.request) {
        // The request was made but no response was received
        console.log("No response received from the server");
        toast.error("No response received from the server", {
          autoClose: 3000,
        });
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error setting up the request:", error.message);
        toast.error(error.message, {
          autoClose: 3000,
        });
      }
      // Optionally re-throw the error to propagate it to the caller
      throw error;
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    setLoading(true); // Set loading state to true when form submission starts

    const updatedFormData = { ...formData, voteUrl: scanResult };

    if ( !updatedFormData.voteUrl) {
      console.log("Ensure you fill all form fields and scan a valid QRcode to Vote");
      toast.error("Ensure you fill all form fields and scan a valid QRcode to Vote", {
        autoClose: 3000,
      });
      setLoading(false); // Set loading state to false when form validation fails
      return;
    }

    if (
      !updatedFormData.fullName ||
      !updatedFormData.phone ||
      !updatedFormData.faculty ||
      !updatedFormData.level ||
      !updatedFormData.bestFacultyPerformance ||
      !updatedFormData.bestinduvidualPerformance ||
      !updatedFormData.voteUrl
    ) {
      console.log("Ensure all fields are correct");
      toast.error("Ensure all fields are correct", {
        autoClose: 3000,
      });
      setLoading(false); // Set loading state to false when form validation fails
      return;
    }

    try {
      const response = await vote(
        updatedFormData,
        "https://qrvotingbackend.onrender.com/"
      );
      setScanResult("");
      setFormData({
        fullName: "",
        phone: "",
        faculty: "",
        level: "",
        bestFaculty: "",
        bestIndividualPerformance: "",
        url: "",
      });
      setLoading(false); // Set loading state to false after successful form submission
      toast.success(response.data.message, {
        autoClose: 3000,
      });
    } catch (error) {
      if (error.response && error.response.data.Error) {
        console.error("Error submitting form:", error.response.data.Error);
        toast.error(error.message, {
          autoClose: 3000,
        });
      } else {
        console.error("Unknown error occurred:", error);
        toast.error("An unknown error occurred", {
          autoClose: 3000,
        });
      }
      setLoading(false); // Set loading state to false after an error occurs
    }
  };

  async function getCameras() {
    // This method will trigger user permissions
    await Html5Qrcode.getCameras()
      .then((devices) => {
        if (devices && devices.length) {
          // console.log(devices);
          // Find the index of the back camera (usually the first device)
          const backCameraIndex = devices.findIndex(
            (device) =>
              device.label.includes("back") || device.label.includes("rear")
          );
          if (backCameraIndex != -1) {
            console.log("backCameraIndex", backCameraIndex);
            setCameraId(devices[backCameraIndex].id);
          } else {
            // If back camera not found, use the first available camera
            setCameraId(devices[0].id);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onScanSuccess(decodedText, decodedResult) {
    // console.log(`Code matched = ${decodedText}`, decodedResult);
    setScanResult(decodedText);
    handleSubmit(null);
    html5QrCode
      .stop()
      .then((ignore) => {
        console.log("QR Code scanning is stopped.", ignore);
        // handleSubmit();
      })
      .catch((err) => {
        console.log("QR Code scanning is nooootttt stopped.", err);
      });
    return;
  }

  function onScanFailure(error) {
    // console.log("scanning failed");
    console.warn(`Code scan error = ${error}`);
  }

  function startScan() {
    html5QrCode
      .start(
        { deviceId: { exact: cameraId } },
        "",
        onScanSuccess,
        onScanFailure
      )
      .catch((err) => {
        // Start fa
      });
  }

  function stopScan() {
    html5QrCode
      .stop()
      .then((ignore) => {
        // QR Code scanning is stopped.
        console.log("something went wrong stoping scanner", ignore);
      })
      .catch((err) => {
        console.log("something went wrong stoping scanner", err);
        // Stop failed, handle it.
      });
  }
  // getCameras();

  useEffect(() => {
    getCameras();
    console.log("re rendering page: useeffect");
    html5QrCode = new Html5Qrcode(/* element id */ "reader");
    return () => {
      return html5QrCode;
    };
  });
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
      }}
    >
      {children}
    </qrCodeScannerContext.Provider>
  );
};
