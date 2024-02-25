import axios from "axios";
import env from "../../env/env";
import { useState } from "react";
import useNotistack from "../../components/Notistack/useNotistack";
import { useNavigate } from "react-router-dom";
import fetchFromApi from "../../utils/fetchFromapi";

export default function useProspects() {
  const navigate = useNavigate();
  const { showNotification } = useNotistack();
  const [allProspects, setAllProspects] = useState([]);
  const [prospect, setProspect] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const addProspect = async (data, setErrors) => {
    setIsLoading(true);
    try {
      const response = await fetchFromApi(
        `POST`,
        `prospects/register-prospect`,
        data
      );

      showNotification(response[1]);
      navigate("/home/prospects");
    } catch (error) {
      if (error.response.data.length) {
        setErrors(error.response.data);
      } else {
        showNotification(error.response.data.error, "error");
      }
      setIsLoading(false);
    }
  };

  const getProspects = async () => {
    try {
      setIsLoading(true);

      const response = await fetchFromApi(`GET`, `prospects/`);

      setAllProspects(response);
    } catch (error) {}
    setIsLoading(false);
  };

  const getProspectById = async (id) => {
    try {
      const response = await fetchFromApi(`GET`, `/prospects/${id}`);

      if (response) {
        setProspect(response);
        console.log(prospect);
      }
    } catch (error) {
      showNotification(error, "error");
    }
  };

  const disableProspect = async (id) => {
    try {
      const response = await fetchFromApi(
        `DELETE`,
        `prospects/disable-prospect`,
        id
      );

      getProspects();
      showNotification(response[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const editProspect = async (data, id, setErrors) => {
    setIsLoading(true);
    try {
      const response = await fetchFromApi(
        `PUT`,
        `prospects/edit-prospect/${id}`,
        data
      );
      showNotification(response[1]);
      navigate("/home/prospects");
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
    addProspect,
    getProspects,
    allProspects,
    setAllProspects,
    editProspect,
    disableProspect,
    getProspectById,
    prospect,
    isLoading,
  };
}
