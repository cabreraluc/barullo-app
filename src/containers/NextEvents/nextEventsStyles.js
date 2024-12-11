import styled from "styled-components";

export const NextEventsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;
export const Card = styled.div`
  background: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  color: black;

  width: 100%;

  /* Aplica el filtro inicial */
  /* filter: hue-rotate(0deg);
  animation: redFilterAnimation 2s infinite;

  // @keyframes redFilterAnimation {
  //   0% {
  //     filter: hue-rotate(0deg); /* Empieza sin color */
  //   }
  //   25% {
  //     filter: hue-rotate(90deg); /* Empieza sin color */
  //   }
  //   50% {
  //     filter: hue-rotate(180deg); /* Cambia el color a rojo */
  //   }
  //   75% {
  //     filter: hue-rotate(270); /* Cambia el color a rojo */
  //   }
  //   100% {
  //     filter: hue-rotate(360deg); /* Vuelve al color original */
  //   }
  // }*/
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);
  width: 100%;
  flex-direction: column;
  padding: 2rem;
`;

export const LeftSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  flex-direction: column;
  height: 100%;
  padding: 0.5rem;
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 55%;
  flex-direction: column;
  color: white;
  font-size: 2vh;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightGray;
  width: 100%;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 200;
  font-family: "Montserrat";
  font-size: 1.2rem;
  color: white;
  text-align: center;
  cursor: pointer;
`;

export const BuyTicketButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  background-color: black;
  font-family: "Oswald", sans-serif;
  max-width: 20rem;
  padding: 0.8rem;
`;

export const ButtonText = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  text-align: center;
`;

// margin-top: calc(15vh + 6vw);
