import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import useHome from "../Home/useHome";
import { useEffect, useState } from "react";
import useProductDetails from "./useProductDetails";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "../../componentsCss/ProductDetails/ProductDetails.module.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const { allProducts, getAllProducts } = useHome();

  const {
    favourites,
    cart,
    isDataLoading,
    isFavouritesLoading,
    getFavourites,
    getCart,
    getDataFavourites,
    getDataCart,
    addToFavourites,
    addToCart,
    isButtonLoading,
  } = useProductDetails();

  const [isFavourite, setIsFavourite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    getAllProducts();
    isFavouriteFunct();
    isCartFunct();
    getDataCart(JSON.parse(localStorage.getItem("user")).data?._id);
    getDataFavourites(JSON.parse(localStorage.getItem("user")).data?._id);
  }, []);

  const product = allProducts.filter((e) => e?._id === id);

  async function handlerAddToFavourites() {
    addToFavourites(
      product[0]?._id,
      JSON.parse(localStorage.getItem("user")).data?._id
    );
    setIsFavourite(!isFavourite);
  }

  async function handlerAddToCart() {
    addToCart(
      product[0]?._id,
      JSON.parse(localStorage.getItem("user")).data?._id
    );
  }

  function isFavouriteFunct() {
    console.log("funcionaa");
    favourites.forEach((element) => {
      if (element.product?._id === product[0]?._id) {
        setIsFavourite(true);
      }
    });
  }

  function isCartFunct() {
    cart.forEach((element) => {
      if (element.product?._id === product[0]?._id) {
        setIsInCart(true);
      }
    });
  }

  useEffect(() => {
    isFavouriteFunct();
    isCartFunct();
  }, [favourites, cart]);

  return (
    <div className={styles.container}>
      <Header
        productsList={allProducts}
        getFavourites={getFavourites}
        favourites={favourites}
        getCart={getCart}
        cart={cart}
        isFavouritesLoading={isFavouritesLoading}
      ></Header>

      <div className={styles.body}>
        <div className={styles.card}>
          <div className={styles.firstSection}>
            <img className={styles.image} src={product[0]?.image} />
          </div>
          <div className={styles.secondSection}>
            <h1>{product[0]?.title}</h1>
            <h1>${product[0]?.price}</h1>
            <h2>{product[0]?.description}</h2>
          </div>
          <div className={styles.thirtSection}>
            <div className={styles.thirtSectionSub}>
              {isDataLoading ? (
                <div className={styles.loading}>
                  <Box>
                    <CircularProgress></CircularProgress>
                  </Box>
                </div>
              ) : (
                <div className={styles.thirtSectionSubSub}>
                  <button
                    className={styles.buttons}
                    onClick={handlerAddToFavourites}
                    disabled={isButtonLoading}
                  >
                    {isButtonLoading
                      ? "Loading"
                      : isFavourite
                      ? "Delete from Favourites"
                      : "Add to favourites"}
                  </button>
                  <Link to={`/addtocart/${product[0]?._id}`}>
                    <button
                      className={styles.buttons}
                      onClick={handlerAddToCart}
                    >
                      Add to cart
                    </button>
                  </Link>
                  <button className={styles.buttons}>Buy now</button>
                  <span
                    style={{
                      color: "green",
                      fontSize: "1.2rem",
                      margin: "1rem",
                    }}
                  >
                    Llega gratis mañana
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
