import React from 'react';

import produce, {current} from 'immer';
import * as actionTypes from '../actions/actionTypes'

const initialState = {
   userId: '',
   balance: 0,
   cryptos: [],
}

const walletReducer = produce((draft, action) => {
   switch (action.type) {
       case actionTypes.WALLET_SET:
            draft = action.payload;
            return draft;

       case actionTypes.CRYPTO_ADD_TO_WALLET:
            const idx = draft?.cryptos?.findIndex(crypto => {
               return action?.payload?.type === crypto?.type 
            });

            if(idx === -1){
               draft.cryptos.push(action.payload);
            }else {
               draft.cryptos[idx].amount += action.payload.amount;
            }
            return draft;

       case actionTypes.CRYPTO_REMOVE_FROM_WALLET:
            const index = draft?.cryptos?.findIndex(crypto => action.payload.type === crypto?.type);

            if(index !== -1){
               const result = draft.cryptos[index].amount - action.payload.amount;

               if(result === 0){
                  draft.cryptos.splice(index, 1);
               }else {
                  draft.cryptos[index].amount -= action.payload.amount;
                  draft.cryptos[index].cost -= action.payload.cost;
               }
            }
            
            
            return draft;

       case actionTypes.GET_WALLET_API:
            draft = action.payload;
            return draft;

       case actionTypes.BALANCE_DECREASE:
            draft.balance = draft.balance - action.payload;
            return draft;

       case actionTypes.BALANCE_INCREASE:
            draft.balance = draft.balance + action.payload;
            return draft;
      
         

       default:
           return draft;
   }
}, initialState)

export default walletReducer;
