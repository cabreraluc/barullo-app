import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "../../componentsCss/Home/item.module.css";
import { Link } from "react-router-dom";
import useProductDetails from "../../containers/ProductDetails/useProductDetails";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Item({
  itemData,
  getCart,
  cart,
  getFavourites,
  favourites,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [isFavourite, setIsFavourite] = React.useState(false);
  const [isInCart, setIsInCart] = React.useState(false);
  const { addToFavourites, addToCart } = useProductDetails();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  async function handlerAddToFavourites() {
    addToFavourites(
      itemData._id,
      JSON.parse(localStorage.getItem("user")).data._id
    );
    setIsFavourite(true);
    setTimeout(() => {
      getFavourites(JSON.parse(localStorage.getItem("user")).data._id);
    }, 500);
  }

  async function handlerAddToCart() {
    addToCart(itemData._id, JSON.parse(localStorage.getItem("user")).data._id);
    setIsInCart(true);
    setTimeout(() => {
      getCart(JSON.parse(localStorage.getItem("user")).data._id);
    }, 500);
  }

  function isFavouriteFunct() {
    favourites.forEach((element) => {
      if (element.product._id === itemData._id) {
        setIsFavourite(true);
      }
    });
  }

  function isCartFunct() {
    cart.forEach((element) => {
      if (element.product._id === itemData._id) {
        setIsInCart(true);
      }
    });
  }

  React.useEffect(() => {
    isFavouriteFunct();
    isCartFunct();
  }, [favourites, cart]);

  return (
    <div className={styles.container}>
      <div
        style={{
          width: "18rem",
          height: "28rem",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 0px 1rem #E0E0E0",
        }}
      >
        <Link
          to={`/products/${itemData._id}`}
          style={{
            color: "black",
            textDecorationLine: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "18rem",
              justifyContent: "center",
              borderBottom: "solid 1px lightGray",
            }}
          >
            <img
              src={itemData.image}
              style={{
                maxWidth: "18rem",

                margin: "4rem",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "1rem",
            }}
          >
            <div
              style={{
                height: "4rem",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "blue",
                }}
              >
                {itemData.category}
              </span>
              <span
                style={{
                  fontSize: "1rem",
                }}
              >
                {itemData.title.slice(0, 50)}
              </span>
            </div>
            <span
              style={{
                fontSize: "1.5rem",
                height: "5rem",
              }}
            >
              $ {itemData.price}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
