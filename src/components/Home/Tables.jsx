import styles from "../../componentsCss/Home/tables.module.css";
import Item from "./Item";

export default function Tables({
  data,
  getCart,
  cart,
  getFavourites,
  favourites,
}) {
  return (
    <div className={styles.container}>
      {data?.length
        ? data.map((item) => {
            return (
              <Item
                itemData={item}
                key={item.id}
                getCart={getCart}
                cart={cart}
                favourites={favourites}
                getFavourites={getFavourites}
              ></Item>
            );
          })
        : null}
    </div>
  );
}
