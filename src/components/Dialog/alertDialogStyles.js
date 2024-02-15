import styled from "styled-components";

export const BtnSaveDialog = styled.button`
  background: #d43436; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #f35658,
    #d43436
  ); /* Chrome 10-25, Safari 5.1-6 */

  color: black;
  border: none;
  border-radius: 10px;

  cursor: pointer;
  font-family: "Roboto", sans-serif !important;

  transition: 0.3s;
  &:hover {
    box-shadow: none;
  }
  font-size: 11.8px;
  width: 8rem;
  height: 2.6rem;
  align-text: center;
`;

export const BtnCancelDialog = styled.button`
  background-color: gray;
  color: black;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  font-family: "Roboto", sans-serif !important;

  transition: 0.3s;
  &:hover {
    box-shadow: none;
  }
  margin-left: 0.25rem;
  width: 8rem;
  height: 2.6rem;
  align-text: center;
  cursor: pointer;
  font-size: 11.8px;
`;
export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  color: #384764;
  padding: 0 30px;
  margin-top: 1.3rem;
  margin-bottom: 1.2rem;
`;
