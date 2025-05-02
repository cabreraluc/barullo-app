import { useState } from "react";
import useNotistack from "../../../components/Notistack/useNotistack";
import { useNavigate } from "react-router-dom";
import fetchFromApi from "../../../utils/fetchFromapi";

export default function useArtists() {
  const navigate = useNavigate();
  const { showNotification } = useNotistack();
  const [allArtists, setAllArtists] = useState([]);
  const [artist, setArtist] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const addArtist = async (data, setErrors) => {
    setIsLoading(true);
    try {
      const response = await fetchFromApi(
        `POST`,
        `artists/register-artist`,
        data
      );

      showNotification(response.message);
      navigate("/admin-panel");
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.length) {
        setErrors(error?.response?.data);
      } else {
        showNotification(error?.response?.data?.error, "error");
      }
      setIsLoading(false);
    }
  };

  const getArtists = async () => {
    try {
      setIsLoading(true);

      const response = await fetchFromApi(`GET`, `artists/`, null, "artists");

      const sortedArtists = response.sort((a, b) => {
        if (a.status === "active" && b.status !== "active") {
          return -1;
        } else if (a.status !== "active" && b.status === "active") {
          return 1;
        }
        return 0;
      });

      setAllArtists(sortedArtists);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const getArtistById = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetchFromApi(`GET`, `artists/${id}`);

      if (response) {
        setArtist(response);
      }
    } catch (error) {
      if (error.request.status === 500) {
        showNotification("Sesión expirada", "error");
        navigate("/login");
      } else {
        showNotification(error, "error");
      }
    }
    setIsLoading(false);
  };

  const disableOrActiveArtist = async (id) => {
    try {
      const response = await fetchFromApi(
        `PUT`,
        `artists/disable-or-active-artist/` + id
      );
      getArtists();
      showNotification(response[0]);
    } catch (error) {
      showNotification(error.response.data.error, "error");
    }
  };

  const editArtist = async (data, id, setErrors) => {
    setIsLoading(true);
    try {
      const response = await fetchFromApi(
        `PUT`,
        `artists/edit-artist/${id}`,
        data
      );
      showNotification(response[1]);
      navigate("/admin-panel");
    } catch (error) {
      if (error.response.data.length) {
        setErrors(error.response.data);
      } else {
        showNotification(error.response.data.error, "error");
      }
      setIsLoading(false);
    }
  };

  return {
    addArtist,
    getArtists,
    allArtists,
    setAllArtists,
    editArtist,
    disableOrActiveArtist,
    getArtistById,
    artist,
    isLoading,
    setIsLoading,
  };
}
