import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import IconButton from "@mui/material/IconButton";
import { Title } from "../../components/Dialog/alertDialogStyles";
import useCalendar from "../Calendar/useCalendar";
import { useEffect } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import {
  AlertAddForm,
  ButtonsContainer,
  LeftSection,
  RightSection,
  InputContainer,
  DatesOfEvents,
} from "./calendarStyles";
import useProspects from "../../containers/Prospects/useProspects";
import CloseIcon from "@mui/icons-material/Close";
import useClients from "../Clients/useClients";
import { ChromePicker } from "react-color";
import Typography from "@mui/material";

export default function AlertAddActivity({
  open,
  onClose,
  newActivity,
  setNewActivity,
  handleSubmit,
  errors,
}) {
  const { getProspects, allProspects } = useProspects();
  const { getClients, allClients } = useClients();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewActivity({ ...newActivity, [name]: value });
  };

  useEffect(() => {
    getProspects();
    getClients();
  }, []);

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth=""
      >
        <div
          style={{
            width: "50rem",
          }}
        >
          <IconButton
            aria-label="close"
            onClick={() => {
              setNewActivity({
                title: "",
                prospect: "",
                details: "",
                start: "",
                client: "",
                end: "",
                allDay: "",
                id: "",
              });
              onClose();
            }}
            sx={{
              position: "absolute",
              right: 30,
              top: 25,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon></CloseIcon>
          </IconButton>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"></DialogContentText>
          </DialogContent>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              width: "100%",
            }}
          >
            <Title>Add event</Title>
          </div>

          <AlertAddForm
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            noValidate
          >
            <InputContainer>
              <LeftSection>
                <TextField
                  autoComplete="title"
                  required
                  id="title"
                  label="Title event"
                  autoFocus
                  name="title"
                  fullWidth
                  onChange={(e) => handleChange(e)}
                  error={errors[1]?.title}
                  value={newActivity.title}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    color: "white",
                    ".MuiAutocomplete-clearIndicator": {
                      color: "white",
                    },

                    "& .MuiAutocomplete-noOptions": {
                      color: "white",
                    },
                    "& .MuiAutocomplete-input": {
                      color: "white",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      border: "solid 1px white",
                    },
                  }}
                />
                <FormControl
                  sx={{
                    width: "100%",
                  }}
                >
                  <InputLabel id="rol-label">Pospect</InputLabel>
                  <Select
                    MenuProps={{ disableScrollLock: true }}
                    sx={{
                      width: "100%",
                    }}
                    // SelectDisplayProps={{
                    //   style: { color: `${themeMui.palette.inputText.main}` },
                    // }}
                    // labelId="rol-label"
                    onChange={handleChange}
                    name="prospect"
                    error={errors[1]?.prospect}
                    variant="standard"
                  >
                    {newActivity?.client?.name?.length
                      ? allProspects
                          .filter((e) => {
                            return e.client === newActivity.client._id;
                          })
                          .map((prospect) => {
                            return (
                              <MenuItem value={prospect}>
                                {prospect.name} {prospect.lastName}
                              </MenuItem>
                            );
                          })
                      : allProspects.map((prospect) => {
                          return (
                            <MenuItem value={prospect}>
                              {prospect.name} {prospect.lastName}
                            </MenuItem>
                          );
                        })}
                  </Select>
                </FormControl>
              </LeftSection>

              <RightSection>
                <DatesOfEvents>
                  Date: {newActivity.start + " to " + newActivity.end}
                </DatesOfEvents>
                <FormControl
                  sx={{
                    width: "100%",
                  }}
                >
                  <InputLabel id="rol-label">Client</InputLabel>
                  <Select
                    MenuProps={{ disableScrollLock: true }}
                    sx={{
                      width: "100%",
                    }}
                    // SelectDisplayProps={{
                    //   style: { color: `${themeMui.palette.inputText.main}` },
                    // }}
                    // labelId="rol-label"
                    onChange={handleChange}
                    name="client"
                    error={errors[1]?.client}
                    variant="standard"
                    disabled={
                      newActivity?.prospect?.name?.length &&
                      newActivity?.client === ""
                        ? true
                        : false
                    }
                  >
                    {allClients.map((client) => {
                      return (
                        <MenuItem value={client}>
                          {client.bussinesName} - {client.name}{" "}
                          {client.lastName}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </RightSection>
            </InputContainer>

            <TextField
              id="outlined-multiline-static"
              label="Details"
              multiline
              rows={6}
              fullWidth
              name="details"
              onChange={handleChange}
              error={errors[1]?.details}
              value={newActivity.details}
              sx={{ marginTop: "1.5rem", width: "70%" }}
            />
            <div
              style={{
                display: "flex",
                marginTop: "1.5rem",
                justifyContent: "flex-end",
                width: "80%",
                gap: "20px",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                //   disabled={isLoading ? true : false}
              >
                Create
              </Button>
              <Button
                onClick={() => {
                  setNewActivity({
                    title: "",
                    prospect: "",
                    details: "",
                    start: "",
                    client: "",
                    end: "",
                    allDay: "",
                    id: "",
                  });
                  onClose();
                }}
              >
                CANCEL
              </Button>
            </div>
          </AlertAddForm>
        </div>
      </Dialog>
    </div>
  );
}
