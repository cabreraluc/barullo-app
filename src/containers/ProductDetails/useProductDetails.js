import { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

export default function useProductDetails() {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [cart, setCart] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isFavouritesLoading, setIsFavouritesLoading] = useState(false);
  async function addToFavourites(product, user) {
    setIsButtonLoading(true);
    try {
      const response = await axios.post(
        "https://allstore.fly.dev/v1/addtofavourites",
        { product, user },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setIsButtonLoading(false);
      console.log(response.data.response);
    } catch (error) {}
  }

  async function addToCart(product, user) {
    try {
      await axios.post(
        "https://allstore.fly.dev/v1/addtocart",
        { product, user },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      redirect(`/addtocart/${product}`);
    } catch (error) {}
  }

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

  async function getDataFavourites(id) {
    setIsDataLoading(true);
    try {
      const response = await axios.get(
        `https://allstore.fly.dev/v1/favourites/${id}`
      );
      setFavourites(response.data);
      setIsDataLoading(false);
      console.log(response);
    } catch (error) {}
  }
  function getDataCart(id) {
    fetch(`https://allstore.fly.dev/v1/cart/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setCart(json);
      });
  }

  return {
    addToFavourites,
    addToCart,
    isButtonLoading,
    getCart,
    getFavourites,
    favourites,
    cart,
    isDataLoading,
    isFavouritesLoading,
    getDataFavourites,
    getDataCart,
  };
}
