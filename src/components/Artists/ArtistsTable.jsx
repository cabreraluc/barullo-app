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
import Artist from "./Artist";
import AlertDialog from "../Dialog/AlertDialog";
import { useState } from "react";

export default function ArtistsTable({ allArtists, disableArtist }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ height: "100%", boxShadow: "none", backgroundColor: "transparent" }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Artist name</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell sx={{ width: "1.5rem" }} align="left"></TableCell>
            <TableCell sx={{ width: "1.5rem" }} align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allArtists.map((artist) => (
            <Artist disableArtist={disableArtist} artist={artist} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
