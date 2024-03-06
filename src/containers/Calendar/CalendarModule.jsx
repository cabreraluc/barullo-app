import React, { useEffect, useState } from "react";
import "./calendar.css";
import {
  CalendarModuleContainer,
  CalendarModuleSubContainer,
  ButtonBar,
  PanelRight,
  Title,
  AlertAddTitleContainer,
  AddEventButtonContainer,
  FilterButtonsContainer,
  HeaderPanelRight,
  MenuTitle,
  FiltersButtons,
  SideBarBorder,
} from "./calendarStyles";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useCalendar from "./useCalendar";
import AlertActivityInfo from "./AlertActivityInfo";
import AlertAddActivity from "./AlertAddActivity";
import Calendar from "./Calendar";
import ActivityDailyTable from "../../components/Calendar/ActivityDailyTable";
import moment from "moment";
import Loader from "../../componentsCss/Loader/Loader";
import { calendarValidations } from "./calendarValidations";
import useNotistack from "../../components/Notistack/useNotistack";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import useClients from "../Clients/useClients";
import AlertDialog from "../../components/Dialog/AlertDialog";
import useProspects from "../Prospects/useProspects";
import useUsers from "../Users/useUsers";
import useAuth from "../Login/useAuth";

// let eventGuid = 0;
// let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

// function createEventId() {
//   return String(eventGuid++);
// }

