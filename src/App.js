import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./containers/Login/Login";
import Landing from "./containers/Landing/Landing";
import Header from "./containers/Layout/Header/Header";
import useAuth from "./containers/Login/useAuth";
import PrivateRoute from "./containers/App/PrivateRoute";
import Unauthorized from "./containers/Unauthorized/Unauthorized";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminPanel from "./containers/AdminPanel/AdminPanel";
import AddEvent from "./containers/EventsPanel/AddEvent";
import EditEvent from "./containers/EventsPanel/EditEvent";
import AddUser from "./containers/UsersPanel/AddUser";
import EditUser from "./containers/UsersPanel/EditUser";
import AddArtist from "./containers/ArtistsPanel/AddArtist";
import EditArtist from "./containers/ArtistsPanel/EditArtist";
import PaymentSection from "./containers/PaymentSection/PaymentSection";
import QRScanner from "./containers/QRScanner/QRScanner";

function App() {
  const { pathname } = useLocation();
  const user = useAuth();
  const [openSlider, setOpenSlider] = useState(false);
  const [colorHeader, setColorHeader] = useState("white");
  const [turnOffLogo, setTurnOffLogo] = useState(false);
  const [redFilter, setRedFilter] = useState(false);

  const handleColorHeader = (event) => {
    if (event.activeIndex === 2) {
      setColorHeader("black");
    } else {
      setColorHeader("white");
    }
  };

  const colorHeadsByPath = () => {
    if (pathname === "/event-information") {
      setColorHeader("white");
    } else if (pathname === "/") {
      setColorHeader("white");
    }
  };

  useEffect(() => {
    colorHeadsByPath();
  }, [pathname]);

  return (
    <div
      style={{
        marginLeft: openSlider ? "300px" : "0px",
        transition: openSlider ? "0.23s" : "0.19s",
        width: "100vw",
        filter: redFilter
          ? "sepia(100%) saturate(300%) brightness(70%) hue-rotate(300deg)"
          : "none",
      }}
      className="App"
    >
      <Header
        setOpenSlider={setOpenSlider}
        turnOffLogo={turnOffLogo}
        colorHeader={colorHeader}
        setRedFilter={setRedFilter}
      />
      <Routes>
        <Route />

        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route
          path="/"
          element={
            <Landing
              setTurnOffLogo={setTurnOffLogo}
              handleColorHeader={handleColorHeader}
              openSlider={openSlider}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/event-information" element={<PaymentSection />} />
        <Route element={<PrivateRoute />}>
          <Route path="/scanner" element={<QRScanner />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/edit-event" element={<EditEvent />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/add-artist" element={<AddArtist />} />
          <Route path="/edit-artist/:id" element={<EditArtist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
