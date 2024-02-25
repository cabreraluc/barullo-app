import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import useAuth from "../Login/useAuth.js";
import useUsers from "../Users/useUsers.js";

const PrivateRoute = () => {
  const { id } = useParams();
  const { user, getUserById } = useUsers();

  const canAccess = {
    Admin: [
      "/add-prospect",
      `/prospect-details/${id}`,
      "/add-client",
      `/edit-prospect/${id}`,
      "/home",
      `/add-user`,
      `/edit-client/${id}`,
      `/edit-user/${id}`,
      "/home/statistics",
      "/home/calendar",
      "/home/prospects",
      "/home/users",
      "/home/clients",
    ],
    Setter: [
      "/add-prospect",
      `/prospect-details/${id}`,
      "/add-client",
      `/edit-prospect/${id}`,
      "/home",
      `/edit-client/${id}`,
      "/home/statistics",
      "/home/calendar",
      "/home/prospects",
      "/home/clients",
    ],
    Closer: [
      "/add-prospect",
      `/prospect-details/${id}`,
      "/add-client",
      `/edit-prospect/${id}`,
      "/home",
      `/edit-client/${id}`,
      "/home/statistics",
      "/home/calendar",
      "/home/prospects",
      "/home/clients",
    ],
    Client: [
      "/add-prospect",
      `/prospect-details/${id}`,
      `/edit-prospect/${id}`,
      "/home",
      "/home/statistics",
      "/home/calendar",
      "/home/prospects",
    ],
  };
  const userFromLocalStorage = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (userFromLocalStorage) {
      getUserById(userFromLocalStorage.id);
    }
  }, []);

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (
    canAccess[userFromLocalStorage?.role]?.some(
      (route) => route === location.pathname
    )
  ) {
    return (
      <>
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/unauthorized" replace />;
  }
};

export default PrivateRoute;
