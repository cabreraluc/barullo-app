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
  height: 100%;
  flex-direction: column;
  color: black;

  overflow: hidden;

  filter: ${({ filter }) =>
    filter === "" ? "grayscale(100%)" : `sepia(1) hue-rotate(${filter}deg)`};
`;

export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);
  height: ${({ open }) => (open === true ? "100%" : "none")};
  flex-direction: column;
  width: 100%;
  transition: height 0.5s ease-in-out;
`;

export const SubContainerClosed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5%;
`;

export const SubContainerOpened = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
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
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
  color: white;
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

export const Icons = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: start;
  color: white;
  width: 100%;
`;

export const Description = styled.div`
  display: flex;
  justify-content: start;
  text-align: center;
  align-items: center;

  width: 90%;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }

  color: white;
  margin-top: 1rem 0;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 3rem;
  width: 100%;
  flex-direction: row;
  color: white;

  gap: 1rem;
  margin: 1rem 0;
`;

export const Icon = styled.div``;
