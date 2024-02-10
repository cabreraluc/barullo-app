import axios from "axios";
import env from "../../env/env";
import { useState } from "react";

export default function useUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const addUser = async (data) => {
    try {
      await axios.post(`${env.API_URL}users/register-user`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      window.location.href = "/1";
    } catch (error) {}
  };

  const getUsers = async (filters) => {
    try {
      const response = await axios.get(`${env.API_URL}users/`, filters, {
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

  return { addUser, getUsers, allUsers };
}
