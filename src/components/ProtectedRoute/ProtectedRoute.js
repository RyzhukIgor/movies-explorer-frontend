import React from "react";
import { Navigate } from "react-router-dom";
import { useUserStore } from "../../contexts/CurrentUserContext";

const ProtectedRoute = (props) => {
  const { user } = useUserStore();

  return user ? props.children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
