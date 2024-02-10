import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 4rem;
  background-color: black;
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
`;

export const UserButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: white;
`;

export const LogoContainer = styled.button`
  height: 2rem;
  width: 5;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: white;
  font-family: "Bebas Neue", cursive;
  font-size: 2rem;
`;
