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

function App() {
  const { pathname } = useLocation();
  const user = useAuth();

  return (
    <div className="App">
      {pathname === "/login" ? null : <Header />}

      <Routes>
        <Route path="/" element={<Navigate to="/" />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} /> */}
        <Route path="/" element={<Landing />} />
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
