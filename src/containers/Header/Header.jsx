import { useEffect } from "react";
import Header from "../../components/Header/Header";

export default function HeaderContainer({
  allProducts,
  getFavourites,
  favourites,
  getCart,
  cart,
  isFavouritesLoading,
}) {
  return (
    <Header
      productsList={allProducts}
      getFavourites={getFavourites}
      favourites={favourites}
      getCart={getCart}
      cart={cart}
      isFavouritesLoading={isFavouritesLoading}
    ></Header>
  );
}
