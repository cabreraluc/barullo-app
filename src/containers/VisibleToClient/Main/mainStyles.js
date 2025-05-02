import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;
export const Card = styled.div`
  position: relative;
  box-shadow: inset 0 0 30px 7px black;
  display: flex;

  align-items: center;
  flex-direction: column;
  color: black;
  width: 100vw;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ image }) => `url(${image}) no-repeat center/cover`};
    filter: grayscale(100%) brightness(0.5);
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

export const LogoContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  cursor: pointer;
  flex-direction: column;
`;

export const RefBMCS = styled.h4`
  color: white;
  font-size: 10px;
  font-family: "Oswald";
  font-weight: 200;
`;

export const LogoImg = styled.img`
  width: clamp(15rem, 20rem, 20rem);
`;

export const ClickableLogoRow = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;
export const BottomTextContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 5rem;
`;

export const WelcomeText = styled.span`
  color: white;
  width: 50%;
  text-align: center;
  font-weight: 200;
  font-size: 12px;
`;

export const CircleLogo = styled.img`
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  margin-top: 1px;
`;

export const PsbLogo = styled.img`
  width: 4rem;
  object-fit: contain;
`;
