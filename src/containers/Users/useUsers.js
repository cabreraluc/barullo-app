import axios from "axios";
import env from "../../env/env";
import { useState } from "react";
import useNotistack from "../../components/Notistack/useNotistack";
import { useNavigate } from "react-router-dom";

export default function useUsers() {
  const navigate = useNavigate();
  const { showNotification } = useNotistack();
  const [allUsers, setAllUsers] = useState([]);
  const addUser = async (data) => {
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
      console.log(response);
      showNotification(response.data[1]);
      navigate("/home/users");
    } catch (error) {
      console.log(error);
      showNotification(error.response.data, "error");
    }
  };

  const getUsers = async () => {
    try {
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

  const editUser = async (data) => {
    try {
      const response = await axios.post(
        `${env.API_URL}users/edit-user/${data.id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {}
  };

  return { addUser, getUsers, allUsers, editUser, disableUser };
}
