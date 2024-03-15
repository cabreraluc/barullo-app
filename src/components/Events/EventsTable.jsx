import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Event from "./Event";

export default function UsersTable({ allEvents, disableEvent }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ height: "100%", boxShadow: "none", backgroundColor: "transparent" }}
    >
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="left">Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allEvents.map((event) => (
            <Event disableEvent={disableEvent} event={event} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
