import React from 'react';

// const initialDetail = {
//    method: 'GET',
//    headers: {},
//    body: ''
// }

const useFetch = async (baseURL, params) => {

   const response = params 
      ? await fetch(baseURL, params)
      : await fetch(baseURL);
   
   const data = await response.json();

   return data;
}

export default useFetch;
