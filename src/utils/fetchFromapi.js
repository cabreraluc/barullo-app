import axios from "axios";
import env from "../env/env";

export default async function fetchFromApi(type, url, body) {
  const BASE_URL = env.API_URL;

  const { token } = JSON.parse(localStorage.getItem("user"));

  if (type === "GET") {
    const { data } = await axios.get(`${BASE_URL}${url}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } else if (type === "POST") {
    const { data } = await axios.post(`${BASE_URL}${url}`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } else if (type === "PUT") {
    const { data } = await axios.put(`${BASE_URL}${url}`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } else if (type === "DELETE") {
    const { data } = await axios.delete(`${BASE_URL}${url}/${body}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  }
}
