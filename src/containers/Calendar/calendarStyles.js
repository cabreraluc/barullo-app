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
  font-family: "Raleway", sans-serif;
`;

export const AlertAddForm = styled.form`
  width: 70%;
  height: 40%;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const ButtonsContainer = styled.div`
  width: 25%;
  height: 3rem;
  display: flex;

  justify-content: space-around;
  align-items: center;
`;

export const TextCalendarEvent = styled.div``;
