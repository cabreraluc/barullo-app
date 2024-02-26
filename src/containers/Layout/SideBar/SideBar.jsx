import { SideBarContainer, ButtonBar } from "./sideBarStyles";
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

const SideBar = () => {
  const userLocalStorage = useAuth();
  const { getUserById, user, isLoading } = useUsers();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let value = [
    { name: "Statistics" },
    { name: "Calendar" },
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
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          {filteredValue.map((e) => (
            <ButtonBar
              style={
                pathSplitted === e.name.toLocaleLowerCase()
                  ? { color: "black" }
                  : null
              }
              onClick={() => navigate(`/home/${e.name.toLocaleLowerCase()}`)}
            >
              {e.name === "Statistics" ? (
                <BarChartIcon style={{ marginRight: "2rem" }} />
              ) : e.name === "Calendar" ? (
                <CalendarMonthIcon style={{ marginRight: "2rem" }} />
              ) : e.name === "Users" ? (
                <GroupIcon style={{ marginRight: "2rem" }} />
              ) : e.name === "Prospects" ? (
                <GroupAddIcon style={{ marginRight: "2rem" }} />
              ) : e.name === "Clients" ? (
                <WorkOutlineIcon style={{ marginRight: "2rem" }} />
              ) : null}
              {e.name}
            </ButtonBar>
          ))}
        </>
      )}
    </SideBarContainer>
  );
};

export default SideBar;
