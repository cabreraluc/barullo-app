import axios from "axios";
import env from "../../env/env";
import { useState } from "react";
import useNotistack from "../../components/Notistack/useNotistack";
import { useNavigate } from "react-router-dom";
import fetchFromApi from "../../utils/fetchFromapi";
import useAuth from "../Login/useAuth";

export default function useClients() {
  const navigate = useNavigate();
  const { showNotification } = useNotistack();
  const [allActivities, setAllActivities] = useState([]);
  const [activity, setActivity] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("undefined");
  const [activitiesOfDay, setActivitiesOfDay] = useState([]);
  const user = useAuth();
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

  const addActivity = async (data, setErrors) => {
    setIsLoading(true);
    try {
      const response = await fetchFromApi(
        `POST`,
        `calendar/register-activity`,
        data
      );
      if (response) {
        getActivities();
        showNotification(response[1]);
        getActivitiesOfDay(data.start);
      }
    } catch (error) {
      if (error.response.data.length) {
        setErrors(error.response.data);
      } else {
        showNotification(error.response.data.error, "error");
      }
      setIsLoading(false);
    }
  };

  const getActivities = async (clientId, prospectId) => {
    setIsLoading(true);
    try {
      const response = await fetchFromApi(
        `GET`,
        `calendar/get-all/${clientId}?prospect=${prospectId}`
      );

      setAllActivities(response);
    } catch (error) {}
    setIsLoading(false);
  };

  const getActivitiesOfDay = async (date, clientId, prospectId) => {
    setIsLoading(true);
    try {
      const response = await fetchFromApi(
        `GET`,
        `calendar/event-day?date=${date}&client=${clientId}&prospect=${prospectId}`
      );

      setActivitiesOfDay(response);
      setIsLoading(false);
    } catch (error) {}
  };

  const getActivityById = async (id) => {
    try {
      const response = await fetchFromApi(`GET`, `/calendar/${id}`);

      if (response) {
        setActivity(response);
      }
    } catch (error) {
      showNotification(error, "error");
    }
  };

  const archiveActivity = async (id, day) => {
    try {
      const response = await fetchFromApi(
        `POST`,
        `calendar/archive-activity/${id}`
      );
      if (response) {
        showNotification(response[0]);
        getActivities();
        getActivitiesOfDay(day);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editActivity = async (data, id, setErrors) => {
    setIsLoading(true);
    try {
      const response = await fetchFromApi(
        `PUT`,
        `calendar/edit-activity/${id}`,
        data
      );
      if (response) {
        showNotification(response[1]);
        getActivities();
        getActivitiesOfDay(data.start);
      }
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
    getActivitiesOfDay,
    setActivitiesOfDay,
    activitiesOfDay,
    addActivity,
    getActivities,
    allActivities,
    setAllActivities,
    editActivity,
    archiveActivity,
    getActivityById,
    activity,
    isLoading,
    newActivity,
    setNewActivity,
  };
}
