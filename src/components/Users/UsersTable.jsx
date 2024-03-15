import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import User from "./User";
import AlertDialog from "../Dialog/AlertDialog";
import { useState } from "react";

export default function UsersTable({ allUsers, disableUser }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ height: "100%", boxShadow: "none", backgroundColor: "transparent" }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Rol</TableCell>
            <TableCell sx={{ width: "1.5rem" }} align="left"></TableCell>
            <TableCell sx={{ width: "1.5rem" }} align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUsers.map((user) => (
            <User disableUser={disableUser} user={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
