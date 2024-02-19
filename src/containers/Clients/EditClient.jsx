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
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

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
    bussinesName: "",
    dues: "",
    totalPayment: "",
    closer: "",
    setter: "",
    growthPartner: "",
    comments: "",
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

  const onCheckChange = (e) => {
    const { name } = e.target;
    if (clientInfo[name] !== "checked") {
      setClientInfo({ ...clientInfo, [name]: "checked" });
    } else {
      setClientInfo({ ...clientInfo, [name]: "" });
    }
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
      bussinesName: client?.bussinesName,
      dues: client?.dues,
      totalPayment: client?.totalPayment,
      closer: client?.closer === true ? "checked" : "",
      setter: client?.setter === true ? "checked" : "",
      growthPartner: client?.growthPartner === true ? "checked" : "",
      comments: client?.comments,
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
              autoComplete="bussines-name"
              required
              id="BussinesName"
              label="Bussines name"
              autoFocus
              name="bussinesName"
              variant="standard"
              fullWidth
              onChange={handleChange}
              error={errors[1]?.bussinesName}
              value={clientInfo.bussinesName}
            />
            <TextField
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
            <TextField
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
          </LeftSectionContainer>
          <RightSectionContainer>
            <TextField
              variant="standard"
              required
              fullWidth
              id="totalPayment"
              label="Total payment"
              autoComplete="totalPayment"
              name="totalPayment"
              onChange={handleChange}
              error={errors[1]?.totalPayment}
              value={clientInfo.totalPayment}
            />
            <TextField
              variant="standard"
              required
              fullWidth
              id="dues"
              label="Dues"
              autoComplete="dues"
              name="dues"
              onChange={handleChange}
              error={errors[1]?.dues}
              value={clientInfo.dues}
            />

            <FormGroup>
              <Typography variant="overline" display="block" gutterBottom>
                Select services
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    name="closer"
                    checked={clientInfo.closer}
                    onChange={(e) => onCheckChange(e)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Closer"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="setter"
                    checked={clientInfo.setter}
                    onChange={(e) => onCheckChange(e)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Setter"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="growthPartner"
                    checked={clientInfo.growthPartner}
                    onChange={(e) => onCheckChange(e)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Growth partner"
              />
            </FormGroup>
            <TextField
              id="outlined-multiline-static"
              label="Comments"
              multiline
              rows={6}
              fullWidth
              name="comments"
              onChange={handleChange}
              error={errors[1]?.comments}
              value={clientInfo.comments}
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
