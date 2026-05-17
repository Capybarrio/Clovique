import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";

const isTokenExpired = (token) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp ? payload.exp * 1000 < Date.now() : false;
  } catch {
    return true;
  }
};

const ProtectedRoute = ({ children, role }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = localStorage.getItem("userToken");
  const hasInvalidToken = Boolean(user && (!token || isTokenExpired(token)));

  useEffect(() => {
    if (hasInvalidToken) {
      dispatch(logout());
    }
  }, [dispatch, hasInvalidToken]);

  if (!user || hasInvalidToken || (role && user.role !== role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
