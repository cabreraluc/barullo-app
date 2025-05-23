import styled from "styled-components";

export const MerchContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;
// margin-top: calc(15vh + 6vw);
export const Card = styled.div`
  padding: 0 1rem;
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  color: black;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
`;

export const MerchLabel = styled.div`
  background-color: black;
  color: white;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: "Oswald", sans-serif;
`;

export const MerchImage = styled.img`
  height: 100%;
  object-fit: cover;
`;
