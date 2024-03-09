import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarContainer, TextCalendarEvent } from "./calendarStyles";
import { useEffect, useState, useRef } from "react";

const Calendar = ({
  allActivities,
  handleWeekendsToggle,
  handleDateSelect,
  handleEventClick,
  handleEvents,
  handleEventChange,
  setDaySelected,
  formatDateToDayState,
  handleDateMessage,
  isInDayGrid,
  setIsInDayGrid,
  clientSelected,
  setClientSelected,
  setProspectSelected,
  newActivity,
  setNewActivity,
  isInWeekGrid,
  setIsInWeekGrid,
  setSearch,
  user,
  setSwitcher,
  setActivityStatus,
  setPastActs,
}) => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const calendarRef = useRef(null);
  const [lastClickTime, setLastClickTime] = useState(null);
  // ...

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState("");

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX - 250, y: event.clientY - 60 });
  };

  const handleSelection = () => {
    setMessage("Mensaje que aparece después de seleccionar");
  };

  function renderEventContent(eventInfo) {
    return (
      <>
        <TextCalendarEvent>
          <h4>{eventInfo.event.title}</h4>
        </TextCalendarEvent>
      </>
    );
  }

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (event.target.closest(".fc")) {
        setCursorPosition({ x: event.pageX - 280, y: event.pageY - 90 });
      } else {
        setCursorPosition(null);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <CalendarContainer
      onMouseMove={handleMouseMove}
      style={{ position: "relative", width: "100%" }}
    >
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next customTodayButton reset",
          center: "title",
          right: "customDayGridMonth,customTimeGridWeek,customTimeGridDay",
        }}
        customButtons={{
          reset: {
            text: "reset",
            click: () => {
              let calendarApi = calendarRef.current.getApi();
              calendarApi.today();
              calendarApi.changeView("dayGridMonth");
              setDaySelected({
                start: new Date().toISOString().replace(/T.*$/, ""),
              });
              formatDateToDayState(new Date());
              setClientSelected({ client: undefined });
              setProspectSelected({ prospect: undefined });
              setSearch("undefined");
              setIsInDayGrid(false);
              setIsInWeekGrid(false);
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
              setSwitcher(false);
              setActivityStatus("ACTIVE");
              setPastActs(false);
            },
          },
          customTodayButton: {
            text: "today",
            click: () => {
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
              let calendarApi = calendarRef.current.getApi();
              calendarApi.today();
              setDaySelected({
                start: new Date().toISOString().replace(/T.*$/, ""),
              });
              formatDateToDayState(new Date());
            },
          },
          prev: {
            // Agrega esta función
            click: () => {
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
              let calendarApi = calendarRef.current.getApi();
              calendarApi.prev();
              console.log(calendarApi);
              if (isInDayGrid) {
                setDaySelected({
                  start: new Date(
                    calendarApi.currentData.dateProfile.activeRange.start
                  ),
                });
                formatDateToDayState(
                  calendarApi.currentData.dateProfile.activeRange.start
                );
              }
              // Aquí puedes agregar tu función adicional
            },
          },
          next: {
            // Agrega esta función
            click: () => {
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
              let calendarApi = calendarRef.current.getApi();
              calendarApi.next();
              // // Aquí puedes agregar tu función adicional

              if (isInDayGrid) {
                setDaySelected({
                  start: new Date(
                    calendarApi.currentData.dateProfile.activeRange.start
                  ),
                });
                formatDateToDayState(
                  calendarApi.currentData.dateProfile.activeRange.start
                );
              }
            },
          },
          customDayGridMonth: {
            // Agrega esta función
            text: "month",
            click: () => {
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
              let calendarApi = calendarRef.current.getApi();
              calendarApi.changeView("dayGridMonth");
              // Aquí puedes agregar tu función adicional
              setIsInDayGrid(false);
              setIsInWeekGrid(false);
            },
          },
          customTimeGridWeek: {
            // Agrega esta función
            text: "week",
            click: () => {
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
              let calendarApi = calendarRef.current.getApi();
              calendarApi.changeView("timeGridWeek");
              // Aquí puedes agregar tu función adicional
              setIsInDayGrid(false);
              setIsInWeekGrid(true);
            },
          },
          customTimeGridDay: {
            // Agrega esta función
            text: "day",
            click: () => {
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
              let calendarApi = calendarRef.current.getApi();
              calendarApi.changeView("timeGridDay");
              // Aquí puedes agregar tu función adicional
              setIsInDayGrid(true);
              setIsInWeekGrid(false);
            },
          },
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={false}
        dayMaxEvents={true}
        weekends={weekendsVisible}
        events={allActivities} // alternatively, use the `events` setting to fetch from a feed
        select={handleDateSelect}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        // eventAdd={function (e) {
        //   console.log(e);
        // }}
        dateClick={function (info) {
          handleSelection();
          // Agrega esta función
          const clickTime = new Date().getTime();
          if (lastClickTime && clickTime - lastClickTime < 300) {
            // 300 ms for double click
            let calendarApi = calendarRef.current.getApi();
            calendarApi.changeView("timeGridDay", info.dateStr);
            setIsInDayGrid(true);
            setIsInWeekGrid(true);
          }
          setLastClickTime(clickTime);
          // let calendarApi = calendarRef.current.getApi();
          // calendarApi.changeView("timeGridDay", info.dateStr);
        }}
        eventChange={(e) => handleEventChange(e)}
        // eventRemove={(e) => console.log(e)}
        timeZone="local"
      />

      {newActivity.start.length &&
        cursorPosition?.x &&
        cursorPosition?.y &&
        (isInDayGrid || isInWeekGrid) &&
        user.role !== "Client" && (
          <div
            style={{
              position: "absolute",
              top: cursorPosition.y,
              left: cursorPosition.x,
              zIndex: 1000,
              backgroundColor: "rgb(7, 121, 222)",
              color: "white",
              borderRadius: "10px",
              padding: "0.5rem",
              fontSize: ".7rem",
            }}
          >
            <h4>
              {handleDateMessage(newActivity.start) +
                " to " +
                handleDateMessage(newActivity.end)}
            </h4>
          </div>
        )}
    </CalendarContainer>
  );
};

export default Calendar;
