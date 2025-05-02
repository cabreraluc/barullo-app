import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;
export const PaymentSectionContainer = styled.div`
  background-color: black;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-family: "Oswald";
  }
`;
export const Time = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DateSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 10%;
  gap: 10px;
`;

export const LogosSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 30%;
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
  font-family: "Oswald";
`;

export const TandaTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 5%;
  h2 {
    font-family: "Oswald";
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
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

  width: 7rem;
  padding-left: 0.5rem;
  margin: 1rem 0;
  cursor: pointer;
  height: 2rem;
  font-size: 0.7rem;
`;

export const MensajeDelFooter = styled.span`
  padding: 0 2rem;
  font-size: 12px;
  text-align: center;
  color: gray;
`;

export const MensajeDeError = styled.span`
  font-size: 12px;
`;

export const LogoPSB = styled.div`
  margin-top: 1rem;
`;

export const ContentWrapper = styled.div`
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WalletContainer = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  height: 10%;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  height: 20%;
`;

export const LogoImage = styled.img`
  width: 5rem;
`;
