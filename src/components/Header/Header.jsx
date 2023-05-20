import styles from "../../componentsCss/Home/header.module.css";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import logo from "./logo.png";
import { useEffect } from "react";
import { Link, redirect } from "react-router-dom";
import useFavourites from "../../containers/Favourites/useFavourites";
import useCart from "../../containers/Cart/useCart";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header({
  productsList,
  getFavourites,
  favourites,
  getCart,
  cart,
  isFavouritesLoading,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [userLoged, setUserLoged] = React.useState({});

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [anchorElFav, setAnchorElFav] = React.useState(null);
  const openFav = Boolean(anchorElFav);
  const handleClickFav = (event) => {
    setAnchorElFav(event.currentTarget);
    getFavourites(
      getFavourites(JSON.parse(localStorage.getItem("user")).data._id)
    );
  };
  const handleCloseFav = () => {
    setAnchorElFav(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    setUserLoged(JSON.parse(localStorage.getItem("user")));
  }, []);

  const Logout = () => {
    localStorage.setItem("user", JSON.stringify({}));
    setUserLoged({});
    window.location.href = "/1";
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {userLoged?.data?.name ? (
        <div>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          <MenuItem
            onClick={() => {
              handleMenuClose();
              Logout();
            }}
          >
            Log out
          </MenuItem>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
          </Link>
          <Link to="/register">
            <MenuItem onClick={handleMenuClose}>Register</MenuItem>
          </Link>
        </div>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to="/favourites">
          <p>Favourites</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/favourites">
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={cart?.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              backgroundColor: "black",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",

                margin: "0 auto",
                alignItems: "center",
              }}
            >
              <Link
                to="/1"
                style={{ color: "white", textDecorationLine: "none" }}
              >
                <span className={styles.logo}>AllStore</span>
              </Link>

              <Stack
                spacing={2}
                sx={{
                  backgroundColor: "white",
                  width: "35vw",
                  margin: "0rem 2rem",
                }}
              >
                <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  getOptionLabel={(option) => option.title || ""}
                  options={productsList}
                  renderOption={(props, option) => (
                    <Link
                      key={option.id}
                      to={`/products/${option._id}`}
                      style={{ color: "black", textDecorationLine: "none" }}
                    >
                      <li {...props} key={option.id}>
                        {option.title}
                      </li>
                    </Link>
                  )}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>

              <Box sx={{ flexGrow: 1 }} />

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Link
                  to={"/addproduct"}
                  style={{ color: "white", textDecorationLine: "none" }}
                >
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                  >
                    <Badge color="error">+</Badge>
                  </IconButton>
                </Link>
                {userLoged?.data?.name ? (
                  <div>
                    <IconButton>
                      <Button
                        sx={{ color: "white" }}
                        id="basic-button"
                        aria-controls={openFav ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openFav ? "true" : undefined}
                        onClick={handleClickFav}
                      >
                        Favourites
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorElFav}
                        open={openFav}
                        onClose={handleCloseFav}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                        sx={{ maxHeight: "30rem" }}
                      >
                        {isFavouritesLoading ? (
                          <div style={{ margin: "2rem 6rem" }}>
                            <Box sx={{ display: "flex" }}>
                              <CircularProgress />
                            </Box>
                          </div>
                        ) : (
                          favourites.map((e) => {
                            return (
                              <Link
                                to={`/products/${e.product._id}`}
                                style={{
                                  color: "black",
                                  textDecorationLine: "none",
                                }}
                                onClick={() =>
                                  getFavourites(
                                    JSON.parse(localStorage.getItem("user"))
                                      .data._id
                                  )
                                }
                              >
                                <MenuItem onClick={handleCloseFav}>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                  >
                                    <img
                                      src={e.product.image}
                                      alt=""
                                      style={{ width: "4rem", height: "4rem" }}
                                    />
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginLeft: "2rem",
                                      }}
                                    >
                                      <span>{e.product.title}</span>
                                      <span>${e.product.price}</span>
                                    </div>
                                  </div>
                                </MenuItem>
                              </Link>
                            );
                          })
                        )}
                      </Menu>
                    </IconButton>
                    <IconButton
                      size="large"
                      aria-label="show 17 new notifications"
                      color="inherit"
                    >
                      <Link to="/cart" style={{ color: "white" }}>
                        <Badge badgeContent={cart?.length} color="error">
                          <ShoppingCartIcon />
                        </Badge>
                      </Link>
                    </IconButton>
                  </div>
                ) : null}
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>

              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <div className={styles.subAppBar}>
        <div className={styles.subAppBarLeft}>
          <span>
            <MenuIcon></MenuIcon>
          </span>
          <span>Category</span>
          <span>Price</span>
          <span>Rating</span>
        </div>
      </div>
    </div>
  );
}
