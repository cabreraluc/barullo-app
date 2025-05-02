import styled from "styled-components";
import { QrReader } from "react-qr-reader";

export const ScannerWrapper = styled.div`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ScanButton = styled.button`
  padding: 1rem;
  margin-top: 5rem;
  font-size: 1rem;
  cursor: pointer;
`;

export const ResultText = styled.span`
  display: block;
  text-align: center;
  margin-top: 1rem;
  font-weight: bold;
`;

export const QrReaderStyled = styled(QrReader)`
  width: 100%;
`;
