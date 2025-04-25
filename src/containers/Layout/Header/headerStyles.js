import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  justify-content: flex-start;
  flex-direction: row;
  z-index: 10;
  background-color: transparent;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: start;

  width: 10%;
`;

export const RefBMCS = styled.h4`
  color: white;
  font-size: 10px;
  font-family: "Oswald";
  font-weight: 200;
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
