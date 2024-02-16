import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  UsersActionsContainer,
  PastPageDataContainerAndTitle,
  Title,
  FormContainertUsersAction,
  LeftSectionContainer,
  RightSectionContainer,
  FormSectionsContainer,
  TitleContainer,
  PastPageContainer,
  ActionButtonContainer,
  ButtonsContainer,
} from "./usersStyles";
import {
  ActionButton,
  CancelActionButton,
  BreadcumsContainer,
} from "../../components/Global/GlobalStyles";
import BreadcrumbsMui from "../../components/Breadcrumbs/Breadcrumbs";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUsers from "./useUsers";
import { userValidations } from "./userValidations";
import useNotistack from "../../components/Notistack/useNotistack";

const AddClient = () => {
  const userRoles = ["Admin", "Setter", "Closer"];
  const { addUser, isLoading } = useUsers();
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    lastName: "",
    cellphone: "",
    password: "",
    userRole: "",
    repeatPassword: "",
  });
  const { showNotification } = useNotistack();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSetErrors = (errors) => {
    errors[0]?.forEach((error) => {
      showNotification(error, "error");
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = userValidations(userInfo, "addUser");

    if (response.valid) {
      addUser(userInfo, setErrors);
    } else {
      setErrors(response);
    }
  };

  useEffect(() => {
    handleSetErrors(errors);
    console.log(errors);
  }, [errors]);

  const navigate = useNavigate();
  return (
    <UsersActionsContainer>
      <FormContainertUsersAction onSubmit={(e) => handleSubmit(e)} noValidate>
        <PastPageDataContainerAndTitle>
          <PastPageContainer>
            <BreadcumsContainer>
              <BreadcrumbsMui
                title="Add user"
                prev="Users"
                path={"/home/users"}
              ></BreadcrumbsMui>
            </BreadcumsContainer>
          </PastPageContainer>
          <TitleContainer>
            <Title>Add user</Title>
          </TitleContainer>
        </PastPageDataContainerAndTitle>
        {/* <BoxMui
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            width: "80%",
            height: "450px",
          }}
        > */}
        <FormSectionsContainer>
          <LeftSectionContainer>
            <TextField
              // InputLabelProps={{
              //   style: { color: `${themeMui.palette.inputText.main}` },
              // }}
              // sx={{
              //   input: {
              //     color: `${themeMui.palette.inputText.main}`,
              //   },
              //   width: "497px",
              //   "& .MuiInputLabel-root": { color: "#D3D6DA" },
              // }}
              autoComplete="given-name"
              required
              id="firstName"
              label="Name"
              autoFocus
              name="name"
              variant="standard"
              fullWidth
              onChange={handleChange}
              error={errors[1]?.name}
              value={userInfo.name}
            />
            <TextField
              // InputLabelProps={{
              //   style: { color: `${themeMui.palette.inputText.main}` },
              // }}
              // sx={{
              //   input: {
              //     color: `${themeMui.palette.inputText.main}`,
              //   },
              //   width: "497px",
              //   "& .MuiInputLabel-root": { color: "#D3D6DA" },
              // }}
              variant="standard"
              required
              fullWidth
              id="cellphone"
              label="Cellphone"
              autoComplete="cellphone"
              name="cellphone"
              onChange={handleChange}
              error={errors[1]?.cellphone}
              value={userInfo.cellphone}
            />

            <TextField
              // InputLabelProps={{
              //   style: { color: `${themeMui.palette.inputText.main}` },
              // }}
              // sx={{
              //   input: {
              //     color: `${themeMui.palette.inputText.main}`,
              //   },
              //   width: "497px",
              //   "& .MuiInputLabel-root": { color: "#D3D6DA" },
              // }}
              required
              fullWidth
              label="Password"
              variant="standard"
              id="password"
              autoComplete="new-password"
              name="password"
              onChange={handleChange}
              error={errors[1]?.password}
              value={userInfo.password}
              type="password"
            />
            <FormControl
              sx={{
                width: "100%",
              }}
            >
              <InputLabel id="rol-label">Rol</InputLabel>
              <Select
                MenuProps={{ disableScrollLock: true }}
                // sx={{
                //   input: {
                //     color: `${themeMui.palette.inputText.main}`,
                //   },
                //   width: "497px",
                // }}
                // SelectDisplayProps={{
                //   style: { color: `${themeMui.palette.inputText.main}` },
                // }}
                // labelId="rol-label"
                onChange={handleChange}
                name="userRole"
                error={errors[1]?.userRole}
                variant="standard"
              >
                {userRoles.map((rol) => {
                  return <MenuItem value={rol}>{rol}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </LeftSectionContainer>
          <RightSectionContainer>
            <TextField
              // InputLabelProps={{
              //   style: { color: `${themeMui.palette.inputText.main}` },
              // }}
              // sx={{
              //   input: {
              //     color: `${themeMui.palette.inputText.main}`,
              //   },
              //   width: "497px",
              //   "& .MuiInputLabel-root": { color: "#D3D6DA" },
              // }}
              required
              fullWidth
              label="Last name"
              variant="standard"
              id="lastname"
              autoComplete="new-lastname"
              name="lastName"
              onChange={handleChange}
              error={errors[1]?.lastName}
              value={userInfo.lastName}
            />
            <TextField
              // InputLabelProps={{
              //   style: { color: `${themeMui.palette.inputText.main}` },
              // }}
              // sx={{
              //   input: {
              //     color: `${themeMui.palette.inputText.main}`,
              //   },
              //   width: "497px",
              //   "& .MuiInputLabel-root": { color: "#D3D6DA" },
              // }}
              autoComplete="given-email"
              required
              id="email"
              label="Email"
              autoFocus
              name="email"
              variant="standard"
              fullWidth
              onChange={handleChange}
              error={errors[1]?.email}
              value={userInfo.email}
            />
            <TextField
              // InputLabelProps={{
              //   style: { color: `${themeMui.palette.inputText.main}` },
              // }}
              // sx={{
              //   input: {
              //     color: `${themeMui.palette.inputText.main}`,
              //   },
              //   width: "497px",
              //   "& .MuiInputLabel-root": { color: "#D3D6DA" },
              // }}
              required
              fullWidth
              label="Repeat password"
              variant="standard"
              id="repeat-password"
              autoComplete="repeat-password"
              name="repeatPassword"
              onChange={handleChange}
              error={errors[1]?.repeatPassword}
              value={userInfo.repeatPassword}
              type="password"
            />
          </RightSectionContainer>
        </FormSectionsContainer>
        {/* </BoxMui> */}
        <ActionButtonContainer>
          <ButtonsContainer>
            <ActionButton type="submit" disabled={isLoading ? true : false}>
              Create
            </ActionButton>
            <CancelActionButton onClick={() => navigate("/home/users")}>
              Cancel
            </CancelActionButton>
          </ButtonsContainer>
        </ActionButtonContainer>
      </FormContainertUsersAction>
    </UsersActionsContainer>
  );
};

export default AddClient;
