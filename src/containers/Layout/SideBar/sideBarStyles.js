import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 16%;
  height: 85%;

  margin-left: 1rem;
  margin-top: 2rem;

  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 1.3rem;
  background-color: rgb(256, 256, 256, 0.8);
`;

export const ButtonBar = styled.div`
  width: 80%;
  height: 1rem;

  margin: 1.2rem 0rem;
  cursor: pointer;
  font-size: 0.86rem;
  color: gray;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 700;
  &:hover {
    color: #5a5a5a;
  }
`;

export const UserContainer = styled.div`
  height: 4rem;
  width: 80%;
  display: flex;
  margin-top: 0.7rem;
  padding: 0.6rem 0;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid #cacaca;
`;

export const UserPhoto = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  border: 1px black solid;
`;
export const UserName = styled.div`
  margin-left: 1.5rem;
  font-weight: 700;
`;

export const MenuContainer = styled.div`
  padding: 1.1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
`;

export const MenuTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.4rem;
  width: 80%;
  color: gray;
  font-weight: 500;
  font-size: 0.7rem;
`;
