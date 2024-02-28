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
}) => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);

  // ...

  function renderEventContent(eventInfo) {
    console.log(eventInfo);

    return (
      <TextCalendarEvent>
        <h5>{eventInfo.timeText}</h5>
        <h5>{eventInfo.event.title}</h5>
      </TextCalendarEvent>
    );
  }

  return (
    <CalendarContainer>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
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
        eventChange={(e) => handleEventChange(e)}
        // eventRemove={(e) => console.log(e)}
        timeZone="local"
      />
    </CalendarContainer>
  );
};

export default Calendar;
