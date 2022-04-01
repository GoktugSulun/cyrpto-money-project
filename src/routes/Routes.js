import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import HomePage from "../pages/HomePage"
import ErrorPage from "../pages/ErrorPage"

import PrivateRoute from './PrivateRoute';


const routes = () => {
   // const isToken = localStorage.getItem('token');

   return (
      <Routes>
         <Route path='/home' element={<PrivateRoute component={HomePage} target='home' />} />
         <Route path='/login' element={<PrivateRoute component={LoginPage} target='login' />} /> 
         <Route path='/register' element={<PrivateRoute component={RegisterPage} target='register' />} />
         <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
   )
}

export default routes