import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import useAuth from "../Login/useAuth.js";
import useUsers from "../UsersPanel/useUsers.js";

const PrivateRoute = () => {
  const { id } = useParams();
  const { user, getUserById } = useUsers();

  const canAccess = {
    Admin: [
      "/admin-panel",
      `/add-event`,
      "/edit-event",
      `/edit-prospect/${id}`,
      `/add-user`,
      `/edit-artist/${id}`,
      `/edit-user/${id}`,
      `/add-artist`,
      "/scanner",
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
    return <Navigate to="/" replace />;
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
