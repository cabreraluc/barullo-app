import styled from "styled-components";

export const ArtistsContainer = styled.div`
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

  filter: sepia(1) hue-rotate(90deg);
`;
