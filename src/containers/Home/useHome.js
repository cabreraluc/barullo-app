import { useState } from "react";
import axios from "axios";
export default function useHome() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(10);
  const [page, setPage] = useState(1);
  const [favourites, setFavourites] = useState([]);
  const [cart, setCart] = useState([]);
  const [isFavouritesLoading, setIsFavouritesLoading] = useState(false);

  async function getFavourites(id) {
    setIsFavouritesLoading(true);
    try {
      const response = await axios.get(
        `https://allstore.fly.dev/v1/favourites/${id}`
      );
      setFavourites(response.data);
      setIsFavouritesLoading(false);
      console.log(response);
    } catch (error) {}
  }
  function getCart(id) {
    fetch(`https://allstore.fly.dev/v1/cart/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setCart(json);
      });
  }

  function getProductsPaginate(data, setData, page) {
    fetch(`https://allstore.fly.dev/v1/products?page=${page}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.docs);
        setPage(json.page);
        setTotalPages(json.totalPages);
      });
  }

  function getAllProducts() {
    fetch(`https://allstore.fly.dev/v1/allproducts`)
      .then((response) => response.json())
      .then((json) => {
        setAllProducts(json);
      });
  }

  return {
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
  };
}
