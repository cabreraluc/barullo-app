import styled from "styled-components";

export const MerchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;
// margin-top: calc(15vh + 6vw);
export const Card = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  color: white;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ image }) => `url(${image}) no-repeat center center/cover`};
    filter: ${({ filter }) =>
      filter === ""
        ? "grayscale(100%)"
        : `sepia(1) hue-rotate(${filter * 1}deg)`};
    box-shadow: rgba(0, 0, 0, 1) 15px 20px 30px inset;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
`;

export const MerchImage = styled.img``;
