import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 16%;
  height: 90%;

  margin-left: 1rem;
  margin-top: 1rem;

  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 1.3rem;
  background-color: rgb(256, 256, 256, 0.8);
`;

export const ButtonBar = styled.div`
  width: 80%;
  height: 1rem;
  padding: 0.7rem;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.86rem;
  color: #566573;
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
  margin-left: 1rem;
  font-weight: 700;
`;

export const MenuContainer = styled.div`
  padding: 1.1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const SideBarBorder = styled.div`
  width: 80%; /* Establece el ancho del borde al 80% */
  height: 0rem;
  border-bottom: 1px solid #cacaca; /* Establece el estilo del borde */
`;

export const TasksContainer = styled.div`
  padding: 1.1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const MenuTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.4rem;
  width: 80%;
  color: gray;
  font-weight: 500;
  font-size: 0.6rem;
`;

export const NextTasksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0.4rem 0;
  border-radius: 10px;
  width: 80%;

  padding: 0.8rem;
  background-color: white;
`;

export const TaskItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.4rem;
  width: 100%;
  color: black;
  font-weight: 400;
  padding: 0.5rem;
  font-size: 0.8rem;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #2c3e50;
    color: white;
    transition: 0.1s ease;
  }
`;

export const CreateTaskContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0.4rem 0;
  border-radius: 10px;
  width: 80%;
  height: 5.7rem;
  padding: 0.8rem;
  background-color: white;
`;

export const AddTaskTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 0.8rem;
  font-weight: 700;
  cursor: pointer;
`;
