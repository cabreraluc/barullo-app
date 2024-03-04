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
} from "./calendarStyles";
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
    setActivitiesOfDay,
    getActivitiesOfDay,
    isLoading,
  } = useCalendar();
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [selectedDates, setSelectedDates] = useState([]);
  const [idOfActivity, setIdOfActivity] = useState("");
  const [newActivity, setNewActivity] = useState({
    title: "",
    prospect: "",
    details: "",
    client: "",
    start: "",
    end: "",
    allDay: "",
    id: "",
  });

  const [errorsAdd, setErrorsAdd] = useState([]);
  const [isInDayGrid, setIsInDayGrid] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [addActivityQuestion, setAddActivityQuestion] = useState(false);
  const [day, setDay] = useState();
  const values = [{ name: "Add Client", path: "/add-client" }];
  const navigate = useNavigate();
  const { showNotification } = useNotistack();

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible);
  }

  let selectedDatesEnter = null;

  useEffect(() => {
    console.log(isInDayGrid);
  }, [isInDayGrid]);

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
      getActivitiesOfDay(selectInfo.start);
    }

    selectedDatesEnter = {
      start: selectInfo.startStr,
      end: selectInfo.endStr,
    };

    setSelectedDates(dates);
    formatDateToDayState(selectInfo.start);
    let calendarApi = selectInfo.view.calendar;

    // clear date selection

    setNewActivity({
      ...newActivity,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    });
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
      console.log(isValid);
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
    console.log(e);
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
    getActivities();
    getActivitiesOfDay(new Date().toISOString().replace(/T.*$/, "")); // YYYY-MM-DD of today);
  }, []);

  const formatDateToDayState = (date) => {
    let formattedDate = date.toISOString().slice(0, 10);
    setDay(formattedDate);
  };

  const handleDateMessage = (date) => {
    // let dateToFormat = new Date(date);

    // let options = {
    //   weekday: "long",
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    //   hour: "2-digit",
    //   minute: "2-digit",
    // };

    // let message = dateToFormat.toLocaleString("en-US", options);
    // return message;
    const a = moment(date).format("D/M/YY, h:mm a");
    return a;
  };

  return (
    <CalendarModuleContainer>
      <CalendarModuleSubContainer>
        <Calendar
          getActivitiesOfDay={getActivitiesOfDay}
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
          selectedDates={selectedDates}
        ></Calendar>
      </CalendarModuleSubContainer>
      <PanelRight>
        <AlertAddTitleContainer>
          <Title>{moment(day).format("DD/MM/YYYY dddd")}</Title>
          <div
            style={{
              height: "5rem",
            }}
          >
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
            ) : null}
          </div>
        </AlertAddTitleContainer>
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <ActivityDailyTable
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
