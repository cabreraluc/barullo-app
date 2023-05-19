import { useState } from "react";

export default function useFavourites() {
  const [favourites, setFavourites] = useState([]);
  function getFavourites(id) {
    fetch(`https://allstore.fly.dev/v1/favourites/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setFavourites(json);
      });
  }

  return { getFavourites, favourites };
}
