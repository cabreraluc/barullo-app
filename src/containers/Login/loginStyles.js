import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const LoginFormContainer = styled.div`
  width: 80%;
  height: 60%;
  max-width: 60rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: red;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 30px 30px 30px 30px;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
`;

export const LoginForm = styled.form`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 1rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  color: black;
`;

export const Title = styled.h1`
  font-family: "Oswald", sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  color: black;
  justify-content: space-around;
  align-items: center;
`;

export const imageLogin = styled.img`
  width: 100%; // Ancho completo
  height: 100%; // Alto completo
  object-fit: cover; // Ajustar la imagen al contenedor
`;

export const ButtonMUi = styled.button`
  width: 100%; // Ancho completo
  height: 100%; // Alto completo
  border: none;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  background-color: black;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background-color: black;
  }
`;

export const Checkbox = styled.button`
  width: 1rem; // Ancho completo
  height: 1rem; // Alto completo
  border-color: gray;
  background-color: white;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const CheckBoxContainer = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;

  justify-content: left;
  align-items: center;
`;

export const Overlay = styled.div`
  display: flex;
  color: black; /* color del texto */
  font-size: 4rem; /* tamaño del texto */
  font-weight: 200;
`;
