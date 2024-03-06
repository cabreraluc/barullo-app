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
import DeleteIcon from "@mui/icons-material/Delete";

export default function ActivityIndividual({
  activity,
  onOpen,
  setIdOfActivity,
  handleArchiveActivity,
  archiveModalOpen,
  setArchiveModalOpen,
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
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <TableCell
          align="left"
          sx={{ cursor: "pointer", color: "#505d6b" }}
          onClick={() => {
            onOpen();
            setIdOfActivity(activity?._id);
          }}
        >
          {activity?.title}
        </TableCell>
        <TableCell
          align="left"
          sx={{ cursor: "pointer", color: "#505d6b" }}
          onClick={() =>
            navigate(`/prospect-details/${activity?.prospect?._id}`)
          }
        >
          {activity?.prospect?.name
            ? activity?.prospect?.name + " " + activity?.prospect?.lastName
            : "---"}
        </TableCell>
        <TableCell component="th" scope="row" style={{ color: "#505d6b" }}>
          {moment(activity?.start).format("HH:mm")}hs
        </TableCell>
        <TableCell align="left" style={{ color: "#505d6b" }}>
          {moment(activity?.end).format("HH:mm")}hs
        </TableCell>
        <TableCell align="left" style={{ color: "#505d6b" }}>
          {activity.client
            ? activity?.client?.bussinesName
            : activity?.prospect?.client?.bussinesName
            ? activity?.prospect?.client?.bussinesName
            : "---"}
        </TableCell>
        <TableCell align="left">
          <DeleteIcon
            onClick={() => setArchiveModalOpen(true)}
            sx={{ cursor: "pointer", color: "#505d6b" }}
          ></DeleteIcon>
        </TableCell>
        <AlertDialog
          open={archiveModalOpen}
          onClose={() => setArchiveModalOpen(false)}
          context={"calendar"}
          handlerAction={handleArchiveActivity}
          objectId={activity._id}
        />
      </TableRow>
    </>
  );
}
