import QRCode from "react-qr-code";

const GenerateQR = ({ value, index }) => {
  return (
    <div>
      {`QR ${index}`}
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 100,
          width: "100%",
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 256 256`}
          
        />
      </div>
    </div>
  );
};

export default GenerateQR;
