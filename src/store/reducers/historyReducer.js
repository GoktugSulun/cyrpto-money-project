import React from 'react';

import produce from 'immer';
import * as actionTypes from '../actions/actionTypes'

const initialState = {
   title: '',
   target: '',
   cryptos: [],
}

const historyReducer = produce((draft, action) => {
   switch (action.type) {
       case actionTypes.GET_HISTORY_API:
         draft = action.payload;
         return draft;
       case actionTypes.CRYPTO_ADD_TO_HISTORY:
         draft.cryptos.unshift(action.payload);
         return draft;
       default:
           return draft;
   }
}, initialState)

export default historyReducer;

