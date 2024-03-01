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

export default function ActivityDailyTable({
  activitiesOfDay,
  archiveActivity,
  onOpen,
  setIdOfActivity,
  isLoading,
}) {
  return (
    <TableContainer
      component={Paper}
      sx={{ height: "100%", boxShadow: "none" }}
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
          <h1>You dont have event to this day</h1>
        </div>
      ) : (
        <Table>
          <ActivityDailyHeadTable />
          <TableBody>
            {activitiesOfDay.map((activity) => {
              return (
                <ActivityIndividual
                  activity={activity}
                  onOpen={onOpen}
                  setIdOfActivity={setIdOfActivity}
                />
              );
            })}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}
