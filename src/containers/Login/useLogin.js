import axios from "axios";
import env from "../../env/env";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useNotistack from "../../components/Notistack/useNotistack";

export default function useLogin() {
  const { showNotification } = useNotistack();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleRedirect = (path) => {
    navigate(path);
  };
  const loginUser = async (data) => {
    try {
      const userData = await axios.post(
        `${env.API_URL}users/login-user`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("user-barullo", JSON.stringify(userData.data));
      if (userData.data.role === "Admin") {
        handleRedirect("/admin-panel");
      } else {
        handleRedirect("/");
      }
    } catch (error) {
      console.log(error);
      showNotification(error.response.data.error, "error");
    }
  };

  const logOut = async () => {
    localStorage.clear("user");
    handleRedirect("/login");
  };

  return { loginUser, logOut, isLoading };
}
