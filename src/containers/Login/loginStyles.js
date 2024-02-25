import styled from "styled-components";
import { Box } from "@mui/material";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const LoginForm = styled.form`
  width: 70%;
  height: 40%;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const LoginFormContainer = styled.div`
  width: 25%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 3rem;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Raleway", sans-serif;
`;

export const ButtonsContainer = styled.div`
  width: 25%;
  height: 3rem;
  display: flex;

  justify-content: space-around;
  align-items: center;
`;
