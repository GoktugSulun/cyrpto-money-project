import { useMemo } from "react";
import { useDispatch } from "react-redux";
import * as actionCreators from "./actionCreators";

export const getHomeApiRequest = () => async (dispatch) => {

   await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/wallet.json`)
    .then((response) => response.json())
    .then((data) => dispatch(actionCreators.getWalletApi(data)));

   await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/history.json`)
    .then((response) => response.json())
    .then((data) => dispatch(actionCreators.getHistoryApi(data)));

}

export const getMarketApiRequest = () => async (dispatch) => {

   const response = await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/market.json`);
   const data = await response.json();
  
   dispatch(actionCreators.getMarketApi(data));
   
}

export const setBalance = (newWallet) => async (dispatch) => {

   const response = await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/wallet.json`, {
      method: 'PUT',
      body: JSON.stringify(newWallet)
   });
   const data = await response.json();
   dispatch(actionCreators.getWalletApi(data));
}

export const postWalletApiRequest = (crypto, cost) => async (dispatch, getState) => {

   dispatch(actionCreators.addCryptoToWallet(crypto));
   dispatch(actionCreators.decreaseBalance(cost));

   const state = getState();

   const response = await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/wallet.json`, {
      method: 'PUT',
      body: JSON.stringify(state.walletReducer)
   });
   const data = await response.json();
   dispatch(actionCreators.getWalletApi(data));
   
}

export const postHistoryApiRequest = (crypto) => async (dispatch, getState) => {

   dispatch(actionCreators.addCryptoToHistory(crypto));
   // dispatch(actionCreators.decreaseBalance(cost));

   const state = getState();

   const response = await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/history.json`, {
      method: 'PUT',
      body: JSON.stringify(state.historyReducer)
   });
   const data = await response.json();
   console.log(data, ' post history api request data ????');
   dispatch(actionCreators.getHistoryApi(data));
   
}

// export const setBalance = (newWallet) => async (dispatch) => {
//    console.log(newWallet, ' => setBalance thunk actions (value)');

//    const response = await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/wallet.json`, {
//       method: 'PUT',
//       body: JSON.stringify(newWallet)
//    });
//    const data = await response.json();
//    console.log(data, ' setBalance data after await ___');

//    // dispatch(actionCreators.decreaseBalance(value));
// }
