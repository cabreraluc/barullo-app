import { useEffect } from "react";
import useFavourites from "./useFavourites";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

export default function Favourites() {
  const { getFavourites, favourites } = useFavourites();

  useEffect(() => {
    getFavourites(JSON.parse(localStorage.getItem("user")).data._id);
  }, []);
  console.log(favourites);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header></Header>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {favourites.map((e) => (
          <Link to={`/products/${e.product._id}`}>
            <div
              style={{
                width: "20rem",
                height: "20rem",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span>{e.product.title}</span>
              <img src={e.product.image} alt="" style={{ width: "5rem" }} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
