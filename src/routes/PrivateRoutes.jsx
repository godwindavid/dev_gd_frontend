import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/homepage'

const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </>
  )
}

export default PrivateRoutes