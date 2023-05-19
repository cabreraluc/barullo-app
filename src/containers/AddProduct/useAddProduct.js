import axios from "axios";

export default function useAddProduct() {
  const createProduct = (data) => {
    axios.post("https://allstore.fly.dev/createproduct", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(data);
  };

  return { createProduct };
}
