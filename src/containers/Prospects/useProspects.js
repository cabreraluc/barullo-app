import axios from "axios";
import env from "../../env/env";
import { useState } from "react";
import useNotistack from "../../components/Notistack/useNotistack";
import { useNavigate } from "react-router-dom";
import fetchFromApi from "../../utils/fetchFromapi";
import useAuth from "../../containers/Login/useAuth";

export default function useProspects() {
  const navigate = useNavigate();
  const { showNotification } = useNotistack();
  const [allProspects, setAllProspects] = useState([]);
  const [prospect, setProspect] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("undefined");
  const [totalPages, setTotalPages] = useState(1);
  const user = useAuth();

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

  const getProspectsPaginate = async (id, page, search) => {
    try {
      setIsLoading(true);

      const response = await fetchFromApi(
        `GET`,
        `prospects/paginate/?page=${page}&id=${id}&search=${search}`
      );

      console.log(response);

      setAllProspects(response.docs);
      setTotalPages(response.totalPages);
      setPage(response.page);
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
      if (allProspects.length === 1 && page !== 1) {
        getProspectsPaginate(user.id, page - 1, search);
      } else {
        getProspectsPaginate(user.id, page, search);
      }
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
    getProspectsPaginate,
    setPage,
    page,
    totalPages,
    search,
    setSearch,
  };
}
