import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

import AlertDialog from "../Dialog/AlertDialog";
import { useState } from "react";

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
      <TableCell align="left">{user.email}</TableCell>

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
