import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  padding: 0.5rem 0rem;
  position: fixed;

  z-index: 3;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: start;

  width: 10%;
`;

export const LogoContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const LogoImg = styled.img`
  width: clamp(15rem, 20rem, 20rem);
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
