import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import AlertActivityInfo from "../../containers/Calendar/AlertActivityOfDay";
import AlertDialog from "../Dialog/AlertDialog";
import { useState } from "react";

export default function ActivityIndividual({
  activity,
  onOpen,
  setIdOfActivity,
}) {
  const navigate = useNavigate();

  //   const handlerDeleteUser = (id) => {
  //     disableUser(id);
  //     setOpen(false);
  //   };

  return (
    <>
      <TableRow
        key={activity._id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell
          align="left"
          sx={{ cursor: "pointer" }}
          onClick={() => {
            onOpen();
            setIdOfActivity(activity?._id);
          }}
        >
          {activity?.title}
        </TableCell>
        <TableCell
          align="left"
          sx={{ cursor: "pointer" }}
          onClick={() =>
            navigate(`/prospect-details/${activity?.prospect?._id}`)
          }
        >
          {activity?.prospect?.name} {activity?.prospect?.lastName}
        </TableCell>
        <TableCell component="th" scope="row">
          {moment(activity?.start).format("HH:mm")}hs
        </TableCell>
        <TableCell align="left">
          {moment(activity?.end).format("HH:mm")}hs
        </TableCell>
        <TableCell align="left">
          {activity.client
            ? activity?.client?.bussinesName
            : activity?.prospect?.client?.bussinesName}
        </TableCell>
        <TableCell align="left">{activity?.status}</TableCell>
      </TableRow>
    </>
  );
}
