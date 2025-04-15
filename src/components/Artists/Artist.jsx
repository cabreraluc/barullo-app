import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import AlertDialog from "../Dialog/AlertDialog";
import { useState } from "react";

export default function Artist({ artist, disableOrActiveArtist }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handlerDisableOrActiveArtist = (id) => {
    disableOrActiveArtist(id);
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
        {artist.status === "active" ? (
          <button onClick={() => setOpen(true)}>Desactivar</button>
        ) : (
          <button onClick={() => setOpen(true)}>Activar</button>
        )}
      </TableCell>

      <TableCell align="left">
        <EditIcon
          onClick={() => navigate(`/edit-artist/${artist._id}`)}
          sx={{ cursor: "pointer" }}
        />
      </TableCell>
      <AlertDialog
        status={artist.status}
        open={open}
        onClose={() => setOpen(false)}
        context={"artists"}
        handlerAction={handlerDisableOrActiveArtist}
        objectId={artist._id}
      />
    </TableRow>
  );
}
