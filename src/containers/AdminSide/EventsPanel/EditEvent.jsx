import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import {
//   UsersActionsContainer,
//   PastPageDataContainerAndTitle,
//   Title,
//   FormContainertUsersAction,
//   LeftSectionContainer,
//   RightSectionContainer,
//   FormSectionsContainer,
//   TitleContainer,
//   PastPageContainer,
//   ActionButtonContainer,
//   ButtonsContainer,
// } from "./eventsStyles";
// import {
//   ActionButton,
//   CancelActionButton,
//   BreadcumsContainer,
// } from "../../components/Global/GlobalStyles";
// import BreadcrumbsMui from "../../components/Breadcrumbs/Breadcrumbs";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import InputLabel from "@mui/material/InputLabel";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useEvents from "./useEvents";
// import { userValidations } from "./userValidations";
// import useNotistack from "../../components/Notistack/useNotistack";
// import { useParams } from "react-router-dom";
// import Button from "@mui/material/Button";

const EditEvent = () => {
  // const roles = ["Admin", "Setter", "Closer"];
  // const { id } = useParams();
  // const { editEvent, getEventById, event, isLoading } = useEvents();
  // const [userInfo, setUserInfo] = useState({
  //   email: "",
  //   name: "",
  //   lastName: "",
  //   cellphone: "",
  //   password: "",
  //   role: "",
  //   repeatPassword: "",
  // });
  // const { showNotification } = useNotistack();
  // const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { value, name } = e.target;
  //   setUserInfo({ ...userInfo, [name]: value });
  // };

  // const handleSetErrors = (errors) => {
  //   errors[0]?.forEach((error) => {
  //     showNotification(error, "error");
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = userValidations(userInfo);

  //   if (response.valid) {
  //     editEvent(userInfo, id, setErrors);
  //   } else {
  //     setErrors(response);
  //   }
  // };

  // useEffect(() => {
  //   handleSetErrors(errors);
  // }, [errors]);

  // useEffect(() => {
  //   getEventById(id);
  // }, []);

  // useEffect(() => {
  //   setUserInfo({
  //     ...userInfo,
  //     email: user?.email,
  //     name: user?.name,
  //     lastName: user?.lastName,
  //     cellphone: user?.cellphone,
  //     role: user?.role,
  //   });
  // }, [event]);

  // const navigate = useNavigate();
  return (
    <div>edituser</div>
    // <UsersActionsContainer>
    //   <FormContainertUsersAction onSubmit={(e) => handleSubmit(e)} noValidate>
    //     <PastPageDataContainerAndTitle>
    //       <PastPageContainer>
    //         <BreadcumsContainer>
    //           <BreadcrumbsMui
    //             title="Edit user"
    //             prev="Users"
    //             path={"/home/users"}
    //           ></BreadcrumbsMui>
    //         </BreadcumsContainer>
    //       </PastPageContainer>
    //       <TitleContainer>
    //         <Title>Edit event</Title>
    //       </TitleContainer>
    //     </PastPageDataContainerAndTitle>
    //     {/* <BoxMui
    //       component="form"
    //       noValidate
    //       onSubmit={handleSubmit}
    //       sx={{
    //         width: "80%",
    //         height: "450px",
    //       }}
    //     > */}
    //     <FormSectionsContainer>
    //       <LeftSectionContainer>
    //         <TextField
    //           // InputLabelProps={{
    //           //   style: { color: `${themeMui.palette.inputText.main}` },
    //           // }}
    //           // sx={{
    //           //   input: {
    //           //     color: `${themeMui.palette.inputText.main}`,
    //           //   },
    //           //   width: "497px",
    //           //   "& .MuiInputLabel-root": { color: "#D3D6DA" },
    //           // }}
    //           autoComplete="given-name"
    //           required
    //           id="firstName"
    //           label="Name"
    //           autoFocus
    //           name="name"
    //           variant="standard"
    //           fullWidth
    //           onChange={handleChange}
    //           error={errors[1]?.name}
    //           value={userInfo.name}
    //         />
    //         <TextField
    //           // InputLabelProps={{
    //           //   style: { color: `${themeMui.palette.inputText.main}` },
    //           // }}
    //           // sx={{
    //           //   input: {
    //           //     color: `${themeMui.palette.inputText.main}`,
    //           //   },
    //           //   width: "497px",
    //           //   "& .MuiInputLabel-root": { color: "#D3D6DA" },
    //           // }}
    //           variant="standard"
    //           required
    //           fullWidth
    //           id="cellphone"
    //           label="Cellphone"
    //           autoComplete="cellphone"
    //           name="cellphone"
    //           onChange={handleChange}
    //           error={errors[1]?.cellphone}
    //           value={userInfo.cellphone}
    //         />

    //         <TextField
    //           // InputLabelProps={{
    //           //   style: { color: `${themeMui.palette.inputText.main}` },
    //           // }}
    //           // sx={{
    //           //   input: {
    //           //     color: `${themeMui.palette.inputText.main}`,
    //           //   },
    //           //   width: "497px",
    //           //   "& .MuiInputLabel-root": { color: "#D3D6DA" },
    //           // }}
    //           required
    //           fullWidth
    //           label="Password"
    //           variant="standard"
    //           id="password"
    //           autoComplete="new-password"
    //           name="password"
    //           onChange={handleChange}
    //           error={errors[1]?.password}
    //           value={userInfo.password}
    //           type="password"
    //         />
    //         <FormControl
    //           sx={{
    //             width: "100%",
    //           }}
    //         >
    //           <InputLabel id="rol-label">Rol</InputLabel>
    //           <Select
    //             MenuProps={{ disableScrollLock: true }}
    //             // sx={{
    //             //   input: {
    //             //     color: `${themeMui.palette.inputText.main}`,
    //             //   },
    //             //   width: "497px",
    //             // }}
    //             // SelectDisplayProps={{
    //             //   style: { color: `${themeMui.palette.inputText.main}` },
    //             // }}
    //             // labelId="rol-label"
    //             onChange={handleChange}
    //             name="role"
    //             error={errors[1]?.role}
    //             variant="standard"
    //             value={userInfo?.role}
    //           >
    //             {roles.map((rol) => {
    //               return <MenuItem value={rol}>{rol}</MenuItem>;
    //             })}
    //           </Select>
    //         </FormControl>
    //       </LeftSectionContainer>
    //       <RightSectionContainer>
    //         <TextField
    //           // InputLabelProps={{
    //           //   style: { color: `${themeMui.palette.inputText.main}` },
    //           // }}
    //           // sx={{
    //           //   input: {
    //           //     color: `${themeMui.palette.inputText.main}`,
    //           //   },
    //           //   width: "497px",
    //           //   "& .MuiInputLabel-root": { color: "#D3D6DA" },
    //           // }}
    //           required
    //           fullWidth
    //           label="Last name"
    //           variant="standard"
    //           id="lastname"
    //           autoComplete="new-lastname"
    //           name="lastName"
    //           onChange={handleChange}
    //           error={errors[1]?.lastName}
    //           value={userInfo.lastName}
    //         />
    //         <TextField
    //           // InputLabelProps={{
    //           //   style: { color: `${themeMui.palette.inputText.main}` },
    //           // }}
    //           // sx={{
    //           //   input: {
    //           //     color: `${themeMui.palette.inputText.main}`,
    //           //   },
    //           //   width: "497px",
    //           //   "& .MuiInputLabel-root": { color: "#D3D6DA" },
    //           // }}
    //           autoComplete="given-email"
    //           required
    //           id="email"
    //           label="Email"
    //           autoFocus
    //           name="email"
    //           variant="standard"
    //           fullWidth
    //           onChange={handleChange}
    //           error={errors[1]?.email}
    //           value={userInfo.email}
    //         />
    //         <TextField
    //           // InputLabelProps={{
    //           //   style: { color: `${themeMui.palette.inputText.main}` },
    //           // }}
    //           // sx={{
    //           //   input: {
    //           //     color: `${themeMui.palette.inputText.main}`,
    //           //   },
    //           //   width: "497px",
    //           //   "& .MuiInputLabel-root": { color: "#D3D6DA" },
    //           // }}
    //           required
    //           fullWidth
    //           label="Repeat password"
    //           variant="standard"
    //           id="repeat-password"
    //           autoComplete="repeat-password"
    //           name="repeatPassword"
    //           onChange={handleChange}
    //           error={errors[1]?.repeatPassword}
    //           value={userInfo.repeatPassword}
    //           type="password"
    //         />
    //       </RightSectionContainer>
    //     </FormSectionsContainer>
    //     {/* </BoxMui> */}
    //     <ActionButtonContainer>
    //       <ButtonsContainer>
    //         <Button
    //           variant="outlined"
    //           type="submit"
    //           disabled={isLoading ? true : false}
    //         >
    //           edit
    //         </Button>
    //         <Button variant="outlined" onClick={() => navigate("/home/users")}>
    //           Cancel
    //         </Button>
    //       </ButtonsContainer>
    //     </ActionButtonContainer>
    //   </FormContainertUsersAction>
    // </UsersActionsContainer>
  );
};

export default EditEvent;
