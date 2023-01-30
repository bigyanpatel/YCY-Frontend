import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, Login, Signup } from '../page/PageExport';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}
