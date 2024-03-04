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
  getActivitiesOfDay,
  formatDateToDayState,
  handleDateMessage,
  isInDayGrid,
  setIsInDayGrid,
}) => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const calendarRef = useRef(null);
  // ...

  function renderEventContent(eventInfo) {
    return (
      <TextCalendarEvent>
        <h4>{eventInfo.event.title}</h4>
      </TextCalendarEvent>
    );
  }

  return (
    <CalendarContainer>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next customTodayButton",
          center: "title",
          right: "customDayGridMonth,customTimeGridWeek,customTimeGridDay",
        }}
        customButtons={{
          customTodayButton: {
            text: "today",
            click: () => {
              let calendarApi = calendarRef.current.getApi();
              calendarApi.today();
              getActivitiesOfDay(new Date().toISOString().replace(/T.*$/, ""));
              formatDateToDayState(new Date());
              console.log("aaa");
            },
          },
          prev: {
            // Agrega esta función
            click: () => {
              let calendarApi = calendarRef.current.getApi();
              calendarApi.prev();
              console.log(calendarApi);
              if (isInDayGrid) {
                getActivitiesOfDay(
                  new Date(
                    calendarApi.currentData.dateProfile.activeRange.start
                  )
                );
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
              let calendarApi = calendarRef.current.getApi();
              calendarApi.next();
              // // Aquí puedes agregar tu función adicional

              if (isInDayGrid) {
                getActivitiesOfDay(
                  new Date(
                    calendarApi.currentData.dateProfile.activeRange.start
                  )
                );
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
              let calendarApi = calendarRef.current.getApi();
              calendarApi.changeView("dayGridMonth");
              // Aquí puedes agregar tu función adicional
              setIsInDayGrid(false);
            },
          },
          customTimeGridWeek: {
            // Agrega esta función
            text: "week",
            click: () => {
              let calendarApi = calendarRef.current.getApi();
              calendarApi.changeView("timeGridWeek");
              // Aquí puedes agregar tu función adicional
              setIsInDayGrid(false);
            },
          },
          customTimeGridDay: {
            // Agrega esta función
            text: "day",
            click: () => {
              let calendarApi = calendarRef.current.getApi();
              calendarApi.changeView("timeGridDay");
              // Aquí puedes agregar tu función adicional
              setIsInDayGrid(true);
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
          // Agrega esta función
          let calendarApi = calendarRef.current.getApi();
          calendarApi.changeView("timeGridDay", info.dateStr);
          setIsInDayGrid(true);
        }}
        eventChange={(e) => handleEventChange(e)}
        // eventRemove={(e) => console.log(e)}
        timeZone="local"
      />
    </CalendarContainer>
  );
};

export default Calendar;
