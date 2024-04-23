import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import fetchFromApi from "../../utils/fetchFromapi";

const QRScanner = () => {
  const [result, setResult] = useState(null);
  const [scanning, setScanning] = useState(true);

  const handleScan = async (data) => {
    if (data) {
      if (JSON.parse(data.text)?._id.length) {
        setResult(JSON.parse(data.text));
        setScanning(false);
        try {
          const response = await fetchFromApi(
            `GET`,
            `payment/get-payment-by-qr/${JSON.parse(data.text)._id}`
          );
          if (response) {
            alert(
              `${response?.message} | Nombre:${response?.name} | Email:${response?.payment.email} | PASES:${response?.payment.description}`
            );
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("Estas escaneando cualquier gilada");
      }
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div style={{}}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {!scanning ? (
          <button
            style={{
              padding: "1rem",
              marginTop: "5rem",
            }}
            onClick={() => {
              setScanning(true);
              alert("BOTON DE NMIERDA");
              setResult(null);
            }}
          >
            ESCANEAR
          </button>
        ) : null}
      </div>
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
