import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import fetchFromApi from "../../utils/fetchFromapi";

const QRScanner = () => {
  const [result, setResult] = useState(null);
  const [scanning, setScanning] = useState(true);
  const [loading, setLoading] = useState(false);
  const [responseFromApi, setResponseFromApi] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setResult(JSON.parse(data.text));
      console.log(JSON.parse(data.text));
      setScanning(false); // Detener la lectura de la cámara
      //   handleScanToApi();
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  //   const handleScanToApi = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetchFromApi(
  //         `GET`,
  //         `payment/get-payment-by-qr/${result._id}`
  //       );

  //       if (response) {
  //         console.log(response);
  //         alert(response.message);
  //       }
  //     } catch (error) {
  //       alert(error);
  //     }
  //     setLoading(false);
  //   };

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
