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
import useProspects from "../../containers/Prospects/useProspects";

export default function Prospect({ prospect, disableProspect }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handlerDeleteProspect = (id) => {
    disableProspect(id);
    setOpen(false);
  };

  console.log(prospect);
  return (
    <TableRow
      key={prospect.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell
        component="th"
        scope="row"
        onClick={() => navigate(`/prospect-details/${prospect._id}`)}
        sx={{ cursor: "pointer" }}
      >
        {prospect.name} {prospect.lastName}
      </TableCell>
      <TableCell align="left">{prospect.cellphone}</TableCell>
      <TableCell align="left">{prospect.email}</TableCell>
      <TableCell align="left">{prospect.interestLevel}</TableCell>
      <TableCell align="left">{prospect.statusOfProspect}</TableCell>

      <TableCell align="left">
        <DeleteOutlineIcon
          onClick={() => setOpen(true)}
          sx={{ cursor: "pointer" }}
        />
      </TableCell>
      <TableCell align="left">
        <EditIcon
          onClick={() => navigate(`/edit-prospect/${prospect._id}`)}
          sx={{ cursor: "pointer" }}
        />
      </TableCell>
      <AlertDialog
        open={open}
        onClose={() => setOpen(false)}
        context={"prospects"}
        handlerAction={handlerDeleteProspect}
        objectId={prospect._id}
      />
    </TableRow>
  );
}
