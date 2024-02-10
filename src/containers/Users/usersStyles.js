import styled from "styled-components";

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  width: 100%;
  height: 100%;
`;
export const UsersList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: red;
  width: 70%;
  height: 90%;
  margin-left: 2rem;
`;

export const PanelRight = styled.div`
  display: flex;
  flex-direction: column;

  width: 20%;
  height: 90%;
  margin-left: 2rem;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
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
  .hover {
    background-color: gray;
  }
`;
