import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

const UseHttp = async (props) => {
   
   const sendRequest = async () => {
      const response = await fetch('https://authorization-bece2-default-rtdb.firebaseio.com/wallet.json');
      const data = await response.json();
      return data;
   }

   try {
      const data = await sendRequest();
      console.log(data, ' GET RESPONSE');
      return data;
   }catch(error) {
      console.log(error);
   }

  return (
    <div>error</div>
  )
}

export default UseHttp;