import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import IconButton from "@mui/material/IconButton";
import {
  Title,
  AlertEditForm,
} from "../../components/Dialog/alertDialogStyles";
import { Button } from "@mui/material";
import useCalendar from "../Calendar/useCalendar";
import { useEffect } from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import useProspects from "../Prospects/useProspects";
import { Autocomplete } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import FaceIcon from "@mui/icons-material/Face";
import { useNavigate } from "react-router-dom";
import { calendarValidations } from "./calendarValidations";
import useNotistack from "../../components/Notistack/useNotistack";

export default function AlertActivityInfo({
  open,
  onClose,
  idOfActivity,
  getActivities,
  handleSetActualEventInfo,
}) {
  const { showNotification } = useNotistack();
  const navigate = useNavigate();
  const { getProspects, allProspects } = useProspects();
  const { getActivityById, activity, editActivity } = useCalendar();
  const [errors, setErrors] = useState({});
  const handleSetErrors = (errors) => {
    errors[0]?.forEach((error) => {
      showNotification(error, "error");
    });
  };
  useEffect(() => {
    if (open === true) {
      getActivityById(idOfActivity);
    }
  }, [idOfActivity]);

  const [activityInfo, setActivityInfo] = useState({
    title: "",
    details: "",
    prospect: "",
    id: "",
  });

  const [edit, setEdit] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setActivityInfo({ ...activityInfo, [name]: value });
  };

  useEffect(() => {
    setActivityInfo({
      ...activityInfo,
      title: activity?.title,
      details: activity?.details,
      prospect: activity?.prospect,
      id: activity?._id,
    });
  }, [activity]);

  useEffect(() => {
    getProspects();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = calendarValidations(activityInfo);
    if (isValid.valid) {
      editActivity(activityInfo, activityInfo.id);
      setEdit(false);
      window.location.reload();
    } else {
      setErrors(isValid);
    }
  };
  useEffect(() => {
    handleSetErrors(errors);
  }, [errors]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => {
          setEdit(false);
          onClose();
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth=""
        sx={{}}
      >
        <div style={{ margin: "4rem 10rem" }}>
          <IconButton
            aria-label="close"
            onClick={() => {
              setEdit(false);
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
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "2rem",
                alignItems: "center",
              }}
            >
              <Title>{!edit ? "Event info" : "Edit event"}</Title>
              {edit ? null : (
                <EditIcon
                  sx={{
                    cursor: "pointer",
                    marginLeft: "-1rem",
                    fontSize: "1.2rem",
                  }}
                  onClick={() => setEdit(true)}
                ></EditIcon>
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <AlertEditForm
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              noValidate
            >
              <InputLabel id="title">Title</InputLabel>
              <TextField
                disabled={edit ? false : true}
                autoComplete="title"
                required
                id="title"
                fullWidth
                autoFocus
                name="title"
                onChange={(e) => handleChange(e)}
                error={errors[1]?.title}
                value={activityInfo?.title}
                variant="outlined"
                sx={{ marginBottom: "1rem" }}
              />
              <InputLabel id="title">Details</InputLabel>
              <TextField
                disabled={edit ? false : true}
                id="outlined-multiline-static"
                multiline
                rows={6}
                fullWidth
                name="details"
                onChange={handleChange}
                // error={errors[1]?.comments}
                value={activityInfo?.details}
                sx={{ marginBottom: "1rem" }}
              />

              <FormControl
                sx={{
                  width: "25rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {edit ? (
                  <Autocomplete
                    value={activityInfo.prospect}
                    onChange={(event, newValue) => {
                      setActivityInfo({
                        ...activityInfo,
                        prospect: newValue,
                      });
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="free-solo-with-text-demo"
                    options={allProspects}
                    getOptionLabel={(option) => {
                      if (typeof option === "string") {
                        return option;
                      }

                      if (option.inputValue) {
                        return option.inputValue;
                      }

                      return option.name + " " + option.lastName;
                    }}
                    renderOption={(props, option) => (
                      <li {...props}>
                        {option.name} {option.lastName}
                      </li>
                    )}
                    freeSolo
                    fullWidth
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={errors.prospect}
                        label="Assigned prospect"
                        variant="standard"
                      />
                    )}
                  />
                ) : (
                  <TextField
                    disabled={true}
                    id="outlined-multiline-static"
                    fullWidth
                    name="details"
                    error={errors[1]?.details}
                    value={
                      activityInfo?.prospect?.name +
                      " " +
                      activityInfo?.prospect?.lastName
                    }
                    sx={{ marginBottom: "1rem" }}
                  />
                )}

                <FaceIcon
                  sx={
                    edit
                      ? {
                          cursor: "pointer",
                          display: "flex",
                          marginLeft: "1rem",
                        }
                      : {
                          cursor: "pointer",
                          display: "flex",
                          marginLeft: "1rem",
                          marginBottom: "1.5rem",
                        }
                  }
                  onClick={() =>
                    navigate(`/prospect-details/${activityInfo?.prospect?._id}`)
                  }
                ></FaceIcon>
              </FormControl>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "3.7rem",
                  marginBottom: "2.2rem",
                }}
              >
                {!edit ? (
                  <Button
                    onClick={() => {
                      setEdit(false);
                      onClose();
                    }}
                  >
                    CLOSE
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="contained"
                      type="submit"
                      //   disabled={isLoading ? true : false}
                    >
                      EDIT
                    </Button>
                    <Button
                      onClick={() => {
                        onClose();
                      }}
                    >
                      CANCEL
                    </Button>
                  </>
                )}
              </div>
            </AlertEditForm>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
