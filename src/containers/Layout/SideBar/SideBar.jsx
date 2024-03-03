import {
  SideBarContainer,
  ButtonBar,
  UserContainer,
  UserPhoto,
  UserName,
  MenuContainer,
  MenuTitle,
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

  useEffect(() => {
    getUserById(userLocalStorage.id);
  }, []);

  const pathSplitted = pathname.split("/")[2];

  return (
    <SideBarContainer>
      <UserContainer>
        <UserPhoto></UserPhoto>
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
                    ? { color: "black" }
                    : null
                }
                onClick={() => navigate(`/home/${e.name.toLocaleLowerCase()}`)}
              >
                {e.name === "Calendar" ? (
                  <CalendarMonthIcon style={{ marginRight: "1rem" }} />
                ) : e.name === "Statistics" ? (
                  <BarChartIcon style={{ marginRight: "1rem" }} />
                ) : e.name === "Users" ? (
                  <GroupIcon style={{ marginRight: "1rem" }} />
                ) : e.name === "Prospects" ? (
                  <GroupAddIcon style={{ marginRight: "1rem" }} />
                ) : e.name === "Clients" ? (
                  <WorkOutlineIcon style={{ marginRight: "1rem" }} />
                ) : null}
                {e.name}
              </ButtonBar>
            ))}
          </>
        )}
      </MenuContainer>
    </SideBarContainer>
  );
};

export default SideBar;
