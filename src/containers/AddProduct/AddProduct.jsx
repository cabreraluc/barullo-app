import Header from "../Header/Header";
import { useState, useEffect } from "react";
import useAddProduct from "./useAddProduct";
import styles from "../../componentsCss/AddProduct/AddProduct.module.css";
import useHome from "../Home/useHome";

export default function AddProduct() {
  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const {
    allProducts,
    getAllProducts,
    getFavourites,
    getCart,
    favourites,
    cart,
  } = useHome();

  const { createProduct } = useAddProduct();

  const handleChange = ({ value, name }) => {
    setData({ ...data, [name]: value });
    console.log(value);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const HandleCreateProduct = () => {
    if (
      data.title === "" ||
      data.description === "" ||
      data.price === "" ||
      data.image === ""
    ) {
      alert("Complete the data");
    } else {
      createProduct(data);
    }
  };

  return (
    <div className={styles.container}>
      <Header
        allProducts={allProducts}
        getFavourites={getFavourites}
        favourites={favourites}
        getCart={getCart}
        cart={cart}
      ></Header>
      <div>
        <div className={styles.form}>
          <h1>Add product</h1>
          <div className={styles.formItem}>
            <span>Title</span>
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={(e) => handleChange(e.target)}
            />
          </div>
          <div className={styles.formItem}>
            <span>Description</span>
            <input
              type="text"
              name="description"
              value={data.description}
              onChange={(e) => handleChange(e.target)}
            />
          </div>
          <div className={styles.formItem}>
            <span>Price</span>
            <input
              type="text"
              name="price"
              value={data.price}
              onChange={(e) => handleChange(e.target)}
            />
          </div>
          <div className={styles.formItem}>
            <span>Picture</span>
            <input
              type="text"
              name="image"
              value={data.image}
              onChange={(e) => handleChange(e.target)}
            />
          </div>

          <button
            onClick={HandleCreateProduct}
            className={styles.buttonRegister}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
