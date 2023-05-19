import { useEffect } from "react";
import useCart from "./useCart";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import useHome from "../Home/useHome";
import useProductDetails from "../ProductDetails/useProductDetails";
import styles from "../../componentsCss/Cart/Cart.module.css";

export default function Cart() {
  const { allProducts } = useHome();
  const { favourites, cart, isFavouritesLoading, getFavourites, getCart } =
    useProductDetails();
  useEffect(() => {
    getCart(JSON.parse(localStorage.getItem("user")).data?._id);
  }, []);
  console.log(cart);
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
        {cart?.map((e) => (
          <Link
            to={`/products/${e.product._id}`}
            style={{ width: "100%" }}
            className={styles.item}
          >
            <div className={styles.item_title_img}>
              <img src={e.product.image} alt="" />
              <span>{e.product.title}</span>
            </div>
            <span>$ {e.product.price}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
