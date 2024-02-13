import "./App.css";
import { useContext } from "react";
import { Html5Qrcode } from "html5-qrcode";
import VoterForm from "./components/voteForm";
import Scanner from "./components/Scanner";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  async function vote(url) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Assuming JSON data, adjust as needed
        },
        // body: JSON.stringify({ vote: voteValue }), // You can pass data to be sent in the body here
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json(); // Assuming the response is JSON, adjust as needed
      console.log("Success:", data.data);
      return data;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }

  return (
    <>
      <h1>Frontend Voting</h1>
      <div>
        <VoterForm />
        <Scanner />
      </div>
    </>
  );
}

export default App;
