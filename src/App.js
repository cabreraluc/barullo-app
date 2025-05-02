import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./containers/Layout/Header/Header";
import PrivateRoute from "./containers/App/PrivateRoute";

import Landing from "./containers/VisibleToClient/Landing/Landing";
import Login from "./containers/VisibleToClient/Login/Login";
import PaymentSection from "./containers/VisibleToClient/PaymentSection/PaymentSection";
import Unauthorized from "./containers/Unauthorized/Unauthorized";

import AdminPanel from "./containers/AdminSide/AdminPanel/AdminPanel";
import QRScanner from "./containers/AdminSide/QRScanner/QRScanner";
import AddEvent from "./containers/AdminSide/EventsPanel/AddEvent";
import EditEvent from "./containers/AdminSide/EventsPanel/EditEvent";
import AddUser from "./containers/AdminSide/UsersPanel/AddUser";
import EditUser from "./containers/AdminSide/UsersPanel/EditUser";
import AddArtist from "./containers/AdminSide/ArtistsPanel/AddArtist";
import EditArtist from "./containers/AdminSide/ArtistsPanel/EditArtist";

function App() {
  const [openSlider, setOpenSlider] = useState(false);
  const [turnOffLogo, setTurnOffLogo] = useState(false);
  const [redFilter, setRedFilter] = useState(false);

  const appStyles = {
    marginLeft: openSlider ? "300px" : "0px",
    transition: openSlider ? "0.23s" : "0.19s",
    filter: redFilter
      ? "sepia(100%) saturate(300%) brightness(70%) hue-rotate(300deg)"
      : "none",
  };

  return (
    <div className="App" style={appStyles}>
      <Header
        setOpenSlider={setOpenSlider}
        turnOffLogo={turnOffLogo}
        setRedFilter={setRedFilter}
      />

      <div style={{ height: "100%" }}>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <Landing
                setTurnOffLogo={setTurnOffLogo}
                openSlider={openSlider}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/event-information" element={<PaymentSection />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/scanner" element={<QRScanner />} />
            <Route path="/add-event" element={<AddEvent />} />
            <Route path="/edit-event" element={<EditEvent />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="/add-artist" element={<AddArtist />} />
            <Route path="/edit-artist/:id" element={<EditArtist />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
