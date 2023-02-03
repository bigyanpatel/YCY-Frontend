import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import { useRecoilValue } from 'recoil';
import { AuthState } from '../atoms/authState';
import { HomePage, Login, Signup } from '../page/PageExport';
import { PrivateRoute } from './PrivateRoute';

export const AppRoutes = () => {
  const authData = useRecoilValue(AuthState);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      {!authData.token ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Navigate replace to="/" />} />
          <Route path="/signup" element={<Navigate replace to="/" />} />
        </>
      )}
    </Routes>
  )
}
