import axios from "axios";
import env from "../../env/env";
import { useState } from "react";
import useNotistack from "../../components/Notistack/useNotistack";
import { useNavigate } from "react-router-dom";

export default function useUsers() {
  const navigate = useNavigate();
  const { showNotification } = useNotistack();
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const addUser = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${env.API_URL}users/register-user`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      showNotification(response.data[1]);
      navigate("/home/users");
    } catch (error) {
      showNotification(error.response.data, "error");
    }
  };

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${env.API_URL}users/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);

      if (response.data.length) {
        setAllUsers(response.data);
      }
    } catch (error) {}
    setIsLoading(false);
  };

  const getUserById = async (id) => {
    try {
      const response = await axios.get(`${env.API_URL}/users/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data) {
        console.log(response.data);
        setUser(response.data);
      }
    } catch (error) {
      showNotification(error, "error");
    }
  };

  const disableUser = async (id) => {
    try {
      const response = await axios.post(
        `${env.API_URL}users/disable-user/${id}`,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = async (data, id, setErrors) => {
    setIsLoading(true);
    try {
      const response = await axios.put(
        `${env.API_URL}users/edit-user/${id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      showNotification(response.data[1]);
      navigate("/home/users");
    } catch (error) {
      showNotification(error.response.data, "error");
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
