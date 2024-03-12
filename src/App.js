import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Landing from "./containers/Landing/Landing";
import Header from "./containers/Layout/Header/Header";
import EditUser from "./containers/Users/EditUser";
import AddUser from "./containers/Users/AddUser";
import EditClient from "./containers/Clients/EditClient";
import AddClient from "./containers/Clients/AddClient";
import EditProspect from "./containers/Prospects/EditProspect";
import AddProspect from "./containers/Prospects/AddProspect";
import ProspectDetails from "./containers/Prospects/ProspectDetails";
import useAuth from "./containers/Login/useAuth";
import PrivateRoute from "./containers/App/PrivateRoute";
import Unauthorized from "./containers/Unauthorized/Unauthorized";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  const { pathname } = useLocation();
  const user = useAuth();
  const [openSlider, setOpenSlider] = useState(false);
  const [colorHeader, setColorHeader] = useState("black");

  const handleColorHeader = (event) => {
    if (event.activeIndex === 1) {
      setColorHeader("white");
    } else {
      setColorHeader("black");
    }
  };

  return (
    <div
      style={
        openSlider
          ? { marginLeft: "300px", transition: "0.23s" }
          : { marginLeft: "0px", transition: "0.19s" }
      }
      className="App"
    >
      <Header setOpenSlider={setOpenSlider} colorHeader={colorHeader} />

      <Routes>
        <Route />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} /> */}
        <Route
          path="/"
          element={
            <Landing
              handleColorHeader={handleColorHeader}
              openSlider={openSlider}
            />
          }
        />
        {/* <Route element={<PrivateRoute />}>
          <Route path="/home/*" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-client/:id" element={<EditClient />} />
          <Route path="/add-client" element={<AddClient />} />
          <Route path="/edit-prospect/:id" element={<EditProspect />} />
          <Route path="/add-prospect" element={<AddProspect />} />
          <Route path="/prospect-details/:id" element={<ProspectDetails />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
