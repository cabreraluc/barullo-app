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

import AlertDialog from "../Dialog/AlertDialog";
import { useState } from "react";

export default function Artist({ artist, disableArtist }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handlerDeleteArtist = (id) => {
    disableArtist(id);
    setOpen(false);
  };

  return (
    <TableRow
      key={artist.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="left">{artist.artistName}</TableCell>

      <TableCell align="left">{artist.status}</TableCell>
      <TableCell align="left">
        <DeleteOutlineIcon
          onClick={() => setOpen(true)}
          sx={{ cursor: "pointer" }}
        />
      </TableCell>
      <TableCell align="left">
        <EditIcon
          onClick={() => navigate(`/edit-artist/${artist._id}`)}
          sx={{ cursor: "pointer" }}
        />
      </TableCell>
      <AlertDialog
        open={open}
        onClose={() => setOpen(false)}
        context={"artists"}
        handlerAction={handlerDeleteArtist}
        objectId={artist._id}
      />
    </TableRow>
  );
}
