import { SideBarContainer, ButtonBar } from "./sideBarStyles";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../Login/useAuth";

const SideBar = () => {
  const user = useAuth();
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
    } else return e.name;
  });

  const pathSplitted = pathname.split("/")[2];

  return (
    <SideBarContainer>
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
    </SideBarContainer>
  );
};

export default SideBar;
