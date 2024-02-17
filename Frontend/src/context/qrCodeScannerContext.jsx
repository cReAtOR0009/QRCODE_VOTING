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
    bestIndividualPerformance: "",
    voteUrl: "",
  });

  const vote = async (formData, url) => {
    try {
      const response = await axios.post(url, formData);

      if (response.data.Error !== null) {
        console.log("Vote Unsuccessful:", response.data.Error);
        toast.error(response.data.Error, {
          autoClose: 5000,
        });
      } else {
        // Handle successful response
        console.log("Vote successful:", response.data);
        toast.success(response.data.message, {
          autoClose: 5000,
        });
        // Optionally return data
        return response.data;
      }
    } catch (error) {
      // console.error("Error submitting form:", error.response.data.Error);
      // toast.error(error.response.data.Error, {
      //   autoClose: 5000,
      // });
      throw new Error(error);
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

    if (
      !updatedFormData.fullName ||
      !updatedFormData.phone ||
      !updatedFormData.faculty ||
      !updatedFormData.level ||
      !updatedFormData.bestFacultyPerformance ||
      !updatedFormData.bestIndividualPerformance ||
      !updatedFormData.voteUrl
    ) {
      console.log("updatedFormData", updatedFormData);
      console.log(
        "kindly Ensure you fill all form fields correctly and scan a valid QRcode to Vote"
      );
      toast.error(
        "kindly Ensure you fill all form fields correctly and scan a valid QRcode to Vote",
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
        bestFacultyPerformance: "",
        bestIndividualPerformance: "",
        voteUrl: "",
      });
      setLoading(false); // Set loading state to false after successful form submission
      console.log("response :", response);
    } catch (error) {
      setLoading(false); // Set loading state to false after an error occurs
      console.log("errrror", error);
      console.error("Error submitting form:", error.response.data.Error);
      toast.error(error.response.data.Error, {
        autoClose: 5000,
      });
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

    //  handleSubmit(null);
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
