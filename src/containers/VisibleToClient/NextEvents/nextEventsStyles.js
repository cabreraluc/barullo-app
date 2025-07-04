import styled from "styled-components";

export const NextEventsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;
export const Card = styled.div`
  box-shadow: inset 0 0 30px 7px black;
  background: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  display: flex;
  align-items: center;
  padding-bottom: 1.5rem;
  flex-direction: column;
  color: black;
  width: 100vw;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(
      0,
      0,
      0,
      0.5
    ); /* Ajustá el 0.5 según la opacidad deseada */
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
`;

export const ContainerEvent = styled.div`
  background: ${({ image }) => `
    url(${image}), 
    url(${image}), 
    url(${image})
  `};
  background-size: 33.33% 100%; /* Cada imagen ocupa un tercio del ancho y 100% de alto */
  background-position: left center, center center, right center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  flex-direction: column;
  color: black;
  height: 95%;
  width: 90%;
  filter: hue-rotate(0deg);
  animation: redFilterAnimation 10s infinite;

  @keyframes redFilterAnimation {
    0% {
      filter: hue-rotate(0deg);
    }
    25% {
      filter: hue-rotate(90deg);
    }
    50% {
      filter: hue-rotate(180deg);
    }
    75% {
      filter: hue-rotate(270deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }

  @media (max-width: 1023px) {
    background: ${({ image }) => `url(${image})`};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  height: 100%;
  padding: 0.5rem;
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  color: white;
  font-size: 2vh;
  font-family: "Oswald";
  background-color: rgb(0, 0, 0, 0.5);
  border: solid 1px;
  padding: 0.5rem;
  border-radius: 1rem;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightGray;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  font-family: "Oswald";
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 200;
  font-family: "Oswald";
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
  font-family: "Oswald";
  max-width: 20rem;
`;

export const ButtonText = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  text-align: center;
  font-family: "Oswald";
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightGray;
  width: 100%;
  font-size: 5rem;
  font-weight: 200;
  text-align: center;
  font-family: "Oswald";
`;

// margin-top: calc(15vh + 6vw);

export const Address = styled.span`
  font-size: 0.9rem;
  letter-spacing: 1px;
  font-weight: lighter;
`;

export const TitleBig = styled.span`
  font-size: 2.5rem;
  letter-spacing: 1px;
  font-weight: lighter;
`;

export const TitleMedium = styled.a`
  font-size: 2rem;
  letter-spacing: 1px;
  font-weight: 200;
  color: white;
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
`;

export const LineupText = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "oswald";
`;

export const FreeText = styled.span`
  margin-top: 14px;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-family: "oswald";
  color: lime;
`;

export const PriceText = styled.span`
  font-size: 0.9rem;
  font-family: "oswald";
`;

export const DisclaimerText = styled.span`
  font-size: 0.8rem;
  margin-top: 10px;
  letter-spacing: 1px;
  font-style: italic;
  font-family: "oswald";
  font-weight: lighter;
`;
