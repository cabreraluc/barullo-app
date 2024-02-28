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
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("undefined");
  const user = useAuth();

  const addActivity = async (data) => {
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
      }
    } catch (error) {
      if (error.response.data.length) {
        // setErrors(error.response.data);
      } else {
        showNotification(error.response.data.error, "error");
      }
      setIsLoading(false);
    }
  };

  const getActivities = async () => {
    try {
      setIsLoading(true);

      const response = await fetchFromApi(`GET`, `calendar/`);

      console.log(response);

      setAllActivities(response);
    } catch (error) {}
    setIsLoading(false);
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

  const archiveActivity = async (id) => {
    try {
      const response = await fetchFromApi(
        `DELETE`,
        `calendar/archive-activity`,
        id
      );
      getActivities();

      showNotification(response[0]);
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
    addActivity,
    getActivities,
    allActivities,
    setAllActivities,
    editActivity,
    archiveActivity,
    getActivityById,
    activity,
    isLoading,
  };
}
