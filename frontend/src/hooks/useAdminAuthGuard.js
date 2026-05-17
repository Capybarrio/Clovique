import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";

const isUnauthorizedError = (error) => {
  if (!error) return false;

  const message =
    typeof error === "string" ? error : error.message || JSON.stringify(error);

  return (
    message.includes("401") ||
    message.toLowerCase().includes("not authorized") ||
    message.toLowerCase().includes("token")
  );
};

export const useAdminAuthGuard = (...errors) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorKey = errors
    .map((error) =>
      typeof error === "string" ? error : error?.message || JSON.stringify(error),
    )
    .join("|");
  const hasUnauthorizedError = errors.some(isUnauthorizedError);

  useEffect(() => {
    if (hasUnauthorizedError) {
      dispatch(logout());
      navigate("/login", { replace: true });
    }
  }, [dispatch, errorKey, hasUnauthorizedError, navigate]);
};
