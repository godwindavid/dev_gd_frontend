import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login';
import Homepage from '../pages/homepage';

const PublicRoutes = () => {
  return (
        <>
            <Routes>
                <Route path="/*" element={<Navigate replace to="/login" />} />
                <Route path="/login" element={<LoginPage page="login" />} />
                <Route path='/signup' element={<LoginPage page="signup" />} />
            </Routes>
        </>
    );
}

export default PublicRoutes