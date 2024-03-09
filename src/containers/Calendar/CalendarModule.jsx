import React, { useEffect, useState } from "react";
import "./calendar.css";
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
import Searcher from "../../components/Searcher/Searcher";
import Switch from "../../components/Switch/Switch";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
  SearcherAndSwitchContainer,
  SwitchesContainer,
} from "./calendarStyles";
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
    isLoadingDayAct,
    setIsLoadingDayAct,
    setAllActivities,
    search,
    setSearch,
  } = useCalendar();
  const { getClients, allClients } = useClients();
  const { getProspects, allProspects } = useProspects();
  const { getUserById, user } = useUsers();
  const userLocalStorage = useAuth();
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [selectedDates, setSelectedDates] = useState([]);
  const [idOfActivity, setIdOfActivity] = useState("");
  const [switcher, setSwitcher] = useState(false);
  const [activityStatus, setActivityStatus] = useState("ACTIVE");
  const [pastActs, setPastActs] = useState(false);
  const [errorsAdd, setErrorsAdd] = useState([]);
  const [isInDayGrid, setIsInDayGrid] = useState(false);
  const [isInWeekGrid, setIsInWeekGrid] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [addActivityQuestion, setAddActivityQuestion] = useState(false);
  const [day, setDay] = useState();
  const [clientSelected, setClientSelected] = useState({
    client: undefined,
  });
  const [prospectSelected, setProspectSelected] = useState({
    prospect: undefined,
  });
  const [daySelected, setDaySelected] = useState({
    start: undefined,
  });

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
      setSwitcher(false);
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
      if (
        event.key === "Shift" &&
        newActivity.start.length &&
        user.role !== "Client"
      ) {
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
    if (addActivityQuestion && user.role !== "Client") {
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

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayUTC = new Date(
    Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
  ).toISOString();

  useEffect(() => {
    getClients();
    getActivities(undefined, undefined, undefined, activityStatus, false);
    getActivitiesOfDay(
      todayUTC,
      undefined,
      undefined,
      undefined,
      false,
      activityStatus,
      false
    ); // YYYY-MM-DD of today);
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
    getActivities(
      clientSelected.client?._id,
      prospectSelected.prospect?._id,
      search,
      activityStatus,
      pastActs
    );
    getActivitiesOfDay(
      daySelected.start,
      clientSelected.client?._id,
      prospectSelected.prospect?._id,
      search,
      switcher,
      activityStatus,
      pastActs
    );
  }, [
    clientSelected,
    daySelected,
    prospectSelected,
    switcher,
    activityStatus,
    pastActs,
  ]);

  useEffect(() => {
    console.log(isLoadingDayAct);
  }, [isLoadingDayAct]);

  const handleArchiveActivity = (id) => {
    archiveActivity(id, daySelected.start);
  };

  return (
    <CalendarModuleContainer>
      <CalendarModuleSubContainer>
        <Calendar
          user={user}
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
          setSearch={setSearch}
          setSwitcher={setSwitcher}
          setActivityStatus={setActivityStatus}
          setPastActs={setPastActs}
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
        </HeaderPanelRight>

        <SearcherAndSwitchContainer>
          <Searcher
            list={allActivities}
            setList={setAllActivities}
            context={"calendar"}
            searchToGet={search}
            setSearchToGet={setSearch}
            resetFunction={() => {
              getActivities(
                clientSelected.client?._id,
                prospectSelected.prospect?._id,
                "undefined",

                activityStatus,
                pastActs
              );
              getActivitiesOfDay(
                daySelected.start,
                clientSelected.client?._id,
                prospectSelected.prospect?._id,
                "undefined",
                switcher,
                activityStatus,
                pastActs
              );
            }}
            getFunction={() => {
              getActivities(
                clientSelected.client?._id,
                prospectSelected.prospect?._id,
                search,
                activityStatus,
                pastActs
              );
              getActivitiesOfDay(
                daySelected.start,
                clientSelected.client?._id,
                prospectSelected.prospect?._id,
                search,
                switcher,
                activityStatus,
                pastActs
              );
            }}
          />
        </SearcherAndSwitchContainer>

        <FilterButtonsContainer>
          <FiltersButtons>
            <Autocomplete
              key={prospectSelected.prospect?._id}
              value={prospectSelected.prospect}
              onChange={(event, newValue) => {
                setProspectSelected({
                  prospect: newValue !== null ? newValue : undefined,
                });
              }}
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "black", // Cambia el color del borde inferior aquí
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "black", // Cambia el color del borde inferior en el hover aquí
                },
                width: "89%",
                color: "black",
                transition: "0.3s",
                ".MuiAutocomplete-clearIndicator": {
                  color: "black",
                },

                "& .MuiAutocomplete-noOptions": {
                  color: "black",
                },
                "& .MuiAutocomplete-input": {
                  color: "black",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                },
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              id="free-solo-with-text-demo"
              options={
                user.role === "Closer" || user.role === "Setter"
                  ? allProspects.filter((e) => {
                      if (clientSelected?.client?.name?.length) {
                        return (
                          e.user === user?._id &&
                          e.client === clientSelected?.client?._id
                        );
                      } else {
                        return e.user === user?._id;
                      }
                    })
                  : user.role === "Client"
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
                    style: { color: "gray" }, // Aquí puedes aplicar estilos al label
                  }}
                />
              )}
            />

            {user.name && user?.role !== "Client" ? (
              <Autocomplete
                key={clientSelected.client?._id}
                value={clientSelected?.client?.bussinesName}
                onChange={(event, newValue) => {
                  setClientSelected({
                    client: newValue !== null ? newValue : undefined,
                  });
                }}
                sx={{
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "black", // Cambia el color del borde inferior aquí
                  },
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                    borderBottomColor: "black", // Cambia el color del borde inferior en el hover aquí
                  },
                  width: "89%",
                  color: "black",
                  ".MuiAutocomplete-clearIndicator": {
                    color: "black",
                  },

                  "& .MuiAutocomplete-noOptions": {
                    color: "black",
                  },
                  "& .MuiAutocomplete-input": {
                    color: "black",
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "30px",
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
                    {option.bussinesName}-{option.name + " " + option.lastName}
                  </li>
                )}
                freeSolo
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={"Select client"}
                    variant="standard"
                    InputLabelProps={{
                      style: { color: "gray" }, // Aquí puedes aplicar estilos al label
                    }}
                  />
                )}
              />
            ) : null}
            <FormControl
              sx={{
                width: "90%",
              }}
            >
              <InputLabel sx={{ marginLeft: "-0.6rem" }}>Status</InputLabel>
              <Select
                MenuProps={{ disableScrollLock: true }}
                onChange={(e) => setActivityStatus(e.target.value)}
                name="role"
                variant="standard"
              >
                {["ACTIVE", "ARCHIVED", "FINALIZED"].map((status) => {
                  return <MenuItem value={status}>{status}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </FiltersButtons>
          <SwitchesContainer>
            <Switch
              leftText={"Past events"}
              rightText={"Past events"}
              state={pastActs}
              setState={setPastActs}
            ></Switch>
            <Switch
              leftText={"Event list"}
              rightText={"All"}
              state={switcher}
              setState={setSwitcher}
            ></Switch>
          </SwitchesContainer>
        </FilterButtonsContainer>
        <SideBarBorder style={{ width: "100%" }}></SideBarBorder>
        <MenuTitle
          style={{
            backgroundColor: "transparent",
            justifyContent: "center",
          }}
        >
          {search === "undefined" ? "Events" : `Results of "${search}"`}
        </MenuTitle>

        <ActivityDailyTable
          setSwitcher={setSwitcher}
          switcher={switcher}
          handleArchiveActivity={handleArchiveActivity}
          isLoading={isLoading}
          onOpen={() => setOpen(true)}
          setIdOfActivity={setIdOfActivity}
          activitiesOfDay={activitiesOfDay}
          user={user}
          search={search}
          isLoadingDayAct={isLoadingDayAct}
          // archivedActsState={archivedActsState}
          // setArchivedActsState={setArchivedActsState}
          // setPastActs={setPastActs}
          // pastActs={pastActs}
        ></ActivityDailyTable>
      </PanelRight>

      <AlertActivityInfo
        open={open}
        onClose={() => setOpen(false)}
        idOfActivity={idOfActivity}
        getActivities={getActivities}
        setOpen={setOpen}
        user={user}
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
