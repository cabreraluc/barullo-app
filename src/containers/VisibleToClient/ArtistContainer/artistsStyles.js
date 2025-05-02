import styled from "styled-components";
import { motion } from "framer-motion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const ArtistsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const Card = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  color: white;
  box-shadow: inset 0 0 30px 7px black;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ image }) => `url(${image}) no-repeat center center/cover`};
    filter: ${({ filter }) =>
      filter === ""
        ? "grayscale(100%)"
        : `sepia(1) hue-rotate(${filter * 1}deg)`};
    z-index: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.7);
  height: ${({ open }) => (open === true ? "100%" : "none")};
  flex-direction: column;
  width: 100%;
  transition: height 0.5s ease-in-out;

  color: white;
  position: relative;
  z-index: 1;
`;

export const SubContainerClosed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5%;
  font-family: "Oswald";
`;

export const SubContainerOpened = styled(motion.div)`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  padding-top: 2rem;
`;

export const LeftSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 0rem;
  flex-direction: column;
  height: 100%;
  width: 60%;
  padding: 0.5rem;
  line-height: 1;
  margin-left: 1rem;
  @media (min-width: 1200px) {
    align-items: center;
  }
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  margin-right: 2rem;
  height: 100%;
  width: 55%;
  gap: 1rem;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    font-size: 1.5vh;
  }
  color: white;

  @media (min-width: 1200px) {
    align-items: center;
  }
`;

export const Title = styled.span`
  color: white;
  font-size: 4vh;
  font-weight: 400;
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
  font-size: 15px;
  @media screen and (max-width: 767px) {
    font-size: 1.5vh;
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

export const ShortDescription = styled.div`
  justify-content: center;
  align-items: center;

  color: white;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 1200px) {
    display: flex;
  }
`;

export const ButtonMoreOf = styled.button`
  @media (min-width: 1200px) {
    margin-top: 2rem;
  }
`;

export const Icon = styled.div``;

export const EventDate = styled.h4`
  font-size: 11px;
  font-family: sans-serif;
  margin-left: 0.8rem;
  color: white;
  font-weight: 200;
`;

export const ArtistTitle = styled.h2`
  font-family: "Oswald";
  font-weight: 400;
  margin-left: 0.8rem;
  color: ${({ color }) => color || "white"};
  font-size: 1.9rem;
`;

export const OrganizationTitle = styled.h3`
  font-family: "Oswald";
  font-weight: 400;
  font-size: 17px;
  color: ${({ color }) => color || "white"};
`;

export const B2BTitle = styled.h3`
  font-family: "Oswald";
  font-weight: 400;
  font-size: 1.5rem;
  color: ${({ color }) => color || "white"};
`;

export const PlayButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-weight: 400;
  font-size: 15px;
  font-family: sans-serif;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  text-decoration: underline;
`;

export const PlayIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArrowIcon = styled(ArrowDropDownIcon)`
  color: white;
  font-size: 3rem !important;
  cursor: pointer;
  z-index: 100000;
`;

export const ArtistImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 2rem;
  object-fit: cover;
`;

export const SocialIconsContainer = styled(IconsContainer)`
  a {
    color: white;
    img,
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const SecondaryArtistContainer = styled.div`
  margin: 2rem;
`;
