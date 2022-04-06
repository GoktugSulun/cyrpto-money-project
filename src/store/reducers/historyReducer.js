import React from 'react';

import produce, { current } from 'immer';
import * as actionTypes from '../actions/actionTypes'

const initialState = {
   cryptos: [],
}

const historyReducer = produce((draft, action) => {
   switch (action.type) {
       case actionTypes.GET_HISTORY_API:
          console.log(action.payload,  ' actionpayload');
          console.log(draft.cryptos,  ' draft.cryptos');
          
         // draft.cryptos = [...action.payload]
         // draft.cryptos.length = 0;
         // draft.cryptos.push(...action.payload);
         draft.cryptos = action.payload;
         return draft;

       case actionTypes.CRYPTO_ADD_TO_HISTORY:
         console.log(action.payload,  ' !!!!!!!!!!');
          draft?.cryptos?.unshift(action.payload);
          console.log(current(draft.cryptos), ' xxxxxx after');
         return draft;
       default:
           return draft;
   }
}, initialState)

export default historyReducer;

