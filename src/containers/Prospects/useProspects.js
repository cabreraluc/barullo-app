import axios from "axios";
import env from "../../env/env";
import { useState } from "react";
import useNotistack from "../../components/Notistack/useNotistack";
import { useNavigate } from "react-router-dom";

export default function useProspects() {
  const navigate = useNavigate();
  const { showNotification } = useNotistack();
  const [allProspects, setAllProspects] = useState([]);
  const [prospect, setProspect] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const addProspect = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${env.API_URL}prospects/register-prospect`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      showNotification(response.data[1]);
      navigate("/home/prospects");
    } catch (error) {
      showNotification(error.response.data, "error");
    }
  };

  const getProspects = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${env.API_URL}prospects/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);

      if (response.data.length) {
        setAllProspects(response.data);
      }
    } catch (error) {}
    setIsLoading(false);
  };

  const getProspectById = async (id) => {
    try {
      const response = await axios.get(`${env.API_URL}/prospects/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data) {
        console.log(response.data);
        setProspect(response.data);
      }
    } catch (error) {
      showNotification(error, "error");
    }
  };

  const disableProspect = async (id) => {
    try {
      const response = await axios.post(
        `${env.API_URL}prospects/disable-prospect/${id}`,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      getProspects();
    } catch (error) {
      console.log(error);
    }
  };

  const editProspect = async (data, id, setErrors) => {
    setIsLoading(true);
    try {
      const response = await axios.put(
        `${env.API_URL}prospects/edit-prospect/${id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      showNotification(response.data[1]);
      navigate("/home/prospects");
    } catch (error) {
      showNotification(error.response.data, "error");
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
