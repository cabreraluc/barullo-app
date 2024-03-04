import styled from "styled-components";

export const CalendarModuleContainer = styled.div`
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
  width: 100%;
`;

export const CalendarModuleSubContainer = styled.div`
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalendarContainer = styled.div`
  padding: 3em;
  width: 100%;
`;

export const PanelRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 40%;
  height: 91.15%;
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

export const AlertAddContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const AlertAddFormContainer = styled.div`
  width: 25%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

export const AlertAddTitleContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 3rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-weight: 400;
`;

export const AlertAddForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  width: 25%;
  height: 3rem;
  display: flex;

  justify-content: space-around;
  align-items: center;
`;

export const TextCalendarEvent = styled.div``;

export const AddEventButtonContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: #354b60;
    transition: 0.1s;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 45%;
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  width: 45%;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 90%;
  height: 100%;
`;
