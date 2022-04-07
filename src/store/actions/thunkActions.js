import { useMemo } from "react";
import { useDispatch } from "react-redux";
import * as actionCreators from "./actionCreators";
import useFetch from "../../hooks/useFetch";

const API_KEY = `AIzaSyBdYwP4dtvj9dnrRfyMpAKu-eO1wjbMaZI`;

export const getHomeApiRequest = () => async (dispatch, getState) => {

   // fetch data for walletReducer
   const responseWallet =  await useFetch(`https://authorization-bece2-default-rtdb.firebaseio.com/wallet.json`);
   console.log(responseWallet, ' dataWallet');

   dispatch(actionCreators.getWalletApi(responseWallet));

   // fetch data for historyReducer
   const responseHistory =  await useFetch(`https://authorization-bece2-default-rtdb.firebaseio.com/history.json`);

   dispatch(actionCreators.getHistoryApi(responseHistory.cryptos));

}

export const getMarketApiRequest = () => async (dispatch) => {

   const responseMarket = await useFetch(`https://authorization-bece2-default-rtdb.firebaseio.com/market.json`);
  
   dispatch(actionCreators.getMarketApi(responseMarket));
   
}

export const setBalance = (newWallet) => async (dispatch) => {

   const params = {
      method: 'PUT',
      body: JSON.stringify(newWallet)
   }

   const responseBalance = useFetch(`https://authorization-bece2-default-rtdb.firebaseio.com/wallet.json`, params);

   dispatch(actionCreators.getWalletApi(responseBalance));
}

export const postWalletApiRequest = (crypto, cost) => async (dispatch, getState) => {

   dispatch(actionCreators.addCryptoToWallet(crypto));
   dispatch(actionCreators.decreaseBalance(cost));

   const state = getState();

   const params = {
      method: 'PUT',
      body: JSON.stringify(state.walletReducer)
   }

   const responseWallet = await useFetch(`https://authorization-bece2-default-rtdb.firebaseio.com/wallet.json`, params);

   dispatch(actionCreators.getWalletApi(responseWallet));
   
}

export const postHistoryApiRequest = (crypto) => async (dispatch, getState) => {

   dispatch(actionCreators.addCryptoToHistory(crypto));

   const state = getState();

   const params = {
      method: 'PUT',
      body: JSON.stringify(state.historyReducer)
   }

   const responseHistory = await useFetch(`https://authorization-bece2-default-rtdb.firebaseio.com/history.json`, params);

   dispatch(actionCreators.getHistoryApi(responseHistory.cryptos));
   
}

export const sellCrypto = (crypto, enteredValue) => async (dispatch, getState) => {
   
   const cost = Number(enteredValue);
   const cryptoRemoved = {
      ...crypto,
      cost: cost
   }
   
   dispatch(actionCreators.removeCryptoFromWallet(cryptoRemoved));
   dispatch(actionCreators.increaseBalance(cost));

   const state = getState();

   const params = {
      method: 'PUT',
      body: JSON.stringify(state.walletReducer)
   }

   const responseSell = await useFetch(`https://authorization-bece2-default-rtdb.firebaseio.com/wallet.json`, params);

   dispatch(actionCreators.getHistoryApi(responseSell));

}

export const addMoneyToWallet = (value) => async (dispatch, getState) => {
   dispatch(actionCreators.increaseBalance(value));

   const state = getState();

   const params = {
      method: 'PUT',
      body: JSON.stringify(state.walletReducer)
   }

   const responseMoney = await useFetch(`https://authorization-bece2-default-rtdb.firebaseio.com/wallet.json`, params);

   dispatch(actionCreators.getWalletApi(responseMoney));

}













export const getUserInformation = (userData, isRemember, navigate) => async (dispatch, getState) => { 

   const params = {
      method: 'POST',
      body: JSON.stringify(userData)
   }

   const responseUserInfo = await useFetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, params);

   const idToken = responseUserInfo.idToken;
   const userInfo = {
      userId: responseUserInfo.localId,
      email: responseUserInfo.email,
   };

   if(isRemember){
      localStorage.setItem('token', idToken);
   }

   dispatch(actionCreators.getUserInformation(userInfo));

   
   navigate('/home');
}


// export const clearCryptoHistory = () => async (dispatch, getState) => {
//    dispatch(actionCreators.clearCryptoHistory());

//    const state = getState();

//    const response = await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/history.json`, {
//       method: 'PUT',
//       body: JSON.stringify(state.historyReducer)
//    });
//    const data = await response.json();
//    dispatch(actionCreators.getHistoryApi(data));
// }


