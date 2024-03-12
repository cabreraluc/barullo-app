import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 96%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  padding: 0.5rem 0.5rem;
  background-color: transparent;
`;

export const UserContainer = styled.div`
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  margin-right: 10%;

  width: clamp(30rem, 35rem, 35rem);
`;

export const UserButton = styled.div`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: black;
`;

export const LogOutButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: black;
`;

export const ButtonsContainer = styled.div``;

export const BurgerMenuContainer = styled.div`
  width: 10%;

  display: flex;
  justify-content: start;
  alignt-items: center;
  z-index: 2;
`;
