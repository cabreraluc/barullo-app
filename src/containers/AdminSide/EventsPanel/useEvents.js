import { useState } from "react";
import useNotistack from "../../../components/Notistack/useNotistack";
import { useNavigate } from "react-router-dom";
import fetchFromApi from "../../../utils/fetchFromapi";

export default function useEvents() {
  const navigate = useNavigate();
  const { showNotification } = useNotistack();
  const [allEvents, setAllEvents] = useState([]);
  const [event, setEvent] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const addEvent = async (data, setErrors) => {
    setIsLoading(true);
    try {
      const response = await fetchFromApi(`POST`, `users/register-user`, data);

      showNotification(response[1]);
      navigate("/home/users");
    } catch (error) {
      console.log(error);
      if (error.response.data.length) {
        setErrors(error.response.data);
      } else {
        showNotification(error.response.data.error, "error");
      }
      setIsLoading(false);
    }
  };

  const getEvents = async () => {
    try {
      setIsLoading(true);

      const response = await fetchFromApi(`GET`, `users/`);

      setAllEvents(response);
    } catch (error) {}
    setIsLoading(false);
  };

  const getEventById = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetchFromApi(`GET`, `users/${id}`);

      if (response) {
        setEvent(response);
      }
    } catch (error) {
      if (error.request.status === 500) {
        showNotification("Sesión expirada", "error");
        navigate("/login");
      } else {
        showNotification(error, "error");
      }
    }
    setIsLoading(false);
  };

  const disableEvent = async (id) => {
    try {
      const response = await fetchFromApi(`DELETE`, `users/disable-user`, id);
      getEvents();
      showNotification(response[0]);
    } catch (error) {
      showNotification(error.response.data.error, "error");
    }
  };

  const editEvent = async (data, id, setErrors) => {
    setIsLoading(true);
    try {
      const response = await fetchFromApi(`PUT`, `users/edit-user/${id}`, data);
      showNotification(response[1]);
      navigate("/home/users");
    } catch (error) {
      if (error.response.data.length) {
        setErrors(error.response.data);
      } else {
        showNotification(error.response.data.error, "error");
      }
      setIsLoading(false);
    }
  };

  return {
    addEvent,
    getEvents,
    allEvents,
    setAllEvents,
    editEvent,
    disableEvent,
    getEventById,
    event,
    isLoading,
  };
}
