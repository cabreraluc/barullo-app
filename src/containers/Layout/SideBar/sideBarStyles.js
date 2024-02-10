import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 16%;
  height: 60vh;
  background-color: white;
  margin-left: 1rem;
  margin-top: 5rem;
  justify-content: center;
  align-items: centert;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 0.5rem;
`;

export const ButtonBar = styled.div`
  width: 80%;
  height: 3rem;
  background-color: transparent;
  margin: 1rem 0rem;
  cursor: pointer;

  color: gray;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1rem;
`;
