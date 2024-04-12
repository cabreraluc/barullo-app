import axios from "axios";
import env from "../env/env";

export default async function fetchFromApi(type, url, body, context) {
  const BASE_URL = env.API_URL;

  const tokenContainer = JSON.parse(localStorage.getItem("user-barullo"));
  const token = tokenContainer ? tokenContainer.token : null;

  if (type === "GET") {
    if (context === "artists") {
      const { data } = await axios.get(`${BASE_URL}${url}`);
      return data;
    } else {
      const { data } = await axios.get(`${BASE_URL}${url}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data;
    }
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
