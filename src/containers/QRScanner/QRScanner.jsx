import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QRScanner = () => {
  const [result, setResult] = useState(null);
  const [scanning, setScanning] = useState(true);

  const handleScan = (data) => {
    if (data) {
      setResult(JSON.parse(data.text));
      console.log(JSON.parse(data.text));
      setScanning(false);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      {result && <span>{result._id}</span>}
      {scanning && (
        <QrReader
          delay={300}
          onResult={(e) => handleScan(e)}
          onError={handleError}
          onScan={() => {}}
          style={{ width: "100%" }}
        />
      )}
    </div>
  );
};

export default QRScanner;
