import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home";
import ProductDetails from "./containers/ProductDetails/ProductDetails";
import AddProduct from "./containers/AddProduct/AddProduct";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Favourites from "./containers/Favourites/Favourites";
import Cart from "./containers/Cart/Cart";
import AddToCart from "./containers/AddToCart/AddToCart";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path=":pagina" element={<Home />} />
          <Route index element={<Home />} />
        </Route>
        <Route path="/products">
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addtocart">
          <Route path=":id" element={<AddToCart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
