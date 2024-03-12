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
import useUsers from "../../containers/Users/useUsers";

export default function User({ user, disableUser }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handlerDeleteUser = (id) => {
    disableUser(id);
    setOpen(false);
  };

  return (
    <TableRow
      key={user.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {user.name} {user.lastName}
      </TableCell>
      <TableCell align="left">{user.email}</TableCell>
      <TableCell align="left">{user.cellphone}</TableCell>
      <TableCell align="left">{user.role}</TableCell>
      <TableCell align="left">
        <DeleteOutlineIcon
          onClick={() => setOpen(true)}
          sx={{ cursor: "pointer" }}
        />
      </TableCell>
      <TableCell align="left">
        <EditIcon
          onClick={() => navigate(`/edit-user/${user._id}`)}
          sx={{ cursor: "pointer" }}
        />
      </TableCell>
      <AlertDialog
        open={open}
        onClose={() => setOpen(false)}
        context={"users"}
        handlerAction={handlerDeleteUser}
        objectId={user._id}
      />
    </TableRow>
  );
}
