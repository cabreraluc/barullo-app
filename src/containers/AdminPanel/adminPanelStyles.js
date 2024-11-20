import styled from "styled-components";

export const PanelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding-top: 2rem;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: white;
`;
export const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  background-color: transparent;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  color: black;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  height: 90%;
  display: flex;
  color: black;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

export const imageLogin = styled.img`
  width: 100%; // Ancho completo
  height: 100%; // Alto completo
  object-fit: cover; // Ajustar la imagen al contenedor
`;

export const Button = styled.button`
  width: 13vh; // Ancho completo
  height: 4vh; // Alto completo
  border: none;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  background-color: black;
  color: white;
  font-size: 2vh;
  font-weight: 500;
  cursor: pointer;
  border-radius: 20px;
  &:hover {
    background-color: black;
  }
`;
