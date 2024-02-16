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
import useClients from "../../containers/Clients/useClients";

export default function Client({ client, disableClient }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handlerDeleteClient = (id) => {
    disableClient(id);
    setOpen(false);
  };

  console.log(client);
  return (
    <TableRow
      key={client.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {client.name} {client.lastName}
      </TableCell>
      <TableCell align="left">{client.email}</TableCell>
      <TableCell align="left">{client.cellphone}</TableCell>
      <TableCell align="left">
        <DeleteOutlineIcon
          onClick={() => setOpen(true)}
          sx={{ cursor: "pointer" }}
        />
      </TableCell>
      <TableCell align="left">
        <EditIcon
          onClick={() => navigate(`/edit-client/${client._id}`)}
          sx={{ cursor: "pointer" }}
        />
      </TableCell>
      <AlertDialog
        open={open}
        onClose={() => setOpen(false)}
        context={"clients"}
        handlerAction={handlerDeleteClient}
        objectId={client._id}
      />
    </TableRow>
  );
}
