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
import Prospect from "./Prospect";
import AlertDialog from "../Dialog/AlertDialog";
import { useState } from "react";
import useProspects from "../../containers/Prospects/useProspects";

export default function ProspectTable({ allProspects, disableProspect }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ height: "100%", boxShadow: "none" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Cellphone</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Interest level</TableCell>
            <TableCell align="left">Status</TableCell>

            <TableCell sx={{ width: "1.5rem" }} align="left"></TableCell>
            <TableCell sx={{ width: "1.5rem" }} align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allProspects.map((prospect) => (
            <Prospect disableProspect={disableProspect} prospect={prospect} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
