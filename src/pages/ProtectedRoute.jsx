import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/Context";
const ProtectedRoute = ({ children }) => {
	const { user, password } = useGlobalContext();
    console.log("now user is => " + user + ", password is => " + password);
    if(!user || !password){
        return <Navigate to="/login" />;
    }
	return children;
};

export default ProtectedRoute;
