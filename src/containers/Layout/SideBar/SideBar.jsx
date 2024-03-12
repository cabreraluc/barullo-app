import {
  SideBarContainer,
  ButtonBar,
  UserContainer,
  UserPhoto,
  UserName,
  MenuContainer,
  MenuTitle,
  TasksContainer,
  SideBarBorder,
  NextTasksContainer,
  TaskItem,
  CreateTaskContainer,
  AddTaskTitle,
} from "./sideBarStyles";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../Login/useAuth";
import useUsers from "../../Users/useUsers";
import Loader from "../../../componentsCss/Loader/Loader";
import { Label } from "@mui/icons-material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Avatar from "@mui/material/Avatar";

const SideBar = () => {
  const userLocalStorage = useAuth();
  const { getUserById, user, isLoading } = useUsers();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let value = [
    { name: "Calendar" },
    { name: "Statistics" },
    { name: "Prospects" },
    { name: "Clients" },
    { name: "Users" },
  ];

  let filteredValue = value.filter((e) => {
    if (user.role === "Closer" || user.role === "Setter") {
      return e.name !== "Users";
    } else if (user.role === "Client") {
      return e.name !== "Users" && e.name !== "Clients";
    } else {
      return e.name;
    }
  });

  const randomColor = () => {
    // Genera un color hexadecimal aleatorio
    const red = Math.floor(Math.random() * 155) + 100; // Valores entre 100 y 255 para el rojo
    const green = Math.floor(Math.random() * 155) + 100; // Valores entre 100 y 255 para el verde
    const blue = Math.floor(Math.random() * 155) + 100; // Valores entre 100 y 255 para el azul

    // Construye el color hexadecimal
    return `rgb(${red}, ${green}, ${blue})`;
  };

  useEffect(() => {
    getUserById(userLocalStorage.id);
  }, []);

  const pathSplitted = pathname.split("/")[2];

  return (
    <SideBarContainer>
      <UserContainer>
        <Avatar alt={user?.name} src="/static/images/avatar/1.jpg" />
        <UserName>
          {user?.name ? user?.name + " " + user?.lastName : null}
        </UserName>
      </UserContainer>
      <MenuContainer>
        <MenuTitle>MENU</MenuTitle>
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <>
            {/* <RolContainer>
          {
            user.rol==="Client"?`Welcome`
          }
        </RolContainer> */}
            {filteredValue.map((e) => (
              <ButtonBar
                style={
                  pathSplitted === e.name.toLocaleLowerCase()
                    ? {
                        color: "white",
                        backgroundColor: "rgb(7, 121, 222)",
                      }
                    : null
                }
                onClick={() => navigate(`/home/${e.name.toLocaleLowerCase()}`)}
              >
                {e.name === "Calendar" ? (
                  <CalendarMonthIcon
                    style={{ marginRight: "1rem", fontSize: "0.86rem" }}
                  />
                ) : e.name === "Statistics" ? (
                  <BarChartIcon
                    style={{ marginRight: "1rem", fontSize: "0.86rem" }}
                  />
                ) : e.name === "Users" ? (
                  <GroupIcon
                    style={{ marginRight: "1rem", fontSize: "0.86rem" }}
                  />
                ) : e.name === "Prospects" ? (
                  <GroupAddIcon
                    style={{ marginRight: "1rem", fontSize: "0.86rem" }}
                  />
                ) : e.name === "Clients" ? (
                  <WorkOutlineIcon
                    style={{ marginRight: "1rem", fontSize: "0.86rem" }}
                  />
                ) : null}
                {e.name}
              </ButtonBar>
            ))}
          </>
        )}
      </MenuContainer>
      <SideBarBorder />
      <TasksContainer>
        <MenuTitle>TASKS</MenuTitle>
        <NextTasksContainer>
          <TaskItem>
            <FiberManualRecordIcon
              style={{
                marginRight: "0.6rem",
                fontSize: "0.86rem",
                color: randomColor(),
              }}
            />{" "}
            Call Prospect Raul Hernandez
          </TaskItem>

          <TaskItem>
            {" "}
            <FiberManualRecordIcon
              style={{
                marginRight: "0.6rem",
                fontSize: "0.86rem",
                color: randomColor(),
              }}
            />{" "}
            Call Prospect Raul Hernandez
          </TaskItem>

          <TaskItem>
            {" "}
            <FiberManualRecordIcon
              style={{
                marginRight: "0.6rem",
                fontSize: "0.86rem",
                color: randomColor(),
              }}
            />{" "}
            Call client JAZBA
          </TaskItem>
          <TaskItem>
            {" "}
            <FiberManualRecordIcon
              style={{
                marginRight: "0.6rem",
                fontSize: "0.86rem",
                color: randomColor(),
              }}
            />{" "}
            Call client JAZBA
          </TaskItem>
        </NextTasksContainer>
        <CreateTaskContainer>
          <AddCircleIcon
            sx={{
              color: "rgb(7, 121, 222)",
              fontSize: "2.5rem",
              cursor: "pointer",
            }}
          ></AddCircleIcon>
          <AddTaskTitle>Create new task</AddTaskTitle>
        </CreateTaskContainer>
      </TasksContainer>
    </SideBarContainer>
  );
};

export default SideBar;
