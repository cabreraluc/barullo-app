import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  ClientsActionsContainer,
  PastPageDataContainerAndTitle,
  Title,
  FormContainertClientsAction,
  LeftSectionContainer,
  RightSectionContainer,
  FormSectionsContainer,
  TitleContainer,
  PastPageContainer,
  ActionButtonContainer,
  ButtonsContainer,
} from "./clientsStyles";
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
import useClients from "./useClients";
import { clientValidations } from "./clientValidations";
import useNotistack from "../../components/Notistack/useNotistack";
import { useParams } from "react-router-dom";

const EditClient = () => {
  const clientRoles = ["Admin", "Setter", "Closer"];
  const { id } = useParams();
  const { editClient, getClientById, client, isLoading } = useClients();
  const [clientInfo, setClientInfo] = useState({
    email: "",
    name: "",
    lastName: "",
    cellphone: "",
    password: "",
    clientRole: "",
    repeatPassword: "",
  });
  const { showNotification } = useNotistack();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setClientInfo({ ...clientInfo, [name]: value });
  };

  const handleSetErrors = (errors) => {
    errors[0]?.forEach((error) => {
      showNotification(error, "error");
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = clientValidations(clientInfo);

    if (response.valid) {
      editClient(clientInfo, id, setErrors);
    } else {
      setErrors(response);
    }
  };

  useEffect(() => {
    handleSetErrors(errors);
  }, [errors]);

  useEffect(() => {
    getClientById(id);
  }, []);

  useEffect(() => {
    setClientInfo({
      ...clientInfo,
      email: client?.email,
      name: client?.name,
      lastName: client?.lastName,
      cellphone: client?.cellphone,
      clientRole: client?.clientRole,
    });
  }, [client]);

  useEffect(() => {
    console.log(clientInfo);
  }, [clientInfo]);

  const navigate = useNavigate();
  return (
    <ClientsActionsContainer>
      <FormContainertClientsAction onSubmit={(e) => handleSubmit(e)} noValidate>
        <PastPageDataContainerAndTitle>
          <PastPageContainer>
            <BreadcumsContainer>
              <BreadcrumbsMui
                title="Edit client"
                prev="Clients"
                path={"/home/clients"}
              ></BreadcrumbsMui>
            </BreadcumsContainer>
          </PastPageContainer>
          <TitleContainer>
            <Title>Edit client</Title>
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
              value={clientInfo.name}
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
              value={clientInfo.cellphone}
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
              value={clientInfo.password}
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
                name="clientRole"
                error={errors[1]?.clientRole}
                variant="standard"
                value={clientInfo?.clientRole}
              >
                {clientRoles.map((rol) => {
                  return <MenuItem value={rol}>{rol}</MenuItem>;
                })}
              </Select>

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
                label="Service"
                autoComplete="cellphone"
                name="cellphone"
                onChange={handleChange}
                error={errors[1]?.cellphone}
                value={clientInfo.cellphone}
              />
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
              value={clientInfo.lastName}
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
              value={clientInfo.email}
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
              value={clientInfo.repeatPassword}
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
            <CancelActionButton onClick={() => navigate("/home/clients")}>
              Cancel
            </CancelActionButton>
          </ButtonsContainer>
        </ActionButtonContainer>
      </FormContainertClientsAction>
    </ClientsActionsContainer>
  );
};

export default EditClient;
