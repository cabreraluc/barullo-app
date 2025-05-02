import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export default function Event({ event, disableEvent }) {
  const navigate = useNavigate();
  // const [open, setOpen] = useState(false);

  // const handlerDeleteUser = (id) => {
  //   disableEvent(id);
  //   setOpen(false);
  // };

  return (
    <TableRow
      key={event.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {event.name}
      </TableCell>
      <TableCell align="left">{event.date}</TableCell>
      <TableCell align="left">
        <DeleteOutlineIcon
        // onClick={() => setOpen(true)}
        // sx={{ cursor: "pointer" }}
        />
      </TableCell>
      <TableCell align="left">
        <EditIcon
          onClick={() => navigate(`/edit-event/${event?._id}`)}
          // sx={{ cursor: "pointer" }}
        />
      </TableCell>
      {/* <AlertDialog
      // open={open}
      // onClose={() => setOpen(false)}
      // context={"events"}
      // handlerAction={handlerDeleteUser}
      // objectId={event._id}
      /> */}
    </TableRow>
  );
}
