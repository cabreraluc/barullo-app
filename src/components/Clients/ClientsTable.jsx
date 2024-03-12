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
import Client from "./Client";
import AlertDialog from "../Dialog/AlertDialog";
import { useState } from "react";
import useClients from "../../containers/Clients/useClients";

export default function ClientTable({ allClients, disableClient }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ height: "100%", boxShadow: "none", backgroundColor: "transparent" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Bussines name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Cellphone</TableCell>
            <TableCell sx={{ width: "1.5rem" }} align="left"></TableCell>
            <TableCell sx={{ width: "1.5rem" }} align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allClients.map((client) => (
            <Client disableClient={disableClient} client={client} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