const CalendarModule = () => {
  const {
    addActivity,
    allActivities,
    getActivities,
    editActivity,
    activitiesOfDay,
    getActivitiesOfDay,
    archiveActivity,
    isLoading,
    newActivity,
    setNewActivity,
  } = useCalendar();
  const { getClients, allClients } = useClients();
  const { getProspects, allProspects } = useProspects();
  const { getUserById, user } = useUsers();
  const userLocalStorage = useAuth();
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [selectedDates, setSelectedDates] = useState([]);
  const [idOfActivity, setIdOfActivity] = useState("");

  const [clientSelected, setClientSelected] = useState({
    client: undefined,
  });
  const [prospectSelected, setProspectSelected] = useState({
    prospect: undefined,
  });
  const [daySelected, setDaySelected] = useState({
    start: undefined,
  });

  const [errorsAdd, setErrorsAdd] = useState([]);
  const [isInDayGrid, setIsInDayGrid] = useState(false);
  const [isInWeekGrid, setIsInWeekGrid] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [archiveModalOpen, setArchiveModalOpen] = useState(false);
  const [addActivityQuestion, setAddActivityQuestion] = useState(false);
  const [day, setDay] = useState();
  const values = [{ name: "Add Client", path: "/add-client" }];
  const navigate = useNavigate();
  const { showNotification } = useNotistack();

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible);
  }

  let selectedDatesEnter = null;

  function handleDateSelect(selectInfo) {
    let dates = [...selectedDates];
    let dateStr = selectInfo.startStr;

    // Si la fecha ya está seleccionada, la removemos de la lista
    if (dates.includes(dateStr)) {
      dates = dates.filter((date) => date !== dateStr);
    } else {
      // Si no está seleccionada, la agregamos a la lista
      dates.push(dateStr);
    }
    if (!isInDayGrid) {
      setDaySelected({ start: dateStr });
    }

    if (isInDayGrid) {
      setNewActivity({
        ...newActivity,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }

    if (isInWeekGrid) {
      setNewActivity({
        ...newActivity,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }

    selectedDatesEnter = {
      start: selectInfo.startStr,
      end: selectInfo.endStr,
    };

    setSelectedDates(dates);
    formatDateToDayState(selectInfo.start);
    let calendarApi = selectInfo.view.calendar;

    // clear date selection
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Shift" && newActivity.start.length) {
        setOpenAdd(true);
        event.stopPropagation();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [newActivity]);

  useEffect(() => {
    if (addActivityQuestion) {
      setOpenAdd(true);
    }
  }, [addActivityQuestion]);

  function handleEventClick(clickInfo) {
    setOpen(true);
    setIdOfActivity(clickInfo.event._def.extendedProps._id);
  }

  function handleEvents(events) {
    // console.log(events);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = calendarValidations(newActivity);
    if (isValid.valid) {
      addActivity(newActivity, setErrorsAdd);
      setOpenAdd(false);

      setNewActivity({
        title: "",
        prospect: "",
        client: "",
        details: "",
        start: "",
        end: "",
        allDay: "",
        id: "",
      });
    } else {
      setErrorsAdd(isValid);
    }
  };

  const handleSetErrors = (errors) => {
    errors[0]?.forEach((error) => {
      showNotification(error, "error");
    });
  };

  useEffect(() => {
    handleSetErrors(errorsAdd);
  }, [errorsAdd]);

  const handleEventChange = (e) => {
    const id = e?.event?._def?.extendedProps?._id;

    const data = {
      context: "editTime",
      allDay: e?.event?._def?.allDay,
      start: e?.event?._instance?.range?.start,
      end: e?.event?._instance?.range?.end,
    };
    formatDateToDayState(data.start);
    editActivity(data, id);
  };

  useEffect(() => {
    getClients();
    getActivities();
    getActivitiesOfDay(new Date(), undefined); // YYYY-MM-DD of today);
    getProspects();
    getUserById(userLocalStorage.id);
  }, []);

  const formatDateToDayState = (date) => {
    let formattedDate = date.toISOString().slice(0, 10);
    setDay(formattedDate);
  };

  const handleDateMessage = (date) => {
    const a = moment(date).format("h:mm a");
    return a;
  };

  useEffect(() => {
    getActivities(clientSelected.client?._id, prospectSelected.prospect?._id);
    getActivitiesOfDay(
      daySelected.start,
      clientSelected.client?._id,
      prospectSelected.prospect?._id
    );
  }, [clientSelected, daySelected, prospectSelected]);

  const handleArchiveActivity = (id) => {
    archiveActivity(id, daySelected.start);

    setArchiveModalOpen(false);
  };

  console.log(allActivities);

  return (
    <CalendarModuleContainer>
      <CalendarModuleSubContainer>
        <Calendar
          setDaySelected={setDaySelected}
          clientSelected={clientSelected}
          allActivities={allActivities}
          handleWeekendsToggle={handleWeekendsToggle}
          handleDateSelect={handleDateSelect}
          handleEventClick={handleEventClick}
          handleEvents={handleEvents}
          handleEventChange={handleEventChange}
          formatDateToDayState={formatDateToDayState}
          handleDateMessage={handleDateMessage}
          isInDayGrid={isInDayGrid}
          setIsInDayGrid={setIsInDayGrid}
          isInWeekGrid={isInWeekGrid}
          setIsInWeekGrid={setIsInWeekGrid}
          selectedDates={selectedDates}
          setClientSelected={setClientSelected}
          setProspectSelected={setProspectSelected}
          newActivity={newActivity}
          setNewActivity={setNewActivity}
        ></Calendar>
      </CalendarModuleSubContainer>
      <PanelRight>
        <HeaderPanelRight>
          <AlertAddTitleContainer>
            <Title>{moment(day).format("DD/MM/YYYY dddd")}</Title>
            {/* <div style={{}}>
              {newActivity.start.length ? (
                <AddEventButtonContainer onClick={() => setOpenAdd(true)}>
                  <InsertInvitationIcon
                    sx={{ marginRight: "0.5rem" }}
                  ></InsertInvitationIcon>{" "}
                  <h4>
                    Add event at {handleDateMessage(newActivity.start)}
                    {" to "}
                    {handleDateMessage(newActivity.end)}
                  </h4>
                </AddEventButtonContainer>
              ) : (
                "Select an date to add an event"
              )}
            </div> */}
          </AlertAddTitleContainer>

          <FilterButtonsContainer>
            <FiltersButtons>
              <Autocomplete
                key={prospectSelected.prospect?._id}
                value={prospectSelected.prospect}
                onChange={(event, newValue) => {
                  setProspectSelected({ prospect: newValue });
                  if (newValue === null) {
                    getActivitiesOfDay();
                  }
                }}
                sx={{
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "white", // Cambia el color del borde inferior aquí
                  },
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                    borderBottomColor: "white", // Cambia el color del borde inferior en el hover aquí
                  },
                  width: "40%",
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
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                options={
                  user.role === "Client"
                    ? allProspects.filter((e) => {
                        return e.client === user?._id;
                      })
                    : clientSelected?.client?.name.length
                    ? allProspects.filter((e) => {
                        return e.client === clientSelected?.client._id;
                      })
                    : allProspects
                }
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
                  <li {...props}>{option.name + " " + option.lastName}</li>
                )}
                freeSolo
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select prospect"
                    variant="standard"
                    InputLabelProps={{
                      style: { color: "white" }, // Aquí puedes aplicar estilos al label
                    }}
                  />
                )}
              />

              {user.name && user?.role !== "Client" ? (
                <Autocomplete
                  key={clientSelected.client?._id}
                  value={clientSelected?.client?.bussinesName}
                  onChange={(event, newValue) => {
                    setClientSelected({ client: newValue });
                    if (newValue === null) {
                      getActivitiesOfDay(daySelected.start);
                    }
                  }}
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "white", // Cambia el color del borde inferior aquí
                    },
                    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                      borderBottomColor: "white", // Cambia el color del borde inferior en el hover aquí
                    },
                    width: "40%",
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
                  disabled={
                    prospectSelected.prospect && !clientSelected?.client
                      ? true
                      : false
                  }
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  id="free-solo-with-text-demo"
                  options={allClients}
                  getOptionLabel={(option) => {
                    if (typeof option === "string") {
                      return option;
                    }

                    if (option.inputValue) {
                      return option.inputValue;
                    }

                    return option.bussinesName;
                  }}
                  renderOption={(props, option) => (
                    <li {...props}>
                      {option.bussinesName}-
                      {option.name + " " + option.lastName}
                    </li>
                  )}
                  freeSolo
                  fullWidth
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select client"
                      variant="standard"
                      InputLabelProps={{
                        style: { color: "white" }, // Aquí puedes aplicar estilos al label
                      }}
                    />
                  )}
                />
              ) : null}
            </FiltersButtons>
          </FilterButtonsContainer>
        </HeaderPanelRight>
        <MenuTitle
          style={{
            backgroundColor: "transparent",
            justifyContent: "center",
          }}
        >
          Events of day
        </MenuTitle>
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <ActivityDailyTable
            archiveModalOpen={archiveModalOpen}
            setArchiveModalOpen={setArchiveModalOpen}
            handleArchiveActivity={handleArchiveActivity}
            isLoading={isLoading}
            onOpen={() => setOpen(true)}
            setIdOfActivity={setIdOfActivity}
            activitiesOfDay={activitiesOfDay}
            // archiveActivity={archiveActivity}
          ></ActivityDailyTable>
        )}
      </PanelRight>

      <AlertActivityInfo
        open={open}
        onClose={() => setOpen(false)}
        idOfActivity={idOfActivity}
        getActivities={getActivities}
        setOpen={setOpen}
      ></AlertActivityInfo>

      <AlertAddActivity
        newActivity={newActivity}
        setNewActivity={setNewActivity}
        open={openAdd}
        onClose={() => {
          setOpenAdd(false);
          setAddActivityQuestion(false);
        }}
        handleSubmit={handleSubmit}
        errors={errorsAdd}
      ></AlertAddActivity>
    </CalendarModuleContainer>
  );
};

export default CalendarModule;
