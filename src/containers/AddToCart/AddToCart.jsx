import { useEffect } from "react";
import useHome from "../Home/useHome";
import Header from "../Header/Header";
import { Link, redirect } from "react-router-dom";
import useProductDetails from "../ProductDetails/useProductDetails";
import styles from "../../componentsCss/AddToCart/AddToCart.module.css";
import { useParams } from "react-router-dom";

export default function AddToCart() {
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
    addToCart,
  } = useProductDetails();

  useEffect(() => {
    getAllProducts();

    getDataCart(JSON.parse(localStorage.getItem("user")).data?._id);
    getDataFavourites(JSON.parse(localStorage.getItem("user")).data?._id);
    // handlerAddToCart();
  }, []);
  const product = allProducts.filter((e) => e?._id === id);
  console.log(product);

  //   async function handlerAddToCart() {
  //     addToCart(id, JSON.parse(localStorage.getItem("user")).data?._id);
  //   }

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
      <div className={styles.form}>
        <div style={{ width: "100%" }} className={styles.item}>
          <div className={styles.item_titles_img}>
            <Link to={`/products/${product[0]?._id}`}>
              <img
                src={product[0]?.image}
                alt=""
                className={styles.item_titles_img_img}
              />
            </Link>
            <span className={styles.tilde}>✅</span>
            <div
              className={styles.item_titles}
              onClick={() => redirect(`/products/${product[0]?._id}`)}
            >
              <span className={styles.item_titles_message}>
                You added to your cart
              </span>
              <span>
                <Link
                  to={`/products/${product[0]?._id}`}
                  className={styles.item_titles_message_title}
                >
                  {product[0]?.title}
                </Link>
              </span>
            </div>
          </div>
          <div className={styles.products_price}>
            <span>{allProducts.length} products in the cart</span>
            <span>$ {product[0]?.price}</span>
          </div>
          <div className={styles.buttons_container}>
            <Link to="/cart">
              <button className={styles.button}>View cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
