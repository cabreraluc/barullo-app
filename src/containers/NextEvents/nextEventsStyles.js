import styled from "styled-components";

export const NextEventsContainer = styled.div`
  display: flex;
  justify-content: center;

  height: 100vh;
`;
export const Card = styled.div`
  background: ${({ image }) =>
    `url(${image}) no-repeat center center/cover, rgba(0, 0, 0, 0.7)`};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  color: black;

  overflow: hidden;

  filter: sepia(1) hue-rotate(270deg);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  background-color: rgb(0, 0, 0, 0.5);
  height: 20%;
  width: 100%;
  flex-direction: row;
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
  padding: 0.5rem;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  font-size: 4vh;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 400;
  font-family: "Oswald", sans-serif;
  font-size: 1.2rem;
  color: white;
`;

// margin-top: calc(15vh + 6vw);
