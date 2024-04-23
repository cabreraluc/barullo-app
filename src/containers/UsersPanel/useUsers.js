import { useState } from "react";
import useNotistack from "../../components/Notistack/useNotistack";
import { useNavigate } from "react-router-dom";
import fetchFromApi from "../../utils/fetchFromapi";

export default function useUsers() {
  const navigate = useNavigate();
  const { showNotification } = useNotistack();
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const addUser = async (data, setErrors) => {
    setIsLoading(true);

    console.log(data);

    try {
      const response = await fetchFromApi(`POST`, `users/register-user`, data);

      showNotification(response[1]);
      navigate("/admin-panel");
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

  const getUsers = async () => {
    try {
      setIsLoading(true);

      const response = await fetchFromApi(`GET`, `users/`);

      console.log(response);

      setAllUsers(response);
    } catch (error) {}
    setIsLoading(false);
  };

  const getUserById = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetchFromApi(`GET`, `users/${id}`);

      if (response) {
        console.log(response);
        setUser(response);
      }
    } catch (error) {
      if (error?.request?.status === 500) {
        showNotification("Sesión expirada", "error");
        localStorage.removeItem("user-barullo");
        navigate("/");
      } else {
        showNotification(error, "error");
      }
    }
    setIsLoading(false);
  };

  const disableUser = async (id) => {
    try {
      const response = await fetchFromApi(`DELETE`, `users/disable-user`, id);
      getUsers();
      showNotification(response[0]);
    } catch (error) {
      showNotification(error.response.data.error, "error");
    }
  };

  const editUser = async (data, id, setErrors) => {
    setIsLoading(true);
    try {
      const response = await fetchFromApi(`PUT`, `users/edit-user/${id}`, data);
      showNotification(response[1]);
      navigate("/admin-panel");
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
    addUser,
    getUsers,
    allUsers,
    setAllUsers,
    editUser,
    disableUser,
    getUserById,
    user,
    isLoading,
  };
}
