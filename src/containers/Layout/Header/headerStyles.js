import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserContainer = styled.div`
  height: 2rem;
  width: 5;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  font-family: Arial;
`;

export const UserButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: white;
`;

export const LogOutButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: white;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 5rem;
`;

export const BurgerMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
`;

export const LogoContainer = styled.button`
  height: 2rem;
  width: 5;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  font-weight: 700;
  cursor: pointer;
  color: white;
  font-size: 2.5rem;
  font-family: "Bodoni Moda", serif;
`;
