import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ActivityDailyHeadTable from "./ActivityDailyHeaderTable";
import ActivityIndividual from "./ActivityIndividual";
import { Title } from "../../containers/Calendar/calendarStyles";

export default function ActivityDailyTable({
  activitiesOfDay,
  handleArchiveActivity,
  onOpen,
  setIdOfActivity,
  isLoading,
  setArchiveModalOpen,
  archiveModalOpen,
}) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        height: "100%",
        width: "95%",
        boxShadow: "none",
        backgroundColor: "transparent",
        padding: "0 1rem",
      }}
    >
      {!activitiesOfDay.length && !isLoading ? (
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
      ) : (
        <Table>
          <ActivityDailyHeadTable />
          <TableBody>
            {activitiesOfDay.map((activity) => {
              return (
                <ActivityIndividual
                  activity={activity}
                  handleArchiveActivity={handleArchiveActivity}
                  onOpen={onOpen}
                  setIdOfActivity={setIdOfActivity}
                  setArchiveModalOpen={setArchiveModalOpen}
                  archiveModalOpen={archiveModalOpen}
                />
              );
            })}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}
