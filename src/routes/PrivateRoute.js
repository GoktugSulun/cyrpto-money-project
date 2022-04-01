import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = (props) => {
   const isToken = localStorage.getItem('token');
   const { component: Component, target } = props;

   switch (target) {
      case 'home':
         return isToken ? <Component /> : <Navigate to='/login' />;
      case 'login':
         return !isToken ? <Component /> : <Navigate to='/home' />;
      case 'register':
         return !isToken ? <Component /> : <Navigate to='/home' />;
      default:
         break;
   }
   
   

 
}

export default PrivateRoute;