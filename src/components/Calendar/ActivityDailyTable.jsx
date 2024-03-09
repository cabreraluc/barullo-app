import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import ActivityDailyHeadTable from "./ActivityDailyHeaderTable";
import ActivityIndividual from "./ActivityIndividual";
import Switch from "../../components/Switch/Switch";
import Loader from "../../componentsCss/Loader/Loader";
import { Autocomplete, TextField } from "@mui/material";
import {
  Title,
  TableAndSwitchContainer,
  SwitchesContainer,
} from "../../containers/Calendar/calendarStyles";

export default function ActivityDailyTable({
  activitiesOfDay,
  handleArchiveActivity,
  onOpen,
  setIdOfActivity,
  user,
  search,
  setSwitcher,
  switcher,
  isLoadingDayAct,
  activityStatus,
  setActivityStatus,
  setPastActs,
  pastActs,
}) {
  return (
    <TableAndSwitchContainer>
      <TableContainer
        component={Paper}
        sx={{
          height: "100%",
          width: "100%",
          boxShadow: "none",
          backgroundColor: "transparent",
          padding: "0 1rem",
        }}
      >
        {!activitiesOfDay.length && !isLoadingDayAct ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "3rem",
            }}
          >
            <Title style={{ color: "#26303b" }}>
              You have no events for this day
            </Title>
          </div>
        ) : isLoadingDayAct ? (
          <Loader></Loader>
        ) : (
          <Table>
            <ActivityDailyHeadTable />
            <TableBody>
              {activitiesOfDay.map((activity) => {
                return (
                  <ActivityIndividual
                    key={activity._id}
                    search={search}
                    user={user}
                    activity={activity}
                    handleArchiveActivity={handleArchiveActivity}
                    onOpen={onOpen}
                    setIdOfActivity={setIdOfActivity}
                  />
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </TableAndSwitchContainer>
  );
}
