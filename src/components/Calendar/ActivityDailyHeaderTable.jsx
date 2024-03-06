import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const ActivityDailyHeadTable = () => {
  return (
    <TableHead sx={{ width: "100%" }}>
      <TableRow>
        <TableCell sx={{ width: "25%", color: "#505d6b" }} align="left">
          Event
        </TableCell>
        <TableCell sx={{ width: "25%", color: "#505d6b" }} align="left">
          Prospect
        </TableCell>
        <TableCell sx={{ width: "25%", color: "#505d6b" }} align="left">
          Start
        </TableCell>
        <TableCell sx={{ width: "25%", color: "#505d6b" }} align="left">
          End
        </TableCell>
        <TableCell sx={{ width: "25%", color: "#505d6b" }} align="left">
          Client
        </TableCell>

        <TableCell
          sx={{ width: "25%", color: "#505d6b" }}
          align="left"
        ></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default ActivityDailyHeadTable;
