import React from 'react';

import produce from 'immer';
import * as actionTypes from '../actions/actionTypes'

const initialState = {
   title: '',
   target: '',
   balance: 0,
   cryptos: [
   ]
}

const walletReducer = produce((draft, action) => {
   switch (action.type) {
       case actionTypes.WALLET_SET:
            draft = action.payload;
            return draft;

       case actionTypes.CRYPTO_ADD:
            draft.crytps.push(action.payload);
            return draft;

       case actionTypes.CRYPTO_REMOVE:
            return draft;

       case actionTypes.GET_WALLET_API:
            draft = action.payload;
            return draft;

       default:
           return draft;
   }
}, initialState)

export default walletReducer;



// const walletReducer = (state=initialState, action) => {
//    switch (action.type) {
//       case actionTypes.WALLET_SET:
//          return state = { ...action.payload }
//       case actionTypes.CRYPTO_ADD:
//          let cyrptos = { ...state.cyrptos };
//          cyrptos.push(action.payload);
//          return state = {
//             ...state,
//             cyrptos
//          }
//       case actionTypes.CRYPTO_REMOVE: 
//          console.log('removeCrypto');
//          break;
//       case actionTypes.GET_WALLET_API:
//          return state = { ...action.payload }
//       default:
//          return state;
//    }
// };