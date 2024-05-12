import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  height: 100vh;
  width: 100%;
  color: white;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const PaymentSectionContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 3rem;
  margin-top: 1rem;
`;
export const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 2rem;
`;
export const Time = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 1rem;
`;

export const BotonDeTicketsActive = styled.div`
  border: solid 1px white;
  padding: 1rem;
  borde-radius: 10px;
`;

export const BotonDeTickets = styled.div`
  padding: 1rem;
  borde-radius: 10px;
`;

export const TextoDelBoton = styled.div`
  cursor: pointer;
  color: white;
`;

export const TandaTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 2rem;
  margin-top: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 1rem 0;
`;

export const ContenedorDeInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin: 1rem 0;
`;

export const InputCargaDeInfo = styled.input`
  color: white;
  background-color: transparent;
  border: 1px solid white;
  height: 2rem;
  padding-left: 0.5rem;
  width: 13rem;
`;

export const BotonDeCompra = styled.button`
  color: white;
  background-color: transparent;
  border: 1px solid white;
  height: 2rem;
  width: 7rem;
  padding-left: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
`;

export const MensajeDelFooter = styled.span`
  padding: 0 2rem;
  padding-top: 4rem;
  text-align: center;
  color: gray;
`;

export const MensajeDeError = styled.span`
  color: red;
  font-size: 12px;
`;

export const LogoPSB = styled.div`
  margin: 2rem 0;
`;
