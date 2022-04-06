import { useMemo } from "react";
import { useDispatch } from "react-redux";
import * as actionCreators from "./actionCreators";

const API_KEY = `AIzaSyBdYwP4dtvj9dnrRfyMpAKu-eO1wjbMaZI`;

export const getHomeApiRequest = () => async (dispatch, getState) => {
   
   // const state = getState();
   // const userId = state.userReducer.userId;

   const responseWallet = await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/wallet.json`)
   const dataWallet = await responseWallet.json();
  
   dispatch(actionCreators.getWalletApi(dataWallet));

   const responseHistory = await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/history.json`)
   const dataHistory = await responseHistory.json();

   dispatch(actionCreators.getHistoryApi(dataHistory.cryptos))

    

  
    // fetch using userId 
   //  await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/wallets.json`)
   //  .then((response) => response.json())
   //  .then((data) => {
   //     console.log(data , ' dataAAAA');
   //    const filteredData = data.filter(dataEl => dataEl.userId === userId);
   //    console.log(filteredData , ' filteredData');
   //    dispatch(actionCreators.getWalletApi(filteredData[0]))
   //  });

    // fetch using userId 

   //  await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/history.json`)
   //  .then((response) => response.json())
   //  .then((data) => {
   //    console.log(data,  ' ??');
   //    const filteredCryptos = data.cryptos.filter(crypto => crypto.userId === userId);
   //    console.log(filteredCryptos[0], ' filteredCryptos');
   //    dispatch(actionCreators.getHistoryApi(filteredCryptos))
   //  });

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
      // body: JSON.stringify(state.walletReducer)
      body: JSON.stringify(state.walletReducer)
   });
   const data = await response.json();
   dispatch(actionCreators.getWalletApi(data));
   
}

export const postHistoryApiRequest = (crypto) => async (dispatch, getState) => {
   console.log('POST HİSTIRYORI AASPİ RQUEST ' , crypto);

   dispatch(actionCreators.addCryptoToHistory(crypto));

   const state = getState();

   const response = await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/history.json`, {
      method: 'PUT',
      body: JSON.stringify(state.historyReducer)
   });
   const data = await response.json();
   dispatch(actionCreators.getHistoryApi(data.cryptos));
   
}

export const sellCrypto = (crypto, enteredValue) => async (dispatch, getState) => {
   
   const cost = Number(enteredValue);
   const cryptoRemoved = {
      ...crypto,
      cost: cost
   }

   console.log(cost, ' => before dispatch');
   
   dispatch(actionCreators.removeCryptoFromWallet(cryptoRemoved));
   dispatch(actionCreators.increaseBalance(cost));

   const state = getState();

   const response = await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/wallet.json`, {
      method: 'PUT',
      body: JSON.stringify(state.walletReducer)
   });
   const data = await response.json();
   dispatch(actionCreators.getHistoryApi(data));

}

export const addMoneyToWallet = (value) => async (dispatch, getState) => {
   dispatch(actionCreators.increaseBalance(value));

   const state = getState();

   const response = await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/wallet.json`, {
      method: 'PUT',
      body: JSON.stringify(state.walletReducer)
   });
   const data = await response.json();
   dispatch(actionCreators.getWalletApi(data));

}

export const getUserInformation = (userData, isRemember, navigate) => async (dispatch, getState) => {

      const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
         method: 'POST',
         body: JSON.stringify(userData)
      });
      const data = await response.json();
      console.log(data, ' SINGIN DATA');

      const idToken = data.idToken;
      const userInfo = {
         userId: data.localId,
         email: data.email,
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


