import { SideBarContainer, ButtonBar } from "./sideBarStyles";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const SideBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const value = [
    { name: "Statistics" },
    { name: "Calendar" },
    { name: "Users" },
    { name: "Prospects" },
    { name: "Clients" },
  ];
  const pathSplitted = pathname.split("/")[2];

  return (
    <SideBarContainer>
      {value.map((e) => (
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
