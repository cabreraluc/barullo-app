import SideBar from "../Layout/SideBar/SideBar";
import { HomeContainer, Screen } from "./homeStyles";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Prospects from "../Prospects/Prospects";
import Statistics from "../Statistics/Statistics";
import Calendar from "../Calendar/Calendar";
import Users from "../Users/Users";
import Clients from "../Clients/Clients";

export default function Home(props) {
  const { pathname } = useLocation();
  const pathSplitted = pathname.split("/")[2];
  const componentShowed = () => {
    if (pathSplitted === "prospects") {
      return <Prospects></Prospects>;
    }
    if (pathSplitted === "statistics") {
      return <Statistics></Statistics>;
    }
    if (pathSplitted === "calendar") {
      return <Calendar></Calendar>;
    }
    if (pathSplitted === "users") {
      return <Users></Users>;
    }
    if (pathSplitted === "clients") {
      return <Clients></Clients>;
    }
  };
  return (
    <HomeContainer>
      <SideBar></SideBar>
      <Screen>{componentShowed()}</Screen>
    </HomeContainer>
  );
}
