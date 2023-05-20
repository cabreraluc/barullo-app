import axios from "axios";

export default function useAddProduct() {
  const createProduct = async (data) => {
    try {
      await axios.post("https://allstore.fly.dev/v1/createproduct", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      window.location.href = "/1";
    } catch (error) {}
  };

  return { createProduct };
}
