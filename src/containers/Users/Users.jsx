import {
  UsersContainer,
  UsersList,
  PanelRight,
  ButtonBar,
  Searcher,
} from "./usersStyles";
import { useNavigate } from "react-router-dom";
import useUsers from "./useUsers";
import { useEffect } from "react";
import UsersTable from "../../components/Users/UsersTable";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const values = [{ name: "Add User", path: "/add-user" }];

const Users = () => {
  const navigate = useNavigate();
  const { allUsers, getUsers, disableUser } = useUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersContainer>
      <UsersList>
        {/* {allUsers?.length && allUsers.map((u) => <span>{u.name}</span>)} */}
        <UsersTable allUsers={allUsers} disableUser={disableUser} />
      </UsersList>
      <PanelRight>
        <Searcher>
          <SearchIcon sx={{ color: "white", marginTop: 2, marginRight: 1 }} />
          <TextField
            id="standard-basic"
            label="Search user..."
            variant="standard"
            sx={{
              input: {
                color: `white`,
              },
            }}
            InputLabelProps={{
              style: {
                color: `gray`,
              },
            }}
          />
        </Searcher>
        {values.map((e) => (
          <ButtonBar onClick={e.path ? () => navigate(e.path) : null}>
            {e.name}
          </ButtonBar>
        ))}
      </PanelRight>
    </UsersContainer>
  );
};

export default Users;
