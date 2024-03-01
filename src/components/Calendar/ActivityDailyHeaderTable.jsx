import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const ActivityDailyHeadTable = () => {
  return (
    <TableHead sx={{ width: "100%" }}>
      <TableRow>
        <TableCell sx={{ width: "25%" }} align="left">
          Event
        </TableCell>
        <TableCell sx={{ width: "25%" }} align="left">
          Prospect
        </TableCell>
        <TableCell sx={{ width: "25%" }} align="left">
          Start
        </TableCell>
        <TableCell sx={{ width: "25%" }} align="left">
          End
        </TableCell>
        <TableCell sx={{ width: "25%" }} align="left">
          Client
        </TableCell>
        <TableCell sx={{ width: "25%" }} align="left">
          Status
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default ActivityDailyHeadTable;
