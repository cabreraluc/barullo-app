import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Landing from "./containers/Landing/Landing";
import Header from "./containers/Layout/Header/Header";
import EditUser from "./containers/Users/EditUser";
import AddUser from "./containers/Users/AddUser";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
