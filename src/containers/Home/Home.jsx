import styles from "../../componentsCss/Home/home.module.css";
import Header from "../Header/Header";
import SideBar from "../../components/Home/SideBar";
import { useEffect, useState } from "react";
import Tables from "../../components/Home/Tables";
import useHome from "./useHome";
import Pagination from "../../components/Pagination/Pagination";
import { useLocation, useParams } from "react-router-dom";
import useHeader from "../Header/useHeader";
export default function Home(props) {
  const { pagina } = useParams();
  const {
    getProductsPaginate,
    products,
    setProducts,
    page,
    setPage,
    totalPages,
    getAllProducts,
    allProducts,
    getFavourites,
    getCart,
    favourites,
    cart,
    setCart,
    setFavourites,
    isFavouritesLoading,
  } = useHome();

  useEffect(() => {
    getProductsPaginate(products, setProducts, pagina);
    getAllProducts();
    if (JSON.parse(localStorage.getItem("user"))?.data?._id) {
      getCart(JSON.parse(localStorage.getItem("user"))?.data?._id);
      getFavourites(JSON.parse(localStorage.getItem("user"))?.data?._id);
    }
  }, [pagina]);

  return (
    <div className={styles.container}>
      <Header
        allProducts={allProducts}
        getFavourites={getFavourites}
        favourites={favourites}
        getCart={getCart}
        cart={cart}
        isFavouritesLoading={isFavouritesLoading}
      ></Header>
      <div className={styles.bodyContainer}>
        <div className={styles.tablesContainer}>
          <Tables
            data={products}
            getCart={getCart}
            cart={cart}
            favourites={favourites}
            getFavourites={getFavourites}
          ></Tables>
        </div>
        <Pagination
          setPage={setPage}
          page={page}
          totalPages={totalPages}
        ></Pagination>
      </div>
    </div>
  );
}
