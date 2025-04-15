import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Artist from "./Artist";

export default function ArtistsTable({ allArtists, disableOrActiveArtist }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ height: "100%", boxShadow: "none", backgroundColor: "transparent" }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontFamily: "Oswald" }} align="left">
              Artist name
            </TableCell>
            <TableCell sx={{ fontFamily: "Oswald" }} align="left">
              Status
            </TableCell>
            <TableCell sx={{ width: "1.5rem" }} align="left"></TableCell>
            <TableCell sx={{ width: "1.5rem" }} align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allArtists.map((artist, index) => (
            <Artist
              key={index}
              disableOrActiveArtist={disableOrActiveArtist}
              artist={artist}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
