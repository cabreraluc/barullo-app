import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import fetchFromApi from "../../../utils/fetchFromapi";
import {
  ScannerWrapper,
  ButtonWrapper,
  ScanButton,
  ResultText,
  QrReaderStyled,
} from "./qrScannerStyles";

const QRScanner = () => {
  const [result, setResult] = useState(null);
  const [scanning, setScanning] = useState(true);

  const handleScan = async (data) => {
    if (data) {
      try {
        const parsed = JSON.parse(data.text);
        if (parsed?._id?.length) {
          setResult(parsed);
          setScanning(false);
          const response = await fetchFromApi(
            "GET",
            `payment/get-payment-by-qr/${parsed._id}`
          );
          if (response) {
            alert(
              `${response?.message} | Nombre: ${response?.payment.name} | Email: ${response?.payment.email} | PASES: ${response?.payment.description}`
            );
          }
        }
      } catch (error) {
        console.error("Error al escanear QR:", error);
      }
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <ScannerWrapper>
      <ButtonWrapper>
        {!scanning && (
          <ScanButton
            onClick={() => {
              setScanning(true);
              setResult(null);
            }}
          >
            ESCANEAR
          </ScanButton>
        )}
      </ButtonWrapper>

      {result && <ResultText>{result._id}</ResultText>}

      {scanning && (
        <QrReaderStyled
          delay={300}
          onResult={handleScan}
          onError={handleError}
          constraints={{
            aspectRatio: 1,
            facingMode: { ideal: "environment" },
          }}
          key="environment"
        />
      )}
    </ScannerWrapper>
  );
};

export default QRScanner;
