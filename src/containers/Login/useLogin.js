import axios from "axios";

export default function useLogin() {
  const loginUser = async (data) => {
    try {
      const userData = await axios.post(
        "https://allstore.fly.dev/v1/loginuser",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      window.location.href = "/";
    } catch (error) {
      alert("User not found");
    }
  };
  return { loginUser };
}
