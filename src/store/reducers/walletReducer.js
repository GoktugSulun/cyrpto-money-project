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
            // alert('crypto-addd');
            console.log(current(draft?.cryptos), ' action pay');
            const idx = draft?.cryptos?.findIndex(crypto => {
               console.log(current(crypto), ' ?????');
               console.log(action?.payload?.type === crypto?.type, ' !');
               return action?.payload?.type === crypto?.type 
            });

            if(idx === -1){
               draft.cryptos.push(action.payload);
            }else {
               draft.cryptos[idx].amount += action.payload.amount;
            }
            return draft;

       case actionTypes.CRYPTO_REMOVE_FROM_WALLET:
            console.log('remove reducer !!');
            const index = draft?.cryptos?.findIndex(crypto => action.payload.type === crypto?.type);

            if(index !== -1){
               const result = draft.cryptos[index].amount - action.payload.amount;

               if(result === 0){
                  // return draft.cryptos.filter(cyrpto => cyrpto.type !== action.payload.type);
                  draft.cryptos.splice(index, 1);
               }else {
                  draft.cryptos[index].amount -= action.payload.amount;
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
            console.log(' SECONDDD WORORKRRKK ');
            draft.balance = draft.balance + action.payload;
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