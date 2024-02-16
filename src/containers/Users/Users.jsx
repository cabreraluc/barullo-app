import {
  UsersContainer,
  UsersList,
  PanelRight,
  ButtonBar,
} from "./usersStyles";
import { useNavigate } from "react-router-dom";
import useUsers from "./useUsers";
import { useEffect } from "react";
import UsersTable from "../../components/Users/UsersTable";
import Loader from "../../componentsCss/Loader/Loader";
import Searcher from "../../components/Searcher/Searcher";
const values = [{ name: "Add User", path: "/add-user" }];

const Users = () => {
  const navigate = useNavigate();
  const { allUsers, getUsers, disableUser, isLoading, setAllUsers } =
    useUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersContainer>
      <UsersList>
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <UsersTable
            allUsers={allUsers}
            disableUser={disableUser}
            isLoading={isLoading}
          />
        )}
      </UsersList>
      <PanelRight>
        <Searcher list={allUsers} setList={setAllUsers} context={"users"} />
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
