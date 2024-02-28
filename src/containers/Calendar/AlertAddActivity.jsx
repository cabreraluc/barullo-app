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
import { AlertAddForm, ButtonsContainer } from "./calendarStyles";
import useProspects from "../../containers/Prospects/useProspects";

export default function AlertAddActivity({
  open,
  onClose,
  newActivity,
  setNewActivity,
  handleSubmit,
}) {
  const { getProspects, allProspects } = useProspects();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewActivity({ ...newActivity, [name]: value });
  };
  useEffect(() => {
    getProspects();
  }, []);

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth=""
        sx={{}}
      >
        <div style={{ margin: "4rem 10rem" }}>
          <IconButton
            aria-label="close"
            onClick={() => {
              setNewActivity({
                title: "",
                prospect: "",
                details: "",
                start: "",
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
            X
          </IconButton>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"></DialogContentText>
          </DialogContent>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
              width: "100%",
            }}
          >
            <Title>Add event</Title>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <AlertAddForm
              onSubmit={(e) => {
                handleSubmit(e);

                setNewActivity({
                  title: "",
                  prospect: "",
                  details: "",
                  start: "",
                  end: "",
                  allDay: "",
                  id: "",
                });
              }}
              noValidate
            >
              <TextField
                autoComplete="title"
                required
                id="title"
                label="Title"
                autoFocus
                name="title"
                fullWidth
                onChange={(e) => handleChange(e)}
                // error={errors[1]?.email}
                value={newActivity.title}
                variant="outlined"
                sx={{ marginBottom: "1rem" }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Details"
                multiline
                rows={6}
                fullWidth
                name="details"
                onChange={handleChange}
                // error={errors[1]?.comments}
                value={newActivity.details}
                sx={{ marginBottom: "1rem" }}
              />
              <FormControl
                sx={{
                  width: "25rem",
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
                  // error={errors[1]?.role}
                  variant="standard"
                >
                  {allProspects.map((prospect) => {
                    return (
                      <MenuItem value={prospect}>
                        {prospect.name} {prospect.lastName}
                      </MenuItem>
                    );
                  })}
                </Select>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "3.7rem",
                    marginBottom: "2.2rem",
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
              </FormControl>
            </AlertAddForm>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
