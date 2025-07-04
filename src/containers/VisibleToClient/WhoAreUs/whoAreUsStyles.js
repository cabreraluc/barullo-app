import styled from "styled-components";

export const WhoAreUsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

export const Card = styled.div`
  background: ${({ image }) =>
    `url(${image}) no-repeat center center/cover, rgba(164, 20, 20,1)`};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 1) 0px 20px 30px inset;
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
export const Title = styled.div`
  font-family: "Oswald";
  width: 100%;
  justify-content: start;
  display: flex;
  align-items: end;
  width: 60%;
  font-size: 1.5vh;
  font-weight: 400;
  height: 10%;
`;
export const Body = styled.div`
  align-items: start;
  justify-content: center;
  width: 60%;
  display: flex;
  color: lightGray;
  font-size: 2.5vh;
  font-weight: 100;
  text-aling: center;
  text-align: center;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 1rem;
  padding: 1rem;
`;
