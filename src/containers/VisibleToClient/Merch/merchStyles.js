import styled from "styled-components";

export const MerchContainer = styled.div`
  box-shadow: inset 0 0 30px 7px black;
  background: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: black;
  width: 100vw;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(
      0,
      0,
      0,
      0.7
    ); /* Ajustá el 0.5 según la opacidad deseada */
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;
// margin-top: calc(15vh + 6vw);

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
`;

export const MerchImage = styled.img``;
