import { UsersContainer, UsersList, ButtonContainer } from "./usersStyles";
import { useNavigate } from "react-router-dom";
import useUsers from "./useUsers";
import { useEffect } from "react";
import UsersTable from "../../components/Users/UsersTable";
import Searcher from "../../components/Searcher/Searcher";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SpaceshipLoader from "../../components/Loader/SpaceshipLoader";

const UsersPanel = () => {
  const { isLoading, disableUser, getUsers, allUsers, setAllUsers } =
    useUsers();
  const navigate = useNavigate();
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersContainer>
      <ButtonContainer>
        <AddCircleIcon
          onClick={() => navigate("/add-user")}
          fontSize="large"
        ></AddCircleIcon>
      </ButtonContainer>
      <Searcher list={allUsers} setList={setAllUsers} context={"users"} />
      {isLoading ? (
        <SpaceshipLoader />
      ) : (
        <UsersList>
          <UsersTable
            allUsers={allUsers}
            disableUser={disableUser}
            isLoading={isLoading}
          />
        </UsersList>
      )}
    </UsersContainer>
  );
};

export default UsersPanel;
