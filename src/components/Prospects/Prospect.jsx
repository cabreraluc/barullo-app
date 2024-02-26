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
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import AlertDialog from "../Dialog/AlertDialog";
import { useState, useEffect } from "react";
import useProspects from "../../containers/Prospects/useProspects";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { RedesContainer } from "../../containers/Prospects/prospectsStyles";
import useAuth from "../../containers/Login/useAuth";
import useUsers from "../../containers/Users/useUsers";
import Loader from "../../componentsCss/Loader/Loader";

export default function Prospect({
  prospect,
  disableProspect,
  changeProspectStatus,
  changeInterestLevel,
}) {
  const status = ["To call", "In process", "Closed"];
  const interestArray = ["Very low", "Low", "Medium", "High", "Very high"];
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [statusOfProspect, setStatusOfProspect] = useState({ status: "" });
  const [interestLevelState, setInterestLevelState] = useState({
    interestLevel: "-",
  });

  const { getUserById, user } = useUsers();

  const userLocalStorage = useAuth();

  useEffect(() => {
    getUserById(userLocalStorage.id);
  }, []);

  const handlerDeleteProspect = (id) => {
    disableProspect(id);
    setOpen(false);
  };

  const handleChange = (e) => {
    changeProspectStatus(prospect._id, e.target.value);
  };

  const handleChangeInterestLevel = (e) => {
    changeInterestLevel(prospect._id, e.target.value);
  };

  useEffect(() => {
    setStatusOfProspect({
      status: prospect?.statusOfProspect,
    });

    setInterestLevelState({
      interestLevel: prospect?.interestLevel,
    });
  }, [prospect]);

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
      <TableCell align="left">
        {prospect?.cellphone?.length ? prospect.cellphone : "---"}
      </TableCell>
      <TableCell align="left">
        {prospect?.email?.length ? prospect.email : "---"}
      </TableCell>
      <TableCell align="left">
        {" "}
        <FormControl>
          <Select
            MenuProps={{ disableScrollLock: true }}
            onChange={handleChangeInterestLevel}
            value={interestLevelState.interestLevel}
            disabled={user.role === "Client" ? true : false}
            sx={{
              height: "2rem",
              width: "9rem",
            }}
          >
            {interestArray.map((level) => {
              return <MenuItem value={level}>{level}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </TableCell>
      <TableCell align="left">
        <FormControl>
          <Select
            MenuProps={{ disableScrollLock: true }}
            onChange={handleChange}
            value={statusOfProspect.status}
            disabled={user.role === "Client" ? true : false}
            sx={{
              height: "2rem",
              width: "9rem",
            }}
          >
            {status.map((type) => {
              return <MenuItem value={type}>{type}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </TableCell>
      <TableCell>
        {!prospect?.instagram?.length &&
        !prospect?.linkedin?.length &&
        !prospect?.facebook?.length &&
        !prospect?.tiktok?.length ? (
          "---"
        ) : (
          <RedesContainer>
            {prospect.instagram.length ? (
              <a
                style={{ color: "black" }}
                href={prospect.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon fontSize="small" />
              </a>
            ) : null}
            {prospect.facebook.length ? (
              <a
                style={{ color: "black" }}
                href={prospect.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon fontSize="small" />
              </a>
            ) : null}
            {prospect.linkedin.length ? (
              <a
                style={{ color: "black" }}
                href={prospect.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="small" />
              </a>
            ) : null}
            {prospect.tiktok.length ? (
              <a
                style={{ color: "black" }}
                href={prospect.tiktok}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon fontSize="small" />
              </a>
            ) : null}
          </RedesContainer>
        )}
      </TableCell>

      <TableCell align="left">
        {prospect?.country?.length ? prospect.country : "---"}
      </TableCell>
      {user.role === "Client" ? null : user.role?.length ? (
        <TableCell align="left">
          <DeleteOutlineIcon
            onClick={() => setOpen(true)}
            sx={{ cursor: "pointer" }}
          />
        </TableCell>
      ) : (
        <TableCell align="left">
          <Loader size={15}></Loader>
        </TableCell>
      )}

      {user.role === "Client" ? null : user.role?.length ? (
        <TableCell align="left">
          <EditIcon
            onClick={() => navigate(`/edit-prospect/${prospect._id}`)}
            sx={{ cursor: "pointer" }}
          />
        </TableCell>
      ) : (
        <TableCell align="left">
          <Loader size={15}></Loader>
        </TableCell>
      )}
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
