import axios from "axios";
import env from "../../env/env";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
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

      localStorage.setItem("user", JSON.stringify(userData));
      handleRedirect("/home");
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };
  return { loginUser };
}
