import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import fetchFromApi from "../../utils/fetchFromapi";

const QRScanner = () => {
  const [result, setResult] = useState(null);
  const [scanning, setScanning] = useState(true);

  const handleScan = async (data) => {
    if (data) {
      setResult(JSON.parse(data.text));
      setScanning(false);
      try {
        const response = await fetchFromApi(
          `GET`,
          `payment/get-payment-by-qr/${JSON.parse(data.text)._id}`
        );
        if (response) {
          alert(
            response?.message,
            response?.payment.name,
            response?.payment.email
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          padding: "1rem",
        }}
        onClick={() => {
          setScanning(true);
          setResult(null);
        }}
      >
        ESCANEAR
      </button>
      {result && <span>{result._id}</span>}
      {scanning && (
        <QrReader
          delay={300}
          onResult={(e) => handleScan(e)}
          onError={handleError}
          onScan={() => {}}
          style={{ width: "100%" }}
          constraints={{ aspectRatio: 1, facingMode: { ideal: "environment" } }}
          key="environment"
        />
      )}
    </div>
  );
};

export default QRScanner;
