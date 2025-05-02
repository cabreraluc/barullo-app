import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  EventsActionsContainer,
  PastPageDataContainerAndTitle,
  Title,
  FormContainertEventsAction,
  LeftSectionContainer,
  RightSectionContainer,
  FormSectionsContainer,
  TitleContainer,
  PastPageContainer,
  ActionButtonContainer,
  ButtonsContainer,
} from "./eventsStyles";
import { BreadcumsContainer } from "../../../components/Global/GlobalStyles";
import BreadcrumbsMui from "../../../components/Breadcrumbs/Breadcrumbs";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useEvents from "./useEvents";
import { eventValidations } from "./eventValidations";
import useNotistack from "../../../components/Notistack/useNotistack";
import Button from "@mui/material/Button";

const AddEvent = () => {
  const { addEvent, isLoading } = useEvents();
  const [eventInfo, setEventInfo] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    price: "",
    prePrice: "",
  });
  const { showNotification } = useNotistack();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setEventInfo({ ...eventInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = eventValidations(eventInfo, "addUser");

    if (response.valid) {
      addEvent(eventInfo, setErrors);
    } else {
      setErrors(response);
    }
  };
  const [errors, setErrors] = useState({});
  const handleSetErrors = (errors) => {
    errors[0]?.forEach((error) => {
      showNotification(error, "error");
    });
  };

  useEffect(() => {
    handleSetErrors(errors);
  }, [errors]);

  const navigate = useNavigate();
  return (
    <EventsActionsContainer>
      <FormContainertEventsAction onSubmit={(e) => handleSubmit(e)} noValidate>
        <PastPageDataContainerAndTitle>
          <PastPageContainer>
            <BreadcumsContainer>
              <BreadcrumbsMui
                title="Add event"
                prev="Admin panel"
                path={"/admin-panel"}
              ></BreadcrumbsMui>
            </BreadcumsContainer>
          </PastPageContainer>
          <TitleContainer>
            <Title>Add event</Title>
          </TitleContainer>
        </PastPageDataContainerAndTitle>
        <FormSectionsContainer>
          <LeftSectionContainer>
            <TextField
              autoComplete="title"
              required
              id="title"
              label="Titulo"
              autoFocus
              name="name"
              variant="standard"
              fullWidth
              onChange={handleChange}
              error={errors[1]?.title}
              value={eventInfo.title}
            />
            <TextField
              variant="standard"
              required
              fullWidth
              id="date"
              label="Hora y día"
              autoComplete="date"
              name="date"
              onChange={handleChange}
              error={errors[1]?.date}
              value={eventInfo.date}
            />

            <TextField
              required
              fullWidth
              label="Ubicación"
              variant="standard"
              id="location"
              autoComplete="location"
              name="location"
              onChange={handleChange}
              error={errors[1]?.location}
              value={eventInfo.location}
            />
          </LeftSectionContainer>
          <RightSectionContainer>
            <TextField
              required
              fullWidth
              label="Descripción"
              variant="standard"
              id="description"
              autoComplete="description"
              name="description"
              onChange={handleChange}
              error={errors[1]?.description}
              value={eventInfo.description}
            />
            <TextField
              autoComplete="price"
              required
              id="price"
              label="Precio"
              autoFocus
              name="price"
              variant="standard"
              fullWidth
              onChange={handleChange}
              error={errors[1]?.price}
              value={eventInfo.price}
            />
            <TextField
              required
              fullWidth
              label="Precio anticipadas"
              variant="standard"
              id="prePrice"
              autoComplete="prePrice"
              name="prePrice"
              onChange={handleChange}
              error={errors[1]?.prePrice}
              value={eventInfo.prePrice}
            />
          </RightSectionContainer>
        </FormSectionsContainer>
        <ActionButtonContainer>
          <ButtonsContainer>
            <Button
              variant="outlined"
              type="submit"
              disabled={isLoading ? true : false}
            >
              Crear
            </Button>
            <Button variant="outlined" onClick={() => navigate("/admin-panel")}>
              Cancelar
            </Button>
          </ButtonsContainer>
        </ActionButtonContainer>
      </FormContainertEventsAction>
    </EventsActionsContainer>
  );
};

export default AddEvent;
