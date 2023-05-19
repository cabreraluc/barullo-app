import { useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState([]);
  function getCart(id) {
    fetch(`https://allstore.fly.dev/v1/cart/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setCart(json);
      });
  }

  return { getCart, cart };
}
