import {
  UsersContainer,
  UsersList,
  PanelRight,
  ButtonBar,
} from "./usersStyles";
import { useNavigate } from "react-router-dom";
import useUsers from "./useUsers";
import { useEffect } from "react";

const values = [{ name: "Filters" }, { name: "Add User", path: "/add-user" }];

const Users = () => {
  const navigate = useNavigate();
  const { allUsers, getUsers } = useUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersContainer>
      <UsersList>
        {allUsers?.length && allUsers.map((u) => <span>{u.name}</span>)}
      </UsersList>
      <PanelRight>
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
