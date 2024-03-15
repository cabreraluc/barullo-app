import styled from "styled-components";
import { Box } from "@mui/material";

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

  width: 85%;
  height: 90%;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const PanelRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 15%;
  height: 90%;
    background-color: "transparent",
  margin-left: 2rem;
  box-shadow: rgba(0, 0, 0, 0.16) -1px 0px 0px, rgba(0, 0, 0, 0.23) 0px 0px 0px;
`;

export const ButtonBar = styled.div`
  width: 80%;
  height: 3rem;
  background-color: transparent;
  margin: 1rem 0rem;
  cursor: pointer;
  color: black;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1rem;
  .hover {
    background-color: gray;
  }
`;

export const Searcher = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AddUserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const UsersActionsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PastPageDataContainerAndTitle = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const PastPageContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;

  justify-content: flex-start;
  align-items: center;
`;

export const PastPage = styled.div`
  width: 15rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: darkblue;
`;

export const Title = styled.h1`
  font-family: "Raleway", sans-serif;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const FormContainertUsersAction = styled.form`
  width: 70%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  background-color: rgb(256, 256, 256, 0.8);
  border-radius: 15px;
`;

export const FormSectionsContainer = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 4rem;
`;
export const LeftSectionContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;

  gap: 25px;
`;

export const RightSectionContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;

  gap: 25px;
`;

export const ActionButtonContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  width: 25%;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BreadcumsContainer = styled.div`
  margin-right: 77%;
  margin-bottom: 40px;
`;

export const BoxMui = styled(Box)`
  background-color: #fff;
  border-radius: 10px;
  padding: 70px;
  width: 100%;
  box-shadow: 2px 4px 12px -2px rgba(0, 0, 0, 0.26);
  -webkit-box-shadow: 2px 4px 12px -2px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 2px 4px 12px -2px rgba(0, 0, 0, 0.26);
`;
