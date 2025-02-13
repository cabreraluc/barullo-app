import styled from "styled-components";

export const WhoAreUsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
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
  box-shadow: inset 0 0 30px 15px black;

  overflow: hidden;
`;
export const Title = styled.div`
  font-family: "Oswald";
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
  width: 60%;
  display: flex;

  font-size: 2vh;
  font-weight: 300;
  height: 53%;
  text-aling: center;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
