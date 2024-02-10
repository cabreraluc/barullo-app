import axios from "axios";
import env from "../../env/env";

export default function useRegister() {
  const registerUser = async (data) => {
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
      window.location.href = "/login";
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return { registerUser };
}
