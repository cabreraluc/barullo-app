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
  const [allClients, setAllClients] = useState([]);
  const [client, setClient] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("undefined");
  const [totalPages, setTotalPages] = useState(1);
  const user = useAuth();

  const addClient = async (data, setErrors) => {
    setIsLoading(true);
    try {
      const response = await fetchFromApi(
        `POST`,
        `clients/register-client`,
        data
      );

      showNotification(response[1]);
      navigate("/home/clients");
    } catch (error) {
      if (error.response.data.length) {
        setErrors(error.response.data);
      } else {
        showNotification(error.response.data.error, "error");
      }
      setIsLoading(false);
    }
  };

  const getClients = async () => {
    try {
      setIsLoading(true);

      const response = await fetchFromApi(`GET`, `clients/`);

      setAllClients(response);
    } catch (error) {}
    setIsLoading(false);
  };

  const getClientsPaginate = async (id, page, search) => {
    try {
      setIsLoading(true);

      const response = await fetchFromApi(
        `GET`,
        `clients/paginate/?page=${page}&id=${id}&search=${search}`
      );

      setAllClients(response.docs);
      setTotalPages(response.totalPages);
      setPage(response.page);
    } catch (error) {}
    setIsLoading(false);
  };

  const getClientById = async (id) => {
    try {
      const response = await fetchFromApi(`GET`, `/clients/${id}`);

      if (response) {
        setClient(response);
      }
    } catch (error) {
      showNotification(error, "error");
    }
  };

  const disableClient = async (id) => {
    try {
      const response = await fetchFromApi(
        `DELETE`,
        `clients/disable-client`,
        id
      );

      if (allClients.length === 1 && page !== 1) {
        getClientsPaginate(user.id, page - 1, search);
      } else {
        getClientsPaginate(user.id, page, search);
      }

      showNotification(response[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const editClient = async (data, id, setErrors) => {
    setIsLoading(true);
    try {
      const response = await fetchFromApi(
        `PUT`,
        `clients/edit-client/${id}`,
        data
      );

      showNotification(response[1]);
      navigate("/home/clients");
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
    addClient,
    getClients,
    allClients,
    setAllClients,
    editClient,
    disableClient,
    getClientById,
    client,
    isLoading,
    getClientsPaginate,
    setPage,
    page,
    totalPages,
    search,
    setSearch,
  };
}
