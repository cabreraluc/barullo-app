import styled from "styled-components";

export const NextEventsContainer = styled.div`
  display: flex;
  justify-content: center;

  height: 100%;
`;
export const Card = styled.div`
  background: ${({ image }) => `url(${image}) rgba(0, 0, 0, 0.7)`};
  background-repeat: repeat-x; /* Repite la imagen horizontalmente */
  background-position: center; /* Centra la imagen verticalmente */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  color: black;

  /* Media query para pantallas grandes (computadora) */
  @media (min-width: 1024px) {
    background-size: calc(100vw / 3) 100%; /* Divide la pantalla en 3 partes y ajusta el alto */
  }
  @media (max-width: 1023px) {
    background-size: contain; /* Ajusta la imagen para que cubra la pantalla en dispositivos móviles */
    background-repeat: no-repeat;
    background-position: center;
  }

  /* Aplica el filtro inicial */
  filter: hue-rotate(0deg);
  animation: redFilterAnimation 5s infinite;

  @keyframes redFilterAnimation {
    0% {
      filter: hue-rotate(0deg); /* Empieza sin color */
    }
    50% {
      filter: hue-rotate(180deg); /* Cambia el color a rojo */
    }
    100% {
      filter: hue-rotate(360deg); /* Vuelve al color original */
    }
  }
`;

// filter: sepia(1) hue-rotate(270deg);

export const Container = styled.div`
  display: flex;

  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);
  height: 20%;
  width: 100%;
  flex-direction: column;
`;

// export const LeftSection = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 35%;
//   flex-direction: column;
//   height: 100%;
//   padding: 0.5rem;
// `;

// export const RightSection = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
//   width: 55%;
//   flex-direction: column;
//   color: white;
//   font-size: 2vh;
// `;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  font-size: 3vh;
  font-weight: 500;
  font-family: Chakra Petch, sans-serif;
  text-align: center;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 400;
  font-family: Chakra Petch, sans-serif;
  font-size: 1.2rem;
  color: white;
  text-align: center;
  cursor: pointer;
  text-decoration: underline;
`;

export const BuyTicketButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  max-width: 20rem;
  border-radius: 1rem;
  padding: 0.8rem;
  color: white;
  border: 1px solid white;
  :hover {
    scale: 1.1;
    transition: 0.2s;
  }
`;

export const ButtonText = styled.div`
  font-weight: 400;
  font-family: "Oswald", sans-serif;
  font-size: 1.2rem;
  text-align: center;
`;

// margin-top: calc(15vh + 6vw);
