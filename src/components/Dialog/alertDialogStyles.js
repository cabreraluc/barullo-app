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
  font-size: 1.5rem;
  font-weight: 600;
  color: #384764;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AlertEditContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const AlertEditFormContainer = styled.div`
  width: 25%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

export const AlertEditTitleContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 3rem;
  justify-content: center;
  align-items: center;
`;

export const AlertEditForm = styled.form`
  width: 70%;
  height: 40%;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const ButtonsContainer = styled.div`
  width: 25%;
  height: 3rem;
  display: flex;

  justify-content: space-around;
  align-items: center;
`;
export const DialogContentWrapper = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseButtonWrapper = styled.div`
  position: relative;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
`;

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextMessage = styled.span`
  text-align: center;
  font-size: 16px;
  color: rgba(56, 71, 100, 0.55);
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.7rem;
  margin-bottom: 2.2rem;
  gap: 1rem;
`;
