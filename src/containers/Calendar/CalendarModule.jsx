import React, { useEffect, useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./calendar.css";
import {
  CalendarModuleContainer,
  CalendarModuleSubContainer,
  CalendarContainer,
  ButtonBar,
  PanelRight,
  TextCalendarEvent,
} from "./calendarStyles";
import { useNavigate } from "react-router-dom";
import useCalendar from "./useCalendar";
import AlertActivityInfo from "./AlertActivityInfo";
import AlertAddActivity from "./AlertAddActivity";
import Calendar from "./Calendar";

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
    setAllActivities,
  } = useCalendar();
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [idOfActivity, setIdOfActivity] = useState("");
  const [newActivity, setNewActivity] = useState({
    title: "",
    prospect: "",
    details: "",
    start: "",
    end: "",
    allDay: "",
    id: "",
  });
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const values = [{ name: "Add Client", path: "/add-client" }];
  const navigate = useNavigate();

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible);
  }

  function handleDateSelect(selectInfo) {
    setOpenAdd(true);
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    setNewActivity({
      ...newActivity,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    });
  }

  function handleEventClick(clickInfo) {
    setOpen(true);
    setIdOfActivity(clickInfo.event._def.extendedProps._id);
  }

  function handleEvents(events) {
    console.log(events);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addActivity(newActivity);
    setOpenAdd(false);
  };

  const handleEventChange = (e) => {
    console.log(e);
    const id = e?.event?._def?.extendedProps?._id;

    const data = {
      context: "editTime",
      allDay: e?.event?._def?.allDay,
      start: e?.event?._instance?.range?.start,
      end: e?.event?._instance?.range?.end,
    };
    editActivity(data, id);
    console.log(id, "id");
    console.log(data.start, data.end, "data");
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <CalendarModuleContainer>
      <AlertActivityInfo
        open={open}
        onClose={() => setOpen(false)}
        idOfActivity={idOfActivity}
        getActivities={getActivities}
      ></AlertActivityInfo>
      <AlertAddActivity
        newActivity={newActivity}
        setNewActivity={setNewActivity}
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        handleSubmit={handleSubmit}
      ></AlertAddActivity>
      <CalendarModuleSubContainer>
        <Calendar
          allActivities={allActivities}
          handleWeekendsToggle={handleWeekendsToggle}
          handleDateSelect={handleDateSelect}
          handleEventClick={handleEventClick}
          handleEvents={handleEvents}
          handleEventChange={handleEventChange}
        ></Calendar>
      </CalendarModuleSubContainer>
      <PanelRight>
        {values.map((e) => (
          <ButtonBar onClick={e.path ? () => navigate(e.path) : null}>
            {e.name}
          </ButtonBar>
        ))}
      </PanelRight>
    </CalendarModuleContainer>
  );
};

export default CalendarModule;
