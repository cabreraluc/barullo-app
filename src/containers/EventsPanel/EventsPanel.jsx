import { EventsContainer, EventsList, ButtonContainer } from "./eventsStyles";
import { useNavigate } from "react-router-dom";
import EventsTable from "../../components/Events/EventsTable";
import Searcher from "../../components/Searcher/Searcher";
import useEvents from "./useEvents";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const EventsPanel = () => {
  const navigate = useNavigate();
  const { isLoading, disableEvent } = useEvents();

  const allEvents = [
    { name: "la", date: "10/04/2011" },
    { name: "la", date: "10/04/2011" },
    { name: "la", date: "10/04/2011" },
    { name: "la", date: "10/04/2011" },
    { name: "la", date: "10/04/2011" },
    { name: "la", date: "10/04/2011" },
    { name: "la", date: "10/04/2011" },
    { name: "la", date: "10/04/2011" },
    { name: "la", date: "10/04/2011" },
    { name: "la", date: "10/04/2011" },
    { name: "la", date: "10/04/2011" },
    { name: "la", date: "10/04/2011" },
    { name: "la", date: "10/04/2011" },
    { name: "la", date: "10/04/2011" },
    { name: "la", date: "10/04/2011" },
  ];

  return (
    <EventsContainer>
      <ButtonContainer>
        <AddCircleIcon
          onClick={() => navigate("/add-event")}
          fontSize="large"
        ></AddCircleIcon>
      </ButtonContainer>
      <Searcher />
      <EventsList>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <EventsTable
            allEvents={allEvents}
            disableEvent={disableEvent}
            isLoading={isLoading}
          />
        )}
      </EventsList>
    </EventsContainer>
  );
};

export default EventsPanel;
