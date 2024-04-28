import styled from "styled-components";

export const WhoAreUsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const Card = styled.div`
  background: ${({ image }) =>
    `url(${image}) no-repeat center center/cover, rgba(0, 0, 0, 0.7)`};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  color: black;

  overflow: hidden;
`;
export const Title = styled.div`
  font-family: "Montserrat";
  width: 100%;
  justify-content: start;
  display: flex;
  align-items: end;
  width: 60%;
  font-size: 4vh;
  font-weight: 400;
  height: 10%;
`;
export const Body = styled.div`
  align-items: start;
  justify-content: center;
  font-family: "Montserrat";
  width: 60%;
  display: flex;

  font-size: 2vh;
  font-weight: 200;
  height: 53%;
  text-aling: center;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
