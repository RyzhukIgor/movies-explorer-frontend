import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
    return (
                props.isLoggedIn ? props.children : <Navigate to="/signin" replace/>
    );
};

export default ProtectedRoute;