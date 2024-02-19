import axios from "axios";
import env from "../../env/env";
import { useState } from "react";
import useNotistack from "../../components/Notistack/useNotistack";
import { useNavigate } from "react-router-dom";

export default function useClients() {
  const navigate = useNavigate();
  const { showNotification } = useNotistack();
  const [allClients, setAllClients] = useState([]);
  const [client, setClient] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const addClient = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${env.API_URL}clients/register-client`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      showNotification(response.data[1]);
      navigate("/home/clients");
    } catch (error) {
      showNotification(error.response.data, "error");
    }
  };

  const getClients = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${env.API_URL}clients/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);

      if (response.data.length) {
        setAllClients(response.data);
      }
    } catch (error) {}
    setIsLoading(false);
  };

  const getClientById = async (id) => {
    try {
      const response = await axios.get(`${env.API_URL}/clients/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data) {
        console.log(response.data);
        setClient(response.data);
      }
    } catch (error) {
      showNotification(error, "error");
    }
  };

  const disableClient = async (id) => {
    try {
      const response = await axios.post(
        `${env.API_URL}clients/disable-client/${id}`,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      getClients();
    } catch (error) {
      console.log(error);
    }
  };

  const editClient = async (data, id, setErrors) => {
    setIsLoading(true);
    try {
      const response = await axios.put(
        `${env.API_URL}clients/edit-client/${id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      showNotification(response.data[1]);
      navigate("/home/clients");
    } catch (error) {
      showNotification(error.response.data, "error");
    }
  };

  return {
    addClient,
    getClients,
    allClients,
    setAllClients,
    editClient,
    disableClient,
    getClientById,
    client,
    isLoading,
  };
}
