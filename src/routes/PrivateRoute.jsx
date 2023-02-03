import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { AuthState } from "../atoms/authState";

export const PrivateRoute = ({children}) => {
  const authData = useRecoilValue(AuthState)
  const location = useLocation();
  return (
    <div>
      {authData.token ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </div>
  );
};