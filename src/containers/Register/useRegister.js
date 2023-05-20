import axios from "axios";

export default function useRegister() {
  const registerUser = async (data) => {
    try {
      const response = await axios.post(
        "https://allstore.fly.dev/v1/registeruser",
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
      alert("User already registered");
    }
  };
  return { registerUser };
}
